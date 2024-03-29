/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IReleaseTimelock,
  IReleaseTimelockInterface,
} from "../IReleaseTimelock";

const _abi = [
  {
    inputs: [],
    name: "releaseTime",
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
];

export class IReleaseTimelock__factory {
  static readonly abi = _abi;
  static createInterface(): IReleaseTimelockInterface {
    return new utils.Interface(_abi) as IReleaseTimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IReleaseTimelock {
    return new Contract(address, _abi, signerOrProvider) as IReleaseTimelock;
  }
}
