import { ethers } from "ethers";
import { kap20Contract } from "../contracts";
import getProvider, { getSigner } from "../utils/getProvider";
import { ADDRESS_LIST, CONTRACT_ADDRESS } from "../constants/addressList";

const getBalance = async (token: string, address: string) => {
  if (token.toUpperCase() === "KUB") {
    return getProvider()
      .getBalance(address)
      .then((res) => ethers.utils.formatEther(res));
  }
  const tokenAddr = ADDRESS_LIST[token];
  if (tokenAddr) {
    const tokenContract = kap20Contract(tokenAddr);
    try {
      const [bal, dec] = await Promise.all([
        tokenContract.balanceOf(address),
        tokenContract.decimals(),
      ]);
      return ethers.utils.formatUnits(bal, dec);
    } catch (e) {
      return "0";
    }
  } else {
    return "0";
  }
};

const getTokenName = async (token: string) => {
  const tokenAddr = ADDRESS_LIST[token];
  if (tokenAddr) {
    const tokenContract = kap20Contract(tokenAddr);
    return tokenContract.name();
  } else {
    return "";
  }
};

const getAllowance = async (token: string, owner: string, spender: string) => {
  if (token.toUpperCase() === "KUB") {
    return Infinity;
  }
  const tokenAddr = ADDRESS_LIST[token];
  if (tokenAddr) {
    const tokenContract = kap20Contract(tokenAddr);
    return tokenContract.allowance(owner, spender);
  } else {
    return 0;
  }
};

const approve = async (
  token: string,
  spender: string = CONTRACT_ADDRESS.SwapRouter
) => {
  const tokenAddr = ADDRESS_LIST[token];
  const signer = getSigner();

  if (tokenAddr && signer) {
    const tokenContract = kap20Contract(tokenAddr);
    return tokenContract
      .connect(signer)
      .approve(spender, ethers.constants.MaxUint256);
  } else {
    return null;
  }
};

const tokenService = {
  getBalance,
  getTokenName,
  getAllowance,
  approve,
};

export default tokenService;
