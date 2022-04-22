/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISuperAdmin, ISuperAdminInterface } from "../ISuperAdmin";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pendingSuperAdmin",
        type: "address",
      },
    ],
    name: "NewPendingSuperAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "superAdmin",
        type: "address",
      },
    ],
    name: "NewSuperAdmin",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptSuperAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingSuperAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pendingSuperAdmin",
        type: "address",
      },
    ],
    name: "setPendingSuperAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "superAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ISuperAdmin__factory {
  static readonly abi = _abi;
  static createInterface(): ISuperAdminInterface {
    return new utils.Interface(_abi) as ISuperAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISuperAdmin {
    return new Contract(address, _abi, signerOrProvider) as ISuperAdmin;
  }
}