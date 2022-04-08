import { useState } from "react";
import ModuleSelector from "../components/ModuleSelector";
import SwapModule from "../components/SwapModule";
import PoolModule from "../components/PoolModule";

export default function AppView() {
  const [module, setModule] = useState<"swap" | "pool">("swap");

  return (
    <div className="flex-1 h-full w-full flex flex-col items-center">
      <ModuleSelector module={module} setModule={setModule} />
      {module === "swap" ? <SwapModule /> : <PoolModule />}
    </div>
  );
}
