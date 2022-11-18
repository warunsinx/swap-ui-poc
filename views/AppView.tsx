import { useEffect, useState } from "react";
import ModuleSelector from "../components/ModuleSelector";
import SwapModule from "../components/SwapModule";
import PoolModule from "../components/PoolModule";
import useWalletStore from "../stores/WalletStore";
import swapService from "../services/swap.service";

export default function AppView() {
  // swapService.getPairAddr("YES", "KUSDT");
  // swapService.getPairAddr("KUSDC", "KUSDT");
  // swapService.getPairAddr("KKUB", "KUSDT");

  const [module, setModule] = useState<"swap" | "pool">("swap");
  const loadSession = useWalletStore((state) => state.loadSession);
  const walletAddress = useWalletStore((state) => state.address);
  const loadTokenBalances = useWalletStore((state) => state.loadWalletBalances);
  const loadAllowances = useWalletStore((state) => state.loadWalletAllowances);
  const loadLiquidities = useWalletStore(
    (state) => state.loadWalletLiquidiities
  );

  useEffect(() => {
    loadSession();
  }, []);

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
