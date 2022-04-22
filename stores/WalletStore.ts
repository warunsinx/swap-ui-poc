import create from "zustand";
import { ethereum } from "../utils/ethereum";
import multicallService from "../services/multicall.service";
import tokenService from "../services/token.service";

enum WalletType {
  Metamask = "metamask",
  BitkubNext = "bitkub-next",
}

const store = (set: any, get: any) => ({
  address: "" as string,
  walletType: "" as WalletType,
  balances: {} as Record<string, string>,
  allowances: {} as Record<string, string>,
  subscribeWalletChanged: (callback?: (address: string) => void) => {
    const eth = ethereum();
    if (eth) {
      return eth.on("accountsChanged", (accounts: string) => {
        const account = accounts[0];
        if (account) {
          callback && callback(account);
        } else {
          callback && callback("");
        }
      });
    }
  },
  connectMetamask: async () => {
    try {
      const eth = ethereum();
      if (eth) {
        const accounts = await eth.request({
          method: "eth_requestAccounts",
        });
        const account: string = accounts[0];
        if (account) {
          get().subscribeWalletChanged((account: string) => {
            const walletType = get().walletType;
            if (walletType === WalletType.Metamask) {
              set({ address: account });
            }
          });
          set({ address: account, walletType: WalletType.Metamask });
          return account;
        }
      }
      return null;
    } catch (e: any) {
      console.error(e.response);
      return null;
    }
  },
  loadTokenBalances: async () => {
    const address = get().address;
    if (address) {
      const balances = await multicallService.getTokenBalances(address);
      const kubBalance = await tokenService.getBalance("KUB", address);
      balances["KUB"] = kubBalance;
      set({ balances });
    } else {
      set({ balances: {} });
    }
  },
  loadAllowances: async () => {
    const address = get().address;
    if (address) {
      const allowances = await multicallService.getAllowances(address);
      set({ allowances });
    } else {
      console.log("Error");
      set({ allowances: {} });
    }
  },
});

type WalletStore = ReturnType<typeof store>;
const useWalletStore = create<WalletStore>(store);

export default useWalletStore;
