import getProvider from "../utils/getProvider";
import { KAP20__factory } from "../typechain-tokens";
import { IDiamonRouter01__factory } from "../typechain/factories/IDiamonRouter01__factory";

export const kap20Contract = (address: string, provider = getProvider()) =>
  KAP20__factory.connect(address, provider);

export const swapRouterContract = (address: string, provider = getProvider()) =>
  IDiamonRouter01__factory.connect(address, provider);
