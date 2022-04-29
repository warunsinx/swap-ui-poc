import ConnectWalletButton from "./ConnectWalletButton";
import useWalletStore from "../stores/WalletStore";
import CustomButton from "./CustomButton";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import TokenSelector from "./TokenSelector";
import { SWAP_TOKENS, POOL_TOKENS } from "../constants/tokens";
import { PlusCircleIcon } from "@heroicons/react/solid";
import tokenService from "../services/token.service";
import swapService from "../services/swap.service";
import SwapSettingButton from "./SwapSettingButton";

export default function PoolModule() {
  const [isOpen, setIsOpen] = useState(false);
  const [initToken, setInitToken] = useState("");
  const [finalToken, setFinalToken] = useState("");
  const [initAmount, setInitAmount] = useState("");
  const [finalAmount, setFinalAmount] = useState("");
  const [approveLoad, setApproveLoad] = useState(false);
  const [slipageTol, setSlipageTol] = useState(0.8);
  const [deadlineMinute, setDeadlineMinute] = useState(20);
  const [addLoad, setAddLoad] = useState(false);
  const [spotPrice, setSpotPrice] = useState(0);
  const [invalidPair, setInvalidPair] = useState(false);

  const wallet = useWalletStore((state) => state.address);
  const allowances = useWalletStore((state) => state.allowances);
  const balances = useWalletStore((state) => state.balances);
  const liquidities = useWalletStore((state) => state.liquidities);
  const loadAllowances = useWalletStore((state) => state.loadAllowances);
  const loadBalances = useWalletStore((state) => state.loadTokenBalances);

  const handleAddPool = async () => {
    setAddLoad(true);
    const deadline =
      Math.floor(new Date().getTime() / 1000) + deadlineMinute * 60;

    try {
      if (initToken === "KUB" || finalToken === "KUB") {
        if (initToken === "KUB") {
          const amountETHMin = +initAmount - (+initAmount * slipageTol) / 100;
          const amountTokenMin =
            +finalAmount - (+finalAmount * slipageTol) / 100;
          const tx = await swapService.addLiquidityETH(
            finalToken,
            finalAmount,
            amountTokenMin.toString(),
            amountETHMin.toString(),
            wallet,
            deadline
          );
          await tx.wait();
        } else {
          const amountTokenMin = +initAmount - (+initAmount * slipageTol) / 100;
          const amountETHMin = +finalAmount - (+finalAmount * slipageTol) / 100;
          const tx = await swapService.addLiquidityETH(
            initToken,
            initAmount,
            amountTokenMin.toString(),
            amountETHMin.toString(),
            wallet,
            deadline
          );
          await tx.wait();
        }
      } else {
        const amountTokenAMin = +initAmount - (+initAmount * slipageTol) / 100;
        const amountTokenBMin =
          +finalAmount - (+finalAmount * slipageTol) / 100;
        const tx = await swapService.addLiquidity(
          initToken,
          finalToken,
          initAmount,
          finalAmount,
          amountTokenAMin.toString(),
          amountTokenBMin.toString(),
          wallet,
          deadline
        );
        await tx.wait();
      }
    } catch (err) {
      setAddLoad(false);
    }
    loadBalances();
    setAddLoad(false);
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

  const calculatePool = async (calculateOut: boolean = true, value: string) => {
    const _initToken = initToken === "KUB" ? "KKUB" : initToken;
    const _finalToken = finalToken === "KUB" ? "KKUB" : finalToken;

    if (calculateOut) {
      const _spotPrice = await swapService.getSpotPrice(
        _initToken,
        _finalToken
      );
      if (_spotPrice > 0) {
        setInvalidPair(false);
        setSpotPrice(_spotPrice);
        setFinalAmount((_spotPrice * +value).toString());
      } else if (_spotPrice === -1) {
        setInvalidPair(true);
      }
    } else {
      const _spotPrice = await swapService.getSpotPrice(
        _finalToken,
        _initToken
      );
      if (_spotPrice > 0) {
        setInvalidPair(false);
        setSpotPrice(_spotPrice);
        setInitAmount((_spotPrice * +value).toString());
      } else if (_spotPrice === -1) {
        setInvalidPair(true);
      }
    }
  };

  useEffect(() => {
    if (initToken && finalToken && +initAmount > 0) {
      calculatePool(true, initAmount);
    } else if (initToken && finalToken && +finalAmount > 0) {
      calculatePool(false, finalAmount);
    }
  }, [initToken, finalToken]);

  const renderButton = () => {
    if (!wallet) {
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
      (+initAmount > +balances[initToken] ||
        +finalAmount > +balances[finalToken])
    ) {
      // check balance
      if (+initAmount > +balances[initToken]) {
        return (
          <CustomButton text={`Insufficient ${initToken}`} disabled={true} />
        );
      } else
        return (
          <CustomButton text={`Insufficient ${finalToken}`} disabled={true} />
        );
    } else if (
      initToken &&
      finalToken &&
      initAmount &&
      (+allowances[initToken] === 0 || +allowances[finalToken] === 0)
    ) {
      if (+allowances[initToken] === 0) {
        return (
          <CustomButton
            text={`Approve ${initToken}`}
            disabled={approveLoad}
            isLoading={approveLoad}
            onClick={() => handleApprove(initToken)}
          />
        );
      } else
        return (
          <CustomButton
            text={`Approve ${finalToken}`}
            disabled={approveLoad}
            isLoading={approveLoad}
            onClick={() => handleApprove(finalToken)}
          />
        );
    } else {
      // check add pool
      return (
        <CustomButton
          text="Add Pool"
          disabled={
            addLoad ||
            !initToken ||
            !finalToken ||
            +initAmount <= 0 ||
            +finalAmount <= 0 ||
            invalidPair
          }
          isLoading={addLoad}
          onClick={handleAddPool}
        />
      );
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-5 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex flex-col w-full h-full px-1">
                  <p className="text-xl text-blue-500 font-bold">Add Pool</p>
                  <div className="relative mt-4">
                    <input
                      value={initAmount}
                      onChange={(e) => {
                        setInitAmount(e.target.value);
                        calculatePool(true, e.target.value);
                      }}
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
                  <PlusCircleIcon
                    onClick={() => {
                      setInitAmount(finalAmount);
                      setInitToken(finalToken);
                      setFinalToken(initToken);
                    }}
                    className="text-blue-500 w-8 h-8 my-3 mx-auto cursor-pointer"
                  />
                  <div className="relative mb-6">
                    <input
                      value={finalAmount}
                      onChange={(e) => {
                        setFinalAmount(e.target.value);
                        calculatePool(false, e.target.value);
                      }}
                      type="number"
                      className="w-full border-2 border-blue-400 rounded-lg h-14 px-5 text-blue-500"
                    />
                    <div className="absolute top-0 bottom-0 right-0">
                      <TokenSelector
                        tokens={SWAP_TOKENS.filter(
                          (token) => token.symbol !== initToken
                        )}
                        selectedToken={finalToken}
                        setSelectedToken={setFinalToken}
                      />
                    </div>
                  </div>
                  {renderButton()}
                  {finalAmount && (
                    <>
                      <p className="mt-5 mb-1 text-sm text-blue-500 font-medium">
                        {/* Prices and Pool Share */}
                        Prices
                      </p>
                      <div className="flex justify-between text-sm font-medium text-gray-500 border-2 border-blue-500 rounded-xl p-5 px-20">
                        <div className="flex flex-col items-center justify-between">
                          <p className="font-medium">
                            {(+finalAmount / +initAmount).toFixed(5)}
                          </p>
                          <p className="text-blue-500">
                            {finalToken} per {initToken}
                          </p>
                        </div>
                        <div className="flex flex-col items-center justify-between">
                          <p className="font-medium">
                            {(+initAmount / +finalAmount).toFixed(5)}
                          </p>
                          <p className="text-blue-500">
                            {initToken} per {finalToken}
                          </p>
                        </div>
                        {/* <div className="flex flex-col items-center justify-between">
                          <p className="font-medium">{spotPrice.toFixed(2)}</p>
                          <p className="text-blue-500">Share of Pool</p>
                        </div> */}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-7">
        <div className="flex items-center justify-between mb-3">
          <p className="p-0 m-0 text-blue-500 font-bold text-2xl select-none">
            Pool
          </p>
          <SwapSettingButton
            tol={slipageTol}
            setTol={setSlipageTol}
            deadline={deadlineMinute}
            setDeadline={setDeadlineMinute}
          />
        </div>
        {!wallet ? (
          <ConnectWalletButton />
        ) : (
          <CustomButton text="Add Pool" onClick={() => setIsOpen(true)} />
        )}
        <p className="font-medium text-gray-500 mt-3 mb-1.5">Your Liquidity</p>
        <div className="h-36 w-full bg-blue-100 rounded-xl flex justify-center text-gray-500 p-3">
          {!wallet ? (
            <p className="my-auto">Connect a wallet to view your liquidity.</p>
          ) : (
            POOL_TOKENS.map((token, i) => (
              <div
                className="w-full p-3 rounded-xl flex justify-between bg-blue-50 h-10 items-center text-blue-400"
                key={i}
              >
                <p>{token.symbol}</p>
                <p>{liquidities[token.symbol]}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
