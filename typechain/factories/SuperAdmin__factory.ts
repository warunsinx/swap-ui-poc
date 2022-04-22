/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SuperAdmin, SuperAdminInterface } from "../SuperAdmin";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "superAdmin_",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102fc3803806102fc83398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610269806100936000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806329575f6a1461005157806348028d6314610080578063d39ca7de14610093578063e7f9cefd146100a8575b600080fd5b600054610064906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b600154610064906001600160a01b031681565b6100a66100a1366004610203565b6100b0565b005b6100a6610155565b6000546001600160a01b031633146101025760405162461bcd60e51b815260206004820152601060248201526f27b7363c9029bab832b91020b236b4b760811b60448201526064015b60405180910390fd5b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527e37f497112f9b136c4b17359129e9a6629199e7ec9c4d29765c527e869c23ee9060200160405180910390a150565b6001546001600160a01b031633146101af5760405162461bcd60e51b815260206004820152601860248201527f4f6e6c792050656e64696e672053757065722041646d696e000000000000000060448201526064016100f9565b60008054336001600160a01b031991821681179092556001805490911690556040519081527fc7b647c194c68bbbc8c70936a366b32acb56cce1c1bbe0a96ece6a092d92d4f49060200160405180910390a1565b60006020828403121561021557600080fd5b81356001600160a01b038116811461022c57600080fd5b939250505056fea2646970667358221220e1b431d9cee4831108246c3ccc79d4623a1112b3d748379bed7da21ce1b4699664736f6c634300080b0033";

export class SuperAdmin__factory extends ContractFactory {
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
    superAdmin_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SuperAdmin> {
    return super.deploy(superAdmin_, overrides || {}) as Promise<SuperAdmin>;
  }
  getDeployTransaction(
    superAdmin_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(superAdmin_, overrides || {});
  }
  attach(address: string): SuperAdmin {
    return super.attach(address) as SuperAdmin;
  }
  connect(signer: Signer): SuperAdmin__factory {
    return super.connect(signer) as SuperAdmin__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SuperAdminInterface {
    return new utils.Interface(_abi) as SuperAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SuperAdmin {
    return new Contract(address, _abi, signerOrProvider) as SuperAdmin;
  }
}
