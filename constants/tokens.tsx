export const SWAP_TOKENS = [
  {
    symbol: "KKUB",
    name: "Wrapped Bitkub Coin",
    image: "",
    remoteImg: ``,
    decimals: 18,
    fraction: 2,
  },
  {
    symbol: "KUSDT",
    name: "KUSDT",
    image: "",
    remoteImg: ``,
    decimals: 18,
    fraction: 2,
  },
  {
    symbol: "YES",
    name: "YES Token",
    image: "",
    remoteImg: ``,
    decimals: 18,
    fraction: 2,
  },
];

export const NAMED_TOKENS = SWAP_TOKENS.reduce((prev, cur) => {
  prev[cur.symbol] = cur;
  return prev;
}, {} as Record<string, typeof SWAP_TOKENS[0]>);
