import { useEffect, useState } from "react";
import ModuleSelector from "../components/ModuleSelector";
import SwapModule from "../components/SwapModule";
import PoolModule from "../components/PoolModule";
import useWalletStore from "../stores/WalletStore";

export default function AppView() {
  const [module, setModule] = useState<"swap" | "pool">("swap");
  const walletAddress = useWalletStore((state) => state.address);
  const loadTokenBalances = useWalletStore((state) => state.loadTokenBalances);
  const loadAllowances = useWalletStore((state) => state.loadAllowances);
  const loadLiquidities = useWalletStore((state) => state.loadLiquidiities);

  useEffect(() => {
    if (walletAddress) {
      loadTokenBalances();
      loadAllowances();
      loadLiquidities();
    }
  }, [walletAddress]);

  return (
    <>
      <ModuleSelector module={module} setModule={setModule} />
      {module === "swap" ? <SwapModule /> : <PoolModule />}
    </>
  );
}
