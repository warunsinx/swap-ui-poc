import ConnectWalletButton from "./ConnectWalletButton";

export default function PoolModule() {
  return (
    <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-7">
      <p className="p-0 m-0 text-blue-500 font-bold text-2xl select-none">
        Pool
      </p>
      <p className="font-medium text-gray-500 mb-3">
        Add liquidity to receive LP tokens
      </p>
      <ConnectWalletButton />
      <p className="font-medium text-gray-500 mt-3">Your Liquidity</p>
      <div className="h-36 w-full bg-blue-100 rounded-xl mt-1.5 flex items-center justify-center text-gray-500">
        <p>Connect a wallet to view your liquidity.</p>
      </div>
    </div>
  );
}
