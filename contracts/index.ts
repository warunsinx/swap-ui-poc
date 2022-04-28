import getProvider from "../utils/getProvider";
import { KAP20__factory } from "../typechain-tokens";
import { IDiamonFactory__factory } from "../typechain/factories/IDiamonFactory__factory";
import { DiamonPair__factory } from "../typechain/factories/DiamonPair__factory";
import { IDiamonRouter02__factory } from "../typechain/factories/IDiamonRouter02__factory";

export const kap20Contract = (address: string, provider = getProvider()) =>
  KAP20__factory.connect(address, provider);

export const swapRouterContract = (address: string, provider = getProvider()) =>
  IDiamonRouter02__factory.connect(address, provider);

export const swapFactoryContract = (
  address: string,
  provider = getProvider()
) => IDiamonFactory__factory.connect(address, provider);

export const swapPairContract = (address: string, provider = getProvider()) =>
  DiamonPair__factory.connect(address, provider);
