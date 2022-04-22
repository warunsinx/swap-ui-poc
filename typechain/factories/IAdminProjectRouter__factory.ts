/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IAdminProjectRouter,
  IAdminProjectRouterInterface,
} from "../IAdminProjectRouter";

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
        name: "_project",
        type: "string",
      },
    ],
    name: "isAdmin",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "string",
        name: "_project",
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

export class IAdminProjectRouter__factory {
  static readonly abi = _abi;
  static createInterface(): IAdminProjectRouterInterface {
    return new utils.Interface(_abi) as IAdminProjectRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAdminProjectRouter {
    return new Contract(address, _abi, signerOrProvider) as IAdminProjectRouter;
  }
}
