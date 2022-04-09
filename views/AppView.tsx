import { useState } from "react";
import ModuleSelector from "../components/ModuleSelector";
import SwapModule from "../components/SwapModule";
import PoolModule from "../components/PoolModule";

export default function AppView() {
  const [module, setModule] = useState<"swap" | "pool">("swap");

  return (
    <>
      <ModuleSelector module={module} setModule={setModule} />
      {module === "swap" ? <SwapModule /> : <PoolModule />}
    </>
  );
}
