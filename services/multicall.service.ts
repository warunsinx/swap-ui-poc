import { ContractCallContext } from "ethereum-multicall";
import { SWAP_TOKENS as ALL_TOKENS, NAMED_TOKENS } from "../constants/tokens";
import { ADDRESS_LIST } from "../constants/addressList";
import { formatUnits } from "ethers/lib/utils";
import { getMulticall as multicall } from "../utils/getMulticall";
import { KAP20__factory } from "../typechain-tokens/factories/KAP20__factory";
import { TestKUSDT__factory } from "../typechain/factories/TestKUSDT__factory";

const getTokenBalances = async (address: string) => {
  const tokens = ALL_TOKENS.filter((token) => token.symbol !== "KUB").map(
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

const getAllowances = async (address: string) => {
  const tokens = ALL_TOKENS.map((token) => token.symbol).filter(
    (token) => !["KUB"].includes(token)
  );
  try {
    const contractCallContext: ContractCallContext[] = tokens.map((token) => ({
      reference: token,
      contractAddress: ADDRESS_LIST[token],
      abi: token === "KUSDT" ? TestKUSDT__factory.abi : KAP20__factory.abi,
      calls: [
        {
          reference: token,
          methodName: token === "KUSDT" ? "allowances" : "allowance",
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

const multicallService = {
  getTokenBalances,
  getAllowances,
};

export default multicallService;
