import { Multicall } from "ethereum-multicall";
import { CONTRACT_ADDRESS } from "../constants/addressList";
import getProvider from "./getProvider";

export const getMulticall = new Multicall({
  ethersProvider: getProvider(),
  multicallCustomContractAddress: CONTRACT_ADDRESS.Multicall,
});
