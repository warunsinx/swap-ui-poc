/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IAdminAsset, IAdminAssetInterface } from "../IAdminAsset";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "string",
        name: "_token",
        type: "string",
      },
    ],
    name: "isSuperAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IAdminAsset__factory {
  static readonly abi = _abi;
  static createInterface(): IAdminAssetInterface {
    return new utils.Interface(_abi) as IAdminAssetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAdminAsset {
    return new Contract(address, _abi, signerOrProvider) as IAdminAsset;
  }
}
