import { Dialog, Transition } from "@headlessui/react";
import { AdjustmentsIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";

export default function SwapSettingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AdjustmentsIcon
        className="w-6 text-blue-500 cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
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
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
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
              <div className="inline-block w-full max-w-lg pb-12 p-5 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="px-5">
                  <p className="text-blue-500 font-bold text-2xl border-b pb-2">
                    Settings
                  </p>
                  <p className="text-blue-500 flex-1 mt-7 mb-1.5 font-medium">
                    Slippage Tolerance
                  </p>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      className="w-full border-2 border-blue-400 rounded-lg h-12 px-5 text-blue-500"
                    />
                    <p className="text-2xl text-blue-500">%</p>
                  </div>
                  <p className="text-blue-500 flex-1 mt-6 mb-1.5 font-medium">
                    Transaction Deadline
                  </p>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      className="w-full border-2 border-blue-400 rounded-lg h-12 px-5 text-blue-500"
                    />
                    <p className="text-2xl text-blue-500">Minute</p>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
