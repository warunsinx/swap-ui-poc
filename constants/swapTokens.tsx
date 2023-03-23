export const SWAP_TOKENS = [
  {
    symbol: "YES",
    name: "YES",
    image: "/images/yes-logo.png",
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
  {
    symbol: "KUSDC",
    name: "KUSDC",
    image: "/images/usdc-logo.png",
    remoteImg: ``,
    decimals: 18,
    fraction: 2,
  },
  {
    symbol: "KKUB",
    name: "KKUB",
    image: "/images/kub-logo.png",
    remoteImg: ``,
    decimals: 18,
    fraction: 2,
  },
];

export const POOL_TOKENS = [
  {
    symbol: "YES/KUSDT",
    token1: "YES",
    token2: "KUSDT",
  },
  {
    symbol: "KUSDC/KUSDT",
    token1: "KUSDC",
    token2: "KUSDT",
  },
  {
    symbol: "KKUB/KUSDT",
    token1: "KKUB",
    token2: "KUSDT",
  },
  {
    symbol: "YES/KKUB",
    token1: "YES",
    token2: "KKUB",
  },
  {
    symbol: "YES/KUSDC",
    token1: "YES",
    token2: "KUSDC",
  },
];

export const NAMED_TOKENS = SWAP_TOKENS.reduce((prev, cur) => {
  prev[cur.symbol] = cur;
  return prev;
}, {} as Record<string, typeof SWAP_TOKENS[0]>);
