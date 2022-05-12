export const SWAP_TOKENS = [
  {
    symbol: "WE",
    name: "WE Token",
    image: "/images/kub-logo.png",
    remoteImg: ``,
    decimals: 18,
    fraction: 2,
  },
  {
    symbol: "KUSDT",
    name: "KUSDT",
    image: "/images/usdt-logo.png",
    remoteImg: ``,
    decimals: 18,
    fraction: 2,
  },
  // {
  //   symbol: "KUSDC",
  //   name: "KUSDC",
  //   image: "/images/usdc-logo.png",
  //   remoteImg: ``,
  //   decimals: 18,
  //   fraction: 2,
  // },
  // {
  //   symbol: "KKUB",
  //   name: "KKUB Token",
  //   image: "/images/yes-logo.png",
  //   remoteImg: ``,
  //   decimals: 18,
  //   fraction: 2,
  // },
];

// export const SWAP_TOKENS = [
//   {
//     symbol: "KUB",
//     name: "Bitkub Coin",
//     image: "/images/kub-logo.png",
//     remoteImg: ``,
//     decimals: 18,
//     fraction: 2,
//   },
//   {
//     symbol: "KKUB",
//     name: "Wrapped Bitkub Coin",
//     image: "/images/kub-logo.png",
//     remoteImg: ``,
//     decimals: 18,
//     fraction: 2,
//   },
//   {
//     symbol: "KUSDT",
//     name: "KUSDT",
//     image: "/images/usdt-logo.png",
//     remoteImg: ``,
//     decimals: 18,
//     fraction: 2,
//   },
//   {
//     symbol: "KUSDC",
//     name: "KUSDC",
//     image: "/images/usdc-logo.png",
//     remoteImg: ``,
//     decimals: 18,
//     fraction: 2,
//   },
//   {
//     symbol: "YES",
//     name: "YES Token",
//     image: "/images/yes-logo.png",
//     remoteImg: ``,
//     decimals: 18,
//     fraction: 2,
//   },
// ];

export const POOL_TOKENS = [
  // {
  //   symbol: "KUSDT/YES",
  //   token1: "KUSDT",
  //   token2: "YES",
  // },
  // {
  //   symbol: "KUSDC/YES",
  //   token1: "KUSDC",
  //   token2: "YES",
  // },
  // {
  //   symbol: "KUSDC/KUSDT",
  //   token1: "KUSDC",
  //   token2: "KUSDT",
  // },
  // {
  //   symbol: "KKUB/YES",
  //   token1: "KKUB",
  //   token2: "YES",
  // },
  // {
  //   symbol: "KUSDT/KKUB",
  //   token1: "KUSDT",
  //   token2: "KKUB",
  // },
];

export const NAMED_TOKENS = SWAP_TOKENS.reduce((prev, cur) => {
  prev[cur.symbol] = cur;
  return prev;
}, {} as Record<string, typeof SWAP_TOKENS[0]>);
