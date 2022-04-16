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

    contractCallContext.push({
      reference: "KKUB",
      contractAddress: ADDRESS_LIST["KKUB"],
      abi: KAP20__factory.abi,
      calls: [
        {
          reference: "KKUB",
          methodName: "balanceOf",
          methodParameters: [address],
        },
      ],
    });

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
    (token) => !["KUB", "YES"].includes(token)
  );
  try {
    const contractCallContext: ContractCallContext[] = tokens.map((token) => ({
      reference: token,
      contractAddress: ADDRESS_LIST[token],
      abi: TestKUSDT__factory.abi,
      calls: [
        {
          reference: token,
          methodName: token === "KUSDT" ? "allowances" : "allowance",
          methodParameters: [address, ADDRESS_LIST[`${token}Lending`]],
        },
      ],
    }));

    contractCallContext.push({
      reference: "YES",
      contractAddress: ADDRESS_LIST["YES"],
      abi: KAP20__factory.abi,
      calls: [
        {
          reference: "YES",
          methodName: "allowance",
          methodParameters: [address, ADDRESS_LIST["YESVault"]],
        },
      ],
    });

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
