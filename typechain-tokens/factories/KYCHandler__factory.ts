/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { KYCHandler, KYCHandlerInterface } from "../KYCHandler";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "ActivateOnlyKYCAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldKycLevel",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newKycLevel",
        type: "uint256",
      },
    ],
    name: "SetAccecptedKycLevel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldKyc",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newKyc",
        type: "address",
      },
    ],
    name: "SetKYC",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptedKycLevel",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "activateOnlyKycAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isActivatedOnlyKycAddress",
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
    inputs: [],
    name: "kyc",
    outputs: [
      {
        internalType: "contract IKYCBitkubChain",
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
        internalType: "uint256",
        name: "_kycLevel",
        type: "uint256",
      },
    ],
    name: "setAcceptedKycLevel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_kyc",
        type: "address",
      },
    ],
    name: "setKYC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class KYCHandler__factory {
  static readonly abi = _abi;
  static createInterface(): KYCHandlerInterface {
    return new utils.Interface(_abi) as KYCHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KYCHandler {
    return new Contract(address, _abi, signerOrProvider) as KYCHandler;
  }
}
