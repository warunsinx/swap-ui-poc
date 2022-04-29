export const CONTRACT_ADDRESS = {
  Multicall: "0xcc515Aa7eE9Be4491c98DE68ee2147F0A063759D",
  SwapFactory: "0x6e906dc4749642a456907decb323a0065dc6f26e",
  SwapRouter: "0xAb30a29168D792c5e6a54E4bcF1Aec926a3b20FA",
  KKUB: "0x67ebd850304c70d983b2d1b93ea79c7cd6c3f6b5",
  KUSDT: "0x7d984C24d2499D840eB3b7016077164e15E5faA6",
  YES: "0x8debbb77e8a17cffCfC0C7F1f40308886edD3f9f",
  "KUSDT/YES": "0x876655Fe1aAEC9b7BE2c81e05b4849f7D270Ab9D",
};

export const CONTRACT_NAMES = Object.entries(CONTRACT_ADDRESS).reduce<
  Record<string, string>
>((prev, cur) => {
  const [name, address]: any = cur;
  prev[address] = name;
  return prev;
}, {});

export const ADDRESS_LIST: Record<string, string> = {
  ...CONTRACT_ADDRESS,
  ...Object.values(CONTRACT_ADDRESS).reduce<Record<string, string>>(
    (prev, cur: any) => {
      prev[cur] = cur;
      return prev;
    },
    {}
  ),
};
