import create from "zustand";
import { ethereum } from "../utils/ethereum";
import bitkubNextService from "../services/bk-next.service";
import swapMulticallService from "../services/swap.multicall.service";
import tokenService from "../services/token.service";
import localService from "../services/local.service";
import STORAGE_KEYS from "../constants/storageKey";
import { requestWindow } from "../utils/requestWindow";
import { BKNextAuthRes } from "../types/bk-next";

enum WalletType {
  Metamask = "metamask",
  BitkubNext = "bitkub-next",
}

const store = (set: any, get: any) => ({
  address: "" as string,
  walletType: "" as WalletType,
  bkNextPhone: "" as string,
  walletBalances: {} as Record<string, string>,
  walletAllowances: {} as Record<string, string>,
  walletLiquidities: {} as Record<string, string>,
  sessionLoading: true,
  loadSession: async () => {
    const walletType = localService.getItem(STORAGE_KEYS.WALLET_TYPE);
    if (walletType) {
      switch (walletType) {
        case WalletType.Metamask:
          set({ sessionLoading: false });
          return get().connectMetamask() as Promise<string>;
        case WalletType.BitkubNext:
          return get().connectBitkubNext() as Promise<string>;
        default:
          return null;
      }
    }
    set({ sessionLoading: false });
  },
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
          localService.setItem(STORAGE_KEYS.WALLET_TYPE, WalletType.Metamask);
          set({ address: account, walletType: WalletType.Metamask });
          return account;
        }
      }
      set({ sessionLoading: false });
      return null;
    } catch (e: any) {
      set({ sessionLoading: false });
      console.error(e.response);
      return null;
    }
  },

  connectBitkubNext: async () => {
    try {
      let refreshToken = localService.getItem(STORAGE_KEYS.BK_REFRESH_TOKEN);
      console.log("refreshToken",refreshToken)
      let accessToken = localService.getItem(STORAGE_KEYS.BK_ACCESS_TOKEN);
      console.log("accessToken",accessToken)
      if (refreshToken) {
        const res = await bitkubNextService.extendToken(refreshToken);
        console.log("In IF")

        refreshToken = res.refresh_token;
        accessToken = res.access_token;
      } else {
        const newWindow = window.open(
          "https://www.xn--y3cabc8e7a4j.digital/callback-loading",
          "_blank",
          `toolbar=no,
          location=no,
          status=no,
          menubar=no,
          scrollbars=yes,
          resizable=yes,
          width=400px,
          height=600px`
        );

        const res = (await requestWindow(
          newWindow as any,
          bitkubNextService.getAuthorizeUrl(),
          STORAGE_KEYS.OAUTH_RESULT,
          STORAGE_KEYS.OAUTH_ERROR
        )) as BKNextAuthRes;

        refreshToken = res.refresh_token;
        accessToken = res.access_token;
      }

      const res = await bitkubNextService.loadAccountInfo(accessToken);
      const account = res.data.wallet_address;
      // console.log("res",res)
      // console.log("account",account)
      const phone = res.data.phone;

      set({
        address: account,
        walletType: WalletType.BitkubNext,
        bkNextPhone: phone,
      });

      localService.setItem(STORAGE_KEYS.BK_REFRESH_TOKEN, refreshToken);
      localService.setItem(STORAGE_KEYS.BK_ACCESS_TOKEN, accessToken);
      localService.setItem(STORAGE_KEYS.WALLET_TYPE, WalletType.BitkubNext);

      // check old interval
      const oldIv = localService.getItem(STORAGE_KEYS.REFRESH_IV);
      if (!oldIv) {
        // refresh token
        const iv = setInterval(async () => {
          const refreshToken = localService.getItem(
            STORAGE_KEYS.BK_REFRESH_TOKEN
          );
          const res = await bitkubNextService.extendToken(refreshToken);

          const info = await bitkubNextService.loadAccountInfo(accessToken);
          const phone = info.data.phone;

          set({ bkNextPhone: phone });

          localService.setItem(
            STORAGE_KEYS.BK_REFRESH_TOKEN,
            res.refresh_token
          );
          localService.setItem(STORAGE_KEYS.BK_ACCESS_TOKEN, res.access_token);
        }, 14 * 60 * 1000);

        // clear interval on close window
        window.onbeforeunload = (ev) => {
          clearInterval(iv);
          localService.removeItem(STORAGE_KEYS.REFRESH_IV);
        };

        localService.setItem(STORAGE_KEYS.REFRESH_IV, iv);
      }
      set({ sessionLoading: false });
      return account;
    } catch (e) {
      set({ sessionLoading: false });
      localService.removeItem(STORAGE_KEYS.BK_REFRESH_TOKEN);
      localService.removeItem(STORAGE_KEYS.BK_ACCESS_TOKEN);
      localService.removeItem(STORAGE_KEYS.WALLET_TYPE);
      set({
        address: null,
        walletType: null,
      });
      console.error("connect bk next error: ", e);
      return null;
    }
  },
  loadWalletBalances: async () => {
    const address = get().address;
    if (address) {
      const balances = await swapMulticallService.getTokenBalances(address);
      const kubBalance = await tokenService.getBalance("KUB", address);
      balances["KUB"] = kubBalance;
      set({ walletBalances: balances });
    } else {
      set({ walletBalances: {} });
    }
  },
  loadWalletAllowances: async () => {
    const address = get().address;
    if (address) {
      const tokenAllowances = await swapMulticallService.getSwapTokenAllowances(
        address
      );
      const poolAllowances = await swapMulticallService.getPoolTokenAllowances(
        address
      );
      const allowances = { ...tokenAllowances, ...poolAllowances };
      set({ walletAllowances: allowances });
    } else {
      set({ walletAllowances: {} });
    }
  },
  loadWalletLiquidiities: async () => {
    const address = get().address;
    if (address) {
      const liquidities = await swapMulticallService.getPoolTokenBalances(
        address
      );
      set({ walletLiquidities: liquidities });
    } else {
      set({ walletLiquidities: {} });
    }
  },
});

type WalletStore = ReturnType<typeof store>;
const useWalletStore = create<WalletStore>(store);

export default useWalletStore;
