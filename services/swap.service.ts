import { ADDRESS_LIST, CONTRACT_ADDRESS } from "../constants/addressList";
import {
  swapRouterContract,
  swapFactoryContract,
  swapPairContract,
} from "../contracts/index";
import { parseUnits, formatUnits, parseEther } from "ethers/lib/utils";
import * as ethers from "ethers";
import { NAMED_TOKENS } from "../constants/tokens";
import { getSigner } from "../utils/getProvider";

const getAmountsOut = async (
  amountIn: number,
  token1: string,
  token2: string
) => {
  const routerContract = swapRouterContract(CONTRACT_ADDRESS.SwapRouter);
  try {
    const amountOut = await routerContract.getAmountsOut(
      parseUnits(amountIn.toString(), NAMED_TOKENS[token1].decimals),
      [ADDRESS_LIST[token1], ADDRESS_LIST[token2]]
    );
    return ethers.utils.formatUnits(
      amountOut[1],
      NAMED_TOKENS[token2].decimals
    );
  } catch (e) {
    return "0";
  }
};

const getAmountsIn = async (
  amountOut: number,
  token1: string,
  token2: string
) => {
  const routerContract = swapRouterContract(CONTRACT_ADDRESS.SwapRouter);
  try {
    const amountIn = await routerContract.getAmountsIn(
      parseUnits(amountOut.toString(), NAMED_TOKENS[token2].decimals),
      [ADDRESS_LIST[token1], ADDRESS_LIST[token2]]
    );
    return ethers.utils.formatUnits(amountIn[0], NAMED_TOKENS[token1].decimals);
  } catch (e) {
    return "0";
  }
};

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

const getSpotPrice = async (token1: string, token2: string) => {
  const factoryContract = swapFactoryContract(CONTRACT_ADDRESS.SwapFactory);

  try {
    const pairAddr = await factoryContract.getPair(
      ADDRESS_LIST[token1],
      ADDRESS_LIST[token2]
    );

    const inOrder = Number(ADDRESS_LIST[token1]) < Number(ADDRESS_LIST[token2]);

    const [r0, r1] = await swapPairContract(pairAddr).getReserves();
    const fr0 = formatUnits(r0, NAMED_TOKENS[token1].decimals);
    const fr1 = formatUnits(r1, NAMED_TOKENS[token2].decimals);
    const spotPrice = inOrder ? +fr1 / +fr0 : +fr0 / +fr1;

    return spotPrice;
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

const swapService = {
  getAmountsOut,
  getAmountsIn,
  swapExactTokensForTokens,
  swapExactETHForTokens,
  getSpotPrice,
  addLiquidity,
  addLiquidityETH,
};

export default swapService;
