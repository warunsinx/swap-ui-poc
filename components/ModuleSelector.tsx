export default function ModuleSelector({
  module,
  setModule,
}: {
  module: "swap" | "pool";
  setModule: (module: "swap" | "pool") => void;
}) {
  return (
    <div className="rounded-xl p-1.5 bg-white flex space-x-1 shadow mt-32 mb-10 select-none">
      <div
        onClick={() => setModule("swap")}
        className={`${
          module === "swap"
            ? "font-medium bg-blue-500 text-white hover:text-white cursor-default"
            : "text-blue-400 hover:text-blue-500 cursor-pointer"
        } text-lg h-full flex items-center justify-center rounded-lg px-3`}
      >
        Swap
      </div>
      <div
        onClick={() => setModule("pool")}
        className={`${
          module === "pool"
            ? "font-medium bg-blue-500 text-white hover:text-white cursor-default"
            : "text-blue-400 hover:text-blue-500 cursor-pointer"
        } text-lg h-full flex items-center justify-center rounded-lg px-3`}
      >
        Pool
      </div>
    </div>
  );
}
