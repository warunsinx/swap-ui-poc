import { ArrowCircleDownIcon } from "@heroicons/react/solid";
import TokenSelector from "./TokenSelector";
import ConnectWalletButton from "./ConnectWalletButton";
import { useState } from "react";

export default function SwapModule() {
  const [initToken, setInitToken] = useState("");
  const [finalToken, setFinalToken] = useState("");

  return (
    <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-7">
      <p className="p-0 m-0 text-blue-500 font-bold text-2xl select-none">
        Swap
      </p>
      <div className="relative mt-4">
        <input
          type="text"
          className="w-full border-2 border-blue-400 rounded-lg h-14 px-5 pr-16"
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
          type="text"
          className="w-full border-2 border-blue-400 rounded-lg h-14 px-5 pr-16"
        />
        <div className="absolute top-0 bottom-0 right-0">
          <TokenSelector
            selectedToken={finalToken}
            setSelectedToken={setFinalToken}
          />
        </div>
      </div>
      <ConnectWalletButton />
    </div>
  );
}
