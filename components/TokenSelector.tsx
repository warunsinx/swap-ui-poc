import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { SWAP_TOKENS } from "../constants/tokens";

export default function TokenSelector({
  selectedToken,
  setSelectedToken,
}: {
  selectedToken: string;
  setSelectedToken: (token: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="h-full flex items-center justify-center pr-2 select-none cursor-pointer"
      >
        <div className="h-10 bg-blue-100 w-full rounded-lg flex items-center justify-center text-blue-500 pl-3 pr-1 hover:bg-opacity-80">
          <p>Select a Token</p>
          <ChevronDownIcon className="w-5" />
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
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
              <Dialog.Overlay className="fixed inset-0" />
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
              <div className="inline-block w-full max-w-md h-96 p-5 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <p className="text-blue-500 font-medium pl-0.5">
                  Select a token
                </p>
                <div className="space-y-2.5 mt-2">
                  {SWAP_TOKENS.map((token) => (
                    <div className="flex items-center w-full justify-between rounded-lg p-3 bg-blue-100 text-blue-500">
                      <p className="text-lg">{token.symbol}</p>
                      <p className="text-lg">0.0</p>
                    </div>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}