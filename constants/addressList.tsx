export const CONTRACT_ADDRESS = {
  Multicall: "0xcc515Aa7eE9Be4491c98DE68ee2147F0A063759D",
  SwapFactory: "0x12DdcF1b138B439781D0f73eA2519031B136f2F7",
  SwapRouter: "0x3ED28B1Bad735a638A0eE44C16252A00B4ba265c",
  KKUB: "0xD2363550407493939299dB9d648dBB500711FEfE",
  KUSDT: "0x7D9bE96cB1eCE10782085675Ee70e52da5699BCE",
  YES: "0x8debbb77e8a17cffCfC0C7F1f40308886edD3f9f",
};

export const CONTRACT_NAMES = Object.entries(CONTRACT_ADDRESS).reduce<
  Record<string, string>
>((prev, cur) => {
  const [name, address]: any = cur;
  prev[address] = name;
  return prev;
}, {});

export const ADDRESS_LIST = {
  ...CONTRACT_ADDRESS,
  ...Object.values(CONTRACT_ADDRESS).reduce<Record<string, string>>(
    (prev, cur: any) => {
      prev[cur] = cur;
      return prev;
    },
    {}
  ),
};
