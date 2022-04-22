import { ArrowCircleDownIcon } from "@heroicons/react/solid";
import TokenSelector from "./TokenSelector";
import ConnectWalletButton from "./ConnectWalletButton";
import { useState, useEffect } from "react";
import SwapSettingButton from "./SwapSettingButton";
import swapService from "../services/swap.service";
import { SWAP_TOKENS } from "../constants/tokens";
import useWalletStore from "../stores/WalletStore";
import CustomButton from "./CustomButton";
import tokenService from "../services/token.service";

export default function SwapModule() {
  const [initToken, setInitToken] = useState("");
  const [finalToken, setFinalToken] = useState("");
  const [initAmount, setInitAmount] = useState("");
  const [finalAmount, setFinalAmount] = useState("");
  const [slipageTol, setSlipageTol] = useState(0.8);
  const [deadlineMinute, setDeadlineMinute] = useState(20);

  const [approveLoad, setApproveLoad] = useState(false);
  const [swapLoad, setSwapLoad] = useState(false);

  const wallet = useWalletStore((state) => state.address);
  const allowances = useWalletStore((state) => state.allowances);
  const balances = useWalletStore((state) => state.balances);

  const loadAllowances = useWalletStore((state) => state.loadAllowances);
  const loadBalances = useWalletStore((state) => state.loadTokenBalances);

  const handleSwap = async () => {
    setSwapLoad(true);
    const deadline =
      Math.floor(new Date().getTime() / 1000) + deadlineMinute * 60;
    const minAmountOut = +finalAmount - (+finalAmount * slipageTol) / 100;
    try {
      await swapService
        .swapExactTokensForTokens(
          +initAmount,
          minAmountOut,
          [initToken, finalToken],
          wallet,
          deadline
        )
        .then((tx) => tx.wait());
    } catch (err) {
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

  const getAmountOut = async () => {
    const res = await swapService.getAmountOut(
      +initAmount,
      initToken,
      finalToken
    );
    setFinalAmount(res);
  };

  useEffect(() => {
    if (initToken && finalToken && +initAmount > 0) {
      getAmountOut();
    }
  }, [initToken, finalToken, initAmount]);

  const renderButton = () => {
    if (!wallet) {
      // check wallet
      return <ConnectWalletButton />;
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
      initToken &&
      finalToken &&
      initAmount &&
      +allowances[initToken] === 0
    ) {
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
          disabled={swapLoad || !initToken || !finalToken || +initAmount <= 0}
          isLoading={swapLoad}
          onClick={handleSwap}
        />
      );
    }
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
            onChange={(e) => setInitAmount(e.target.value)}
            type="number"
            className="w-full border-2 border-blue-400 rounded-lg h-14 px-5 text-blue-500"
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
            onChange={(e) => setFinalAmount(e.target.value)}
            type="number"
            className="w-full border-2 border-blue-400 rounded-lg h-14 px-5 text-blue-500"
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
        {finalAmount && (
          <div className="flex justify-between items-center mt-3 text-sm font-medium text-gray-500">
            <p>Price</p>
            <p>
              {(+initAmount / +finalAmount).toFixed(6)} {initToken} per{" "}
              {finalToken}
            </p>
          </div>
        )}
      </div>
      {finalAmount && (
        <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-7 py-5 mt-6 text-sm font-medium text-gray-500 space-y-1">
          <div className="flex items-center justify-between">
            <p>Minimum received</p>
            <p>
              {(+finalAmount - (+finalAmount * slipageTol) / 100).toFixed(6)}{" "}
              {finalToken}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p>Price Impact</p>
            <p>0%</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Liquidity Provider Fee</p>
            <p>0 {initToken}</p>
          </div>
        </div>
      )}
    </>
  );
}
