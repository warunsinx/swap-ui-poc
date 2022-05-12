import * as ethers from "ethers";
import { ethereum } from "./ethereum";

const getProvider = () => {
  // const url = `https://rpc.bitkubchain.io`;
  const url = `https://rpc-testnet.bitkubchain.io`;
  return new ethers.providers.JsonRpcProvider(url);
};

export const getSigner = () => {
  const eth = ethereum();
  const provider = new ethers.providers.Web3Provider(eth);
  return provider.getSigner();
};

export default getProvider;
