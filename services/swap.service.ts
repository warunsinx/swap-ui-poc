import { ADDRESS_LIST, CONTRACT_ADDRESS } from "../constants/addressList";
import {
  swapRouterContract,
  swapFactoryContract,
  swapPairContract,
} from "../contracts/index";
import {
  parseUnits,
  formatUnits,
  parseEther,
  formatEther,
} from "ethers/lib/utils";
import { NAMED_TOKENS } from "../constants/tokens";
import { getSigner } from "../utils/getProvider";

const getAmountOut = async (
  amountIn: number,
  reserveIn: number,
  reserveOut: number
) => {
  const fee = 1 - 0.3 / 100;
  const amountInWithFee = amountIn * fee;
  const numerator = amountInWithFee * reserveOut;
  const denominator = reserveIn + amountInWithFee;
  return numerator / denominator;
};

const getAmountIn = async (
  amountOut: number,
  reserveIn: number,
  reserveOut: number
) => {
  const fee = 1 - 0.3 / 100;
  const numerator = reserveIn * amountOut;
  const denominator = (reserveOut - amountOut) * fee;
  return numerator / denominator;
};

// const getAmountsOut = async (amountIn: number, tokenPath: string[]) => {
//   const routerContract = swapRouterContract(CONTRACT_ADDRESS.SwapRouter);
//   try {
//     const amountOut = await routerContract.getAmountsOut(
//       parseUnits(amountIn.toString(), NAMED_TOKENS[tokenPath[0]].decimals),
//       tokenPath.map((token) => ADDRESS_LIST[token])
//     );
//     return ethers.utils.formatUnits(
//       amountOut[1],
//       NAMED_TOKENS[tokenPath[tokenPath.length - 1]].decimals
//     );
//   } catch (e) {
//     return "0";
//   }
// };

// const getAmountsIn = async (amountOut: number, tokenPath: string[]) => {
//   const routerContract = swapRouterContract(CONTRACT_ADDRESS.SwapRouter);
//   try {
//     const amountIn = await routerContract.getAmountsIn(
//       parseUnits(amountOut.toString(), NAMED_TOKENS[tokenPath[1]].decimals),
//       tokenPath.map((token) => ADDRESS_LIST[token])
//     );
//     return ethers.utils.formatUnits(
//       amountIn[0],
//       NAMED_TOKENS[tokenPath[0]].decimals
//     );
//   } catch (e) {
//     return "0";
//   }
// };

const swapExactTokensForTokens = async (
  amountIn: number,
  amountOutMin: number,
  tokenPath: string[],
  to: string,
  deadline: number
) => {
  const signer = getSigner();
  const routerContract = swapRouterContract(
    CONTRACT_ADDRESS.SwapRouter
  ).connect(signer);
  return routerContract.swapExactTokensForTokens(
    parseUnits(amountIn.toString(), NAMED_TOKENS[tokenPath[0]].decimals),
    parseUnits(
      amountOutMin.toString(),
      NAMED_TOKENS[tokenPath[tokenPath.length - 1]].decimals
    ),
    tokenPath.map((token) => ADDRESS_LIST[token]),
    to,
    deadline
  );
};

const swapExactETHForTokens = async (
  amountIn: number,
  amountOutMin: number,
  tokenPath: string[],
  to: string,
  deadline: number
) => {
  const signer = getSigner();
  const routerContract = swapRouterContract(
    CONTRACT_ADDRESS.SwapRouter
  ).connect(signer);
  return routerContract.swapExactETHForTokens(
    parseUnits(
      amountOutMin.toString(),
      NAMED_TOKENS[tokenPath[tokenPath.length - 1]].decimals
    ),
    tokenPath.map((token) => ADDRESS_LIST[token]),
    to,
    deadline,
    { value: parseEther(amountIn.toString()) }
  );
};

const getReserve = async (token1: string, token2: string) => {
  const factoryContract = swapFactoryContract(CONTRACT_ADDRESS.SwapFactory);

  const pairAddr = await factoryContract.getPair(
    ADDRESS_LIST[token1],
    ADDRESS_LIST[token2]
  );

  const inOrder = Number(ADDRESS_LIST[token1]) < Number(ADDRESS_LIST[token2]);

  const [r0, r1] = await swapPairContract(pairAddr).getReserves();
  const fr0 = formatUnits(r0, NAMED_TOKENS[token1].decimals);
  const fr1 = formatUnits(r1, NAMED_TOKENS[token2].decimals);

  return inOrder ? [fr0, fr1] : [fr1, fr0];
};

const getShareOfPool = (reserve: number, amountIn: number) => {
  if (reserve === 0) return 100;
  return (amountIn / (reserve + amountIn)) * 100;
};

const getPooledToken = async (
  lpToken: string,
  token1: string,
  token2: string,
  lpAmount: number
) => {
  const totalSupply = await swapPairContract(
    ADDRESS_LIST[lpToken]
  ).totalSupply();
  const reserve = await getReserve(token1, token2);
  const pToken1 = (lpAmount / +formatEther(totalSupply)) * +reserve[0];
  const pToken2 = (lpAmount / +formatEther(totalSupply)) * +reserve[1];
  const poolShare = (lpAmount / +formatEther(totalSupply)) * 100;
  return [pToken1, pToken2, poolShare, +reserve[0], +reserve[1]];
};

const getSpotPrice = async (reserve1: number, reserve2: number) => {
  try {
    return reserve2 / reserve1;
  } catch (err) {
    return -1;
  }
};

const addLiquidity = async (
  tokenA: string,
  tokenB: string,
  amountA: string,
  amountB: string,
  amountAMin: string,
  amountBMin: string,
  to: string,
  deadline: number
) => {
  const signer = getSigner();
  const routerContract = swapRouterContract(
    CONTRACT_ADDRESS.SwapRouter
  ).connect(signer);
  return routerContract.addLiquidity(
    ADDRESS_LIST[tokenA],
    ADDRESS_LIST[tokenB],
    parseUnits(amountA.toString(), NAMED_TOKENS[tokenA].decimals),
    parseUnits(amountB.toString(), NAMED_TOKENS[tokenB].decimals),
    parseUnits(amountAMin.toString(), NAMED_TOKENS[tokenA].decimals),
    parseUnits(amountBMin.toString(), NAMED_TOKENS[tokenB].decimals),
    to,
    deadline
  );
};

const addLiquidityETH = async (
  token: string,
  amountToken: string,
  amountTokenMin: string,
  amountETH: string,
  amountETHMin: string,
  to: string,
  deadline: number
) => {
  const signer = getSigner();
  const routerContract = swapRouterContract(
    CONTRACT_ADDRESS.SwapRouter
  ).connect(signer);
  return routerContract.addLiquidityETH(
    ADDRESS_LIST[token],
    parseUnits(amountToken.toString(), NAMED_TOKENS[token].decimals),
    parseUnits(amountTokenMin.toString(), NAMED_TOKENS[token].decimals),
    parseEther(amountETHMin.toString()),
    to,
    deadline,
    { value: parseEther(amountETH.toString()) }
  );
};

const removeLiquidity = async (
  tokenA: string,
  tokenB: string,
  liquidity: string,
  amountAMin: string,
  amountBMin: string,
  to: string,
  deadline: number
) => {
  const signer = getSigner();
  const routerContract = swapRouterContract(
    CONTRACT_ADDRESS.SwapRouter
  ).connect(signer);
  return routerContract.removeLiquidity(
    ADDRESS_LIST[tokenA],
    ADDRESS_LIST[tokenB],
    parseEther(liquidity),
    parseUnits(amountAMin.toString(), NAMED_TOKENS[tokenA].decimals),
    parseUnits(amountBMin.toString(), NAMED_TOKENS[tokenB].decimals),
    to,
    deadline
  );
};

const getPairAddr = async (token1: string, token2: string) => {
  const factoryContract = swapFactoryContract(CONTRACT_ADDRESS.SwapFactory);
  const pairAddr = await factoryContract.getPair(
    ADDRESS_LIST[token1],
    ADDRESS_LIST[token2]
  );
  console.log(pairAddr);
};

const swapService = {
  // getAmountsOut,
  // getAmountsIn,
  swapExactTokensForTokens,
  swapExactETHForTokens,
  getSpotPrice,
  addLiquidity,
  addLiquidityETH,
  removeLiquidity,
  getPairAddr,
  getShareOfPool,
  getPooledToken,
  getReserve,
  getAmountOut,
  getAmountIn,
};

export default swapService;
