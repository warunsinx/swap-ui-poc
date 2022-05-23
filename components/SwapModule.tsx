import { ArrowCircleDownIcon } from "@heroicons/react/solid";
import TokenSelector from "./TokenSelector";
import ConnectWalletButton from "./ConnectWalletButton";
import { useState, useEffect } from "react";
import SwapSettingButton from "./SwapSettingButton";
import swapService from "../services/swap.service";
import { SWAP_TOKENS } from "../constants/swapTokens";
import useWalletStore from "../stores/WalletStore";
import CustomButton from "./CustomButton";
import tokenService from "../services/token.service";
import to from "await-to-js";
import localService from "../services/local.service";
import STORAGE_KEYS from "../constants/storageKey";
import swapNextService from "../services/swap.next.service";
import { delay } from "../utils/delay";

export default function SwapModule() {
  const [initToken, setInitToken] = useState("");
  const [finalToken, setFinalToken] = useState("");
  const [initAmount, setInitAmount] = useState("");
  const [finalAmount, setFinalAmount] = useState("");
  const [slipageTol, setSlipageTol] = useState(0.8);
  const [deadlineMinute, setDeadlineMinute] = useState(20);
  const [approveLoad, setApproveLoad] = useState(false);
  const [swapLoad, setSwapLoad] = useState(false);
  const [spotPrice, setSpotPrice] = useState(0);
  const [invalidPair, setInvalidPair] = useState(false);
  const [lastInputted, setLastInputted] = useState(0);
  const [reserves, setReserves] = useState([0, 0]);

  const walletType = useWalletStore((state) => state.walletType);
  const sessionLoading = useWalletStore((state) => state.sessionLoading);
  const wallet = useWalletStore((state) => state.address);
  const balances = useWalletStore((state) => state.walletBalances);
  const allowances = useWalletStore((state) => state.walletAllowances);
  const loadAllowances = useWalletStore((state) => state.loadWalletAllowances);
  const loadBalances = useWalletStore((state) => state.loadWalletBalances);

  const handleSwap = async () => {
    setSwapLoad(true);
    const deadline =
      Math.floor(new Date().getTime() / 1000) + deadlineMinute * 60;
    const minAmountOut = +finalAmount - (+finalAmount * slipageTol) / 100;

    try {
      if (walletType === "bitkub-next") {
        const accessToken = localService.getItem(STORAGE_KEYS.BK_ACCESS_TOKEN);
        const tx = await swapNextService.swapExactTokensForTokens(
          accessToken,
          +initAmount,
          minAmountOut,
          [initToken, finalToken],
          wallet,
          deadline
        );
        await tx.wait();
        await delay(5000);
      } else if (initToken === "KUB") {
        const tx = await swapService.swapExactETHForTokens(
          +initAmount,
          minAmountOut,
          ["KKUB", finalToken],
          wallet,
          deadline
        );
        await tx.wait();
      } else {
        const _finalToken = finalToken === "KUB" ? "KKUB" : finalToken;
        const tx = await swapService.swapExactTokensForTokens(
          +initAmount,
          minAmountOut,
          [initToken, _finalToken],
          wallet,
          deadline
        );
        await tx.wait();
      }
    } catch (err) {
      console.log(err);
      setSwapLoad(false);
    }
    loadBalances();
    setSwapLoad(false);
  };

  const handleApprove = async (token: string) => {
    setApproveLoad(true);
    try {
      await tokenService.approve(token).then((tx) => tx?.wait());
    } catch (err) {
      setApproveLoad(false);
    }
    loadAllowances();
    setApproveLoad(false);
  };

  const calculateSwap = async (calculateOut: boolean = true, value: string) => {
    const _initToken = initToken === "KUB" ? "KKUB" : initToken;
    const _finalToken = finalToken === "KUB" ? "KKUB" : finalToken;

    if (calculateOut) {
      // const _finalAmount = await swapService.getAmountsOut(+value, [
      //   _initToken,
      //   _finalToken,
      // ]);
      const _finalAmount = await swapService.getAmountOut(
        +value,
        reserves[0],
        reserves[1]
      );
      if (+_finalAmount > 0) {
        setInvalidPair(false);
        setFinalAmount(_finalAmount.toString());
        const _spotPrice = await swapService.getSpotPrice(
          reserves[0],
          reserves[1]
        );
        setSpotPrice(_spotPrice);
      } else return setInvalidPair(true);
    } else {
      const _initAmount = await swapService.getAmountIn(
        +value,
        reserves[0],
        reserves[1]
      );
      if (+_initAmount > 0) {
        setInvalidPair(false);
        setInitAmount(_initAmount.toString());
        const _spotPrice = await swapService.getSpotPrice(
          reserves[0],
          reserves[1]
        );
        setSpotPrice(_spotPrice);
      } else return setInvalidPair(true);
    }
  };

  useEffect(() => {
    if (initToken && finalToken && +initAmount > 0) {
      calculateSwap(true, initAmount);
    } else if (initToken && finalToken && +finalAmount > 0) {
      calculateSwap(false, finalAmount);
    }
  }, [initToken, finalToken, slipageTol]);

  const renderButton = () => {
    if (sessionLoading) {
      return <CustomButton isLoading={true} text="" disabled={true} />;
    } else if (!wallet) {
      // check wallet
      if (invalidPair) {
        // check invalid pair
        return <CustomButton text="Invalid Pair" disabled={true} />;
      } else return <ConnectWalletButton />;
    } else if (invalidPair) {
      // check invalid pair
      return <CustomButton text="Invalid Pair" disabled={true} />;
    } else if (
      initToken &&
      finalToken &&
      initAmount &&
      +initAmount > +balances[initToken]
    ) {
      // check balance
      return (
        <CustomButton text={`Insufficient ${initToken}`} disabled={true} />
      );
    } else if (
      walletType === "metamask" &&
      initToken &&
      finalToken &&
      initAmount &&
      +allowances[initToken] === 0
    ) {
      // check allowance
      return (
        <CustomButton
          text={`Approve ${initToken}`}
          disabled={approveLoad}
          isLoading={approveLoad}
          onClick={() => handleApprove(initToken)}
        />
      );
    } else {
      // check swap
      return (
        <CustomButton
          text="Swap"
          disabled={
            swapLoad ||
            !initToken ||
            !finalToken ||
            +initAmount <= 0 ||
            +finalAmount <= 0 ||
            invalidPair
          }
          isLoading={swapLoad}
          onClick={handleSwap}
        />
      );
    }
  };

  const calculatePriceImpact = () => {
    const fee = 1 - 0.3 / 100;
    const spot = spotPrice * fee;
    const exec = +finalAmount / +initAmount;
    return (((spot - exec) / spot) * 100 * fee).toFixed(2);
  };

  useEffect(() => {
    if (initToken && finalToken) {
      getReserve();
    }
  }, [finalToken, initToken]);

  const getReserve = async () => {
    const _initToken = initToken === "KUB" ? "KKUB" : initToken;
    const _finalToken = finalToken === "KUB" ? "KKUB" : finalToken;
    const [err, res] = await to(
      swapService.getReserve(_initToken, _finalToken)
    );
    if (err) return setInvalidPair(true);
    setInvalidPair(false);
    const [r0, r1] = res;
    setReserves([+r0, +r1]);
  };

  return (
    <>
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-7">
        <div className="flex items-center justify-between">
          <p className="p-0 m-0 text-blue-500 font-bold text-2xl select-none">
            Swap
          </p>
          <SwapSettingButton
            tol={slipageTol}
            setTol={setSlipageTol}
            deadline={deadlineMinute}
            setDeadline={setDeadlineMinute}
          />
        </div>
        <div className="relative mt-4">
          <input
            value={initAmount}
            onChange={(e) => {
              setLastInputted(0);
              setInitAmount(e.target.value);
              calculateSwap(true, e.target.value);
            }}
            type="number"
            className="w-full border-2 border-blue-400 rounded-lg h-14 px-5 text-blue-500 focus:outline-none focus:ring-0"
          />
          <div className="absolute top-0 bottom-0 right-0">
            <TokenSelector
              tokens={SWAP_TOKENS.filter(
                (token) => token.symbol !== finalToken
              )}
              selectedToken={initToken}
              setSelectedToken={setInitToken}
            />
          </div>
        </div>
        <ArrowCircleDownIcon
          onClick={() => {
            setInitAmount(finalAmount);
            setInitToken(finalToken);
            setFinalToken(initToken);
          }}
          className="text-blue-500 w-8 h-8 my-3 mx-auto cursor-pointer"
        />
        <div className="relative mb-4">
          <input
            value={finalAmount}
            onChange={(e) => {
              setLastInputted(1);
              setFinalAmount(e.target.value);
              calculateSwap(false, e.target.value);
            }}
            type="number"
            className="w-full border-2 border-blue-400 rounded-lg h-14 px-5 text-blue-500 focus:outline-none focus:ring-0"
          />
          <div className="absolute top-0 bottom-0 right-0">
            <TokenSelector
              tokens={SWAP_TOKENS.filter((token) => token.symbol !== initToken)}
              selectedToken={finalToken}
              setSelectedToken={setFinalToken}
            />
          </div>
        </div>
        {renderButton()}
        {finalAmount && !invalidPair && (
          <div className="flex justify-between items-center mt-3 text-sm font-medium text-gray-500">
            <p>Price</p>
            <p>
              {(+initAmount / +finalAmount).toFixed(6)} {initToken} per{" "}
              {finalToken}
            </p>
          </div>
        )}
      </div>
      {finalAmount && !invalidPair && (
        <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-7 py-5 mt-6 text-sm font-medium text-gray-500 space-y-1">
          <div className="flex items-center justify-between">
            <p>Minimum received</p>
            <p>
              {(
                +finalAmount -
                (+finalAmount * slipageTol) / 100
              ).toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 4,
              })}{" "}
              {finalToken}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p>Price Impact</p>
            <p>
              {+calculatePriceImpact() < 0.001
                ? "< 0.01"
                : calculatePriceImpact()}
              {" %"}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p>Liquidity Provider Fee</p>
            <p>
              {(0.003 * +initAmount).toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 6,
              })}{" "}
              {initToken}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
