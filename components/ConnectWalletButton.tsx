import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CustomButton from "./CustomButton";
import { ethereum } from "../utils/ethereum";

export default function ConnectWalletButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMetamask = async () => {
    try {
      const eth = ethereum();
      if (eth) {
        const accounts = await eth.request({
          method: "eth_requestAccounts",
        });
        const account: string = accounts[0];
        console.log(account);
      }
      setIsOpen(false);
      return null;
    } catch (e: any) {
      console.error(e.response);
      setIsOpen(false);
      return null;
    }
  };

  const handleBitkubNext = async () => {
    setIsOpen(false);
  };

  return (
    <>
      <CustomButton onClick={() => setIsOpen(true)} text="Connect Wallet" />
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
              <div className="inline-block w-full max-w-lg h-96 p-5 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="flex p-3 w-full space-x-7 h-full">
                  <CustomButton
                    onClick={handleMetamask}
                    color="bg-gradient-to-r from-yellow-500 to-yellow-600"
                    text="Metamask"
                    height="flex-1"
                    animate={true}
                  />
                  <CustomButton
                    onClick={handleBitkubNext}
                    color="bg-gradient-to-r from-green-500 to-green-600"
                    text="Bitkub Next"
                    height="flex-1"
                    animate={true}
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
