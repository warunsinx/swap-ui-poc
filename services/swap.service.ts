import { ADDRESS_LIST, CONTRACT_ADDRESS } from "../constants/addressList";
import { swapRouterContract } from "../contracts/index";
import { parseEther, parseUnits } from "ethers/lib/utils";
import * as ethers from "ethers";
import { NAMED_TOKENS } from "../constants/tokens";
import { getSigner } from "../utils/getProvider";

const getAmountOut = async (
  amountIn: number,
  token1: string,
  token2: string
) => {
  const routerContract = swapRouterContract(CONTRACT_ADDRESS.SwapRouter);
  try {
    const amountOut = await routerContract.getAmountsOut(
      parseEther(amountIn.toString()),
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

const swapService = {
  getAmountOut,
  swapExactTokensForTokens,
};

export default swapService;
