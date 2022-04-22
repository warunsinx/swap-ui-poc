/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BKNextCallHelper,
  BKNextCallHelperInterface,
} from "../BKNextCallHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "callHelper_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldCallHelper",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newCallHelper",
        type: "address",
      },
    ],
    name: "CallHelperSet",
    type: "event",
  },
  {
    inputs: [],
    name: "callHelper",
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
        name: "_addr",
        type: "address",
      },
    ],
    name: "setCallHelper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161022938038061022983398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610196806100936000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806319ccc5c31461003b578063dc9976911461006a575b600080fd5b60005461004e906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b61007d610078366004610130565b61007f565b005b6000546001600160a01b031633146100cf5760405162461bcd60e51b815260206004820152600f60248201526e27b7363c9021b0b6363432b63832b960891b604482015260640160405180910390fd5b600080546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527ffee2d6ecfd990a9d86e9eff87e743c85cd3f81f8f814ee3fab83d7756fe0b32d910160405180910390a15050565b60006020828403121561014257600080fd5b81356001600160a01b038116811461015957600080fd5b939250505056fea2646970667358221220d2ced787094bf4cac6986d3bc54c6eb887f9a87235fd445babc850c1e496e1f164736f6c634300080b0033";

export class BKNextCallHelper__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    callHelper_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BKNextCallHelper> {
    return super.deploy(
      callHelper_,
      overrides || {}
    ) as Promise<BKNextCallHelper>;
  }
  getDeployTransaction(
    callHelper_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(callHelper_, overrides || {});
  }
  attach(address: string): BKNextCallHelper {
    return super.attach(address) as BKNextCallHelper;
  }
  connect(signer: Signer): BKNextCallHelper__factory {
    return super.connect(signer) as BKNextCallHelper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BKNextCallHelperInterface {
    return new utils.Interface(_abi) as BKNextCallHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BKNextCallHelper {
    return new Contract(address, _abi, signerOrProvider) as BKNextCallHelper;
  }
}
