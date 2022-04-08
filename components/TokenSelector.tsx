import { ChevronDownIcon } from "@heroicons/react/solid";

export default function TokenSelector() {
  return (
    <div className="h-full flex items-center justify-center pr-2 select-none cursor-pointer">
      <div className="h-10 bg-blue-100 w-full rounded-lg flex items-center justify-center text-blue-500 pl-3 pr-1 hover:bg-opacity-80">
        <p>Select a Token</p>
        <ChevronDownIcon className="w-5" />
      </div>
    </div>
  );
}
