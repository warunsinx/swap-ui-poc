/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestAdminProjectRouter,
  TestAdminProjectRouterInterface,
} from "../TestAdminProjectRouter";

const _abi = [
  {
    inputs: [],
    name: "adminProject",
    outputs: [
      {
        internalType: "contract IAdminProject",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_adminProject",
        type: "address",
      },
    ],
    name: "setAdminProject",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102b7806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806305b18045146100515780631bea69e3146100815780632b98ccf01461008157806356254f13146100a8575b600080fd5b600054610064906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61009861008f3660046101bb565b60019392505050565b6040519015158152602001610078565b6100986100b6366004610240565b6000805460408051630b1ac85d60e31b8152905133926001600160a01b0316916358d642e89160048083019260209291908290030181865afa158015610100573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101249190610264565b6001600160a01b03161461017e5760405162461bcd60e51b815260206004820152601a60248201527f52657374726963746564206f6e6c7920726f6f742061646d696e000000000000604482015260640160405180910390fd5b50600080546001600160a01b0383166001600160a01b03199091161790556001919050565b6001600160a01b03811681146101b857600080fd5b50565b6000806000604084860312156101d057600080fd5b83356101db816101a3565b9250602084013567ffffffffffffffff808211156101f857600080fd5b818601915086601f83011261020c57600080fd5b81358181111561021b57600080fd5b87602082850101111561022d57600080fd5b6020830194508093505050509250925092565b60006020828403121561025257600080fd5b813561025d816101a3565b9392505050565b60006020828403121561027657600080fd5b815161025d816101a356fea2646970667358221220aac2ff38d85fca66fbbebdcca88a37f5eb29006dc5d57507a8092903c284bc1464736f6c634300080b0033";

export class TestAdminProjectRouter__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestAdminProjectRouter> {
    return super.deploy(overrides || {}) as Promise<TestAdminProjectRouter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestAdminProjectRouter {
    return super.attach(address) as TestAdminProjectRouter;
  }
  connect(signer: Signer): TestAdminProjectRouter__factory {
    return super.connect(signer) as TestAdminProjectRouter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestAdminProjectRouterInterface {
    return new utils.Interface(_abi) as TestAdminProjectRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestAdminProjectRouter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestAdminProjectRouter;
  }
}
