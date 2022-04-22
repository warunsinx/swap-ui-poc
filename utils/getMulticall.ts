import { Multicall } from "ethereum-multicall";
import getProvider from "./getProvider";
import { CONTRACT_ADDRESS } from "../constants/addressList";

export const getMulticall = new Multicall({
  ethersProvider: getProvider(),
  multicallCustomContractAddress: CONTRACT_ADDRESS.Multicall,
});
