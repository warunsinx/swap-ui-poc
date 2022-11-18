export const CONTRACT_ADDRESS = {
  YES: "0x50e4a4BDe10E1adb4280a99b88d9Eb22Ed9d7b07",
  KUSDT: "0xBe5894A04092B6c2ACDb79B70d81Ec7fF7Cba4BF",
  KUSDC: "0xA0EF82cB8Ec22133A15E54A6C9e7c67186532801",
  KKUB: "0x0809d47e6aC082D99F51716f6383d7CBBB129772",
  "YES/KUSDT": "0x7781EB0F488A23A9D306D5C7224ebE0C10498d44",
  "KUSDC/KUSDT": "0xe1CA7c4509DcbD170d6B600c004220192FD5B7da",
  "KKUB/KUSDT": "0x65A1ABdb369990D6927D6a050AF75A4C1b81FA08",
  Multicall: "0x304De20d89914e588890AA172Aa5e33397d0c703",
  SwapRouter: "0x93185406138Cf62294A18Fb2B553464E65962a2C",
  SwapFactory: "0x8B7345878E2a6fEe96C973E7E7D7A376E41951d4",
  FinBroker: "0x7e8DB3EF37dD8ec6091cA351C4626a4Cb8fe4290",
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
