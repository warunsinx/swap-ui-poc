export const CONTRACT_ADDRESS = {
  Multicall: "0xcc515Aa7eE9Be4491c98DE68ee2147F0A063759D",
  SwapFactory: "0x6e906dc4749642a456907decb323a0065dc6f26e",
  SwapRouter: "0xAb30a29168D792c5e6a54E4bcF1Aec926a3b20FA",
  YES: "0x8debbb77e8a17cffCfC0C7F1f40308886edD3f9f",
  KKUB: "0x67ebd850304c70d983b2d1b93ea79c7cd6c3f6b5",
  KUSDT: "0x7d984C24d2499D840eB3b7016077164e15E5faA6",
  KUSDC: "0x77071ad51ca93fc90e77BCdECE5aa6F1B40fcb21",
  "KUSDC/KUSDT": "0x77793814f9C49828F14058268aEb391c7ea1EB26",
  "KUSDT/YES": "0x876655Fe1aAEC9b7BE2c81e05b4849f7D270Ab9D",
  "KUSDC/YES": "0xF47c1659836CAF363c6AEBA6E14711b812E20E47",
  "KKUB/YES": "0xbFB2E78Ba4ab1EEe2812291127aA795729a87d28",
  "KUSDT/KKUB": "0x286B67516b979a8271805660D3Ac0c626F2D38e6",
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
