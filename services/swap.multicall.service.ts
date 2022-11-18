import { ContractCallContext } from "ethereum-multicall";
import {
  SWAP_TOKENS,
  NAMED_TOKENS,
  POOL_TOKENS,
} from "../constants/swapTokens";
import { ADDRESS_LIST } from "../constants/addressList";
import { formatEther, formatUnits } from "ethers/lib/utils";
import { getMulticall as multicall } from "../utils/getMulticall";
import { KAP20__factory } from "../typechain-tokens/factories/KAP20__factory";
import { TestKUSDT__factory } from "../typechain/factories/TestKUSDT__factory";
import { DiamonPair__factory } from "../typechain/factories/DiamonPair__factory";
import { TestKAP20__factory } from "../typechain/factories/TestKAP20__factory";

const getTokenBalances = async (address: string) => {
  const tokens = SWAP_TOKENS.filter((token) => token.symbol !== "KUB").map(
    (token) => token.symbol
  );
  try {
    const contractCallContext: ContractCallContext[] = tokens.map((token) => ({
      reference: token,
      contractAddress: ADDRESS_LIST[token],
      abi: KAP20__factory.abi,
      calls: [
        {
          reference: token,
          methodName: "balanceOf",
          methodParameters: [address],
        },
      ],
    }));

    const response = await multicall.call(contractCallContext);

    const result = Object.entries(response.results).reduce(
      (prev, [token, data]) => {
        const decimals = NAMED_TOKENS[token]
          ? NAMED_TOKENS[token].decimals
          : 18;
        const [balance] = data.callsReturnContext[0].returnValues;
        prev[token] = formatUnits(balance, decimals);
        return prev;
      },
      {} as Record<string, string>
    );

    return result;
  } catch (e) {
    console.error(e);
    return tokens.reduce((prev, cur) => {
      prev[cur] = "0";
      return prev;
    }, {} as Record<string, string>);
  }
};

const getSwapTokenAllowances = async (address: string) => {
  const tokens = SWAP_TOKENS.map((token) => token.symbol).filter(
    (token) => !["KUB"].includes(token)
  );
  try {
    const contractCallContext: ContractCallContext[] = tokens.map((token) => ({
      reference: token,
      contractAddress: ADDRESS_LIST[token],
      abi: TestKAP20__factory.abi,
      calls: [
        {
          reference: token,
          methodName: "allowance",
          methodParameters: [address, ADDRESS_LIST["SwapRouter"]],
        },
      ],
    }));

    const response = await multicall.call(contractCallContext);

    const result = Object.entries(response.results).reduce(
      (prev, [token, data]) => {
        const [allowance] = data.callsReturnContext[0].returnValues;
        prev[token] = Number(
          formatUnits(allowance, NAMED_TOKENS[token].decimals)
        );
        return prev;
      },
      {} as Record<string, number>
    );

    result["KUB"] = Infinity;

    return result;
  } catch (e) {
    console.error(e);
    return tokens.reduce((prev, cur) => {
      prev[cur] = 0;
      return prev;
    }, {} as Record<string, number>);
  }
};

const getPoolTokenBalances = async (address: string) => {
  const tokens = POOL_TOKENS.map((token) => token.symbol);

  try {
    const contractCallContext: ContractCallContext[] = tokens.map((token) => ({
      reference: token,
      contractAddress: ADDRESS_LIST[token],
      abi: DiamonPair__factory.abi,
      calls: [
        {
          reference: token,
          methodName: "balanceOf",
          methodParameters: [address],
        },
      ],
    }));

    const response = await multicall.call(contractCallContext);

    const result = Object.entries(response.results).reduce(
      (prev, [token, data]) => {
        const decimals = NAMED_TOKENS[token]
          ? NAMED_TOKENS[token].decimals
          : 18;
        const [balance] = data.callsReturnContext[0].returnValues;
        prev[token] = formatUnits(balance, decimals);
        return prev;
      },
      {} as Record<string, string>
    );

    return result;
  } catch (e) {
    console.error(e);
    return tokens.reduce((prev, cur) => {
      prev[cur] = "0";
      return prev;
    }, {} as Record<string, string>);
  }
};

const getPoolTokenAllowances = async (address: string) => {
  const tokens = POOL_TOKENS.map((token) => token.symbol);
  try {
    const contractCallContext: ContractCallContext[] = tokens.map((token) => ({
      reference: token,
      contractAddress: ADDRESS_LIST[token],
      abi: KAP20__factory.abi,
      calls: [
        {
          reference: token,
          methodName: "allowance",
          methodParameters: [address, ADDRESS_LIST["SwapRouter"]],
        },
      ],
    }));

    const response = await multicall.call(contractCallContext);

    const result = Object.entries(response.results).reduce(
      (prev, [token, data]) => {
        const [allowance] = data.callsReturnContext[0].returnValues;
        prev[token] = Number(formatEther(allowance));
        return prev;
      },
      {} as Record<string, number>
    );

    return result;
  } catch (e) {
    console.error(e);
    return tokens.reduce((prev, cur) => {
      prev[cur] = 0;
      return prev;
    }, {} as Record<string, number>);
  }
};

const swapMulticallService = {
  getTokenBalances,
  getSwapTokenAllowances,
  getPoolTokenBalances,
  getPoolTokenAllowances,
};

export default swapMulticallService;
