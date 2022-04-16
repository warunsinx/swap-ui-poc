import { ArrowCircleDownIcon } from "@heroicons/react/solid";
import TokenSelector from "./TokenSelector";
import ConnectWalletButton from "./ConnectWalletButton";
import { useState } from "react";
import SwapSettingButton from "./SwapSettingButton";

export default function SwapModule() {
  const [initToken, setInitToken] = useState("");
  const [finalToken, setFinalToken] = useState("");
  const [initAmount, setInitAmount] = useState("");
  const [finalAmount, setFinalAmount] = useState("");

  return (
    <>
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-7">
        <div className="flex items-center justify-between">
          <p className="p-0 m-0 text-blue-500 font-bold text-2xl select-none">
            Swap
          </p>
          <SwapSettingButton />
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
              selectedToken={initToken}
              setSelectedToken={setInitToken}
            />
          </div>
        </div>
        <ArrowCircleDownIcon className="text-blue-500 w-8 h-8 my-3 mx-auto" />
        <div className="relative mb-4">
          <input
            value={finalAmount}
            onChange={(e) => setFinalAmount(e.target.value)}
            type="number"
            className="w-full border-2 border-blue-400 rounded-lg h-14 px-5 text-blue-500"
          />
          <div className="absolute top-0 bottom-0 right-0">
            <TokenSelector
              selectedToken={finalToken}
              setSelectedToken={setFinalToken}
            />
          </div>
        </div>
        <ConnectWalletButton />
        <div className="flex justify-between items-center mt-3 text-sm font-medium text-gray-500">
          <p>Price</p>
          <p>0 KUSDT per KUB</p>
        </div>
      </div>
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-7 mt-6 text-sm font-medium text-gray-500 space-y-1">
        <div className="flex items-center justify-between">
          <p>Minimum received</p>
          <p>0</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Price Impact</p>
          <p>0</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Liquidity Provider Fee</p>
          <p>0</p>
        </div>
      </div>
    </>
  );
}
