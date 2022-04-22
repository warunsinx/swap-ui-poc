/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { JumpRateModel, JumpRateModelInterface } from "../JumpRateModel";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "baseRatePerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "multiplierPerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "jumpMultiplierPerYear",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "kink_",
        type: "uint256",
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
        internalType: "uint256",
        name: "baseRatePerBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "multiplierPerBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "jumpMultiplierPerBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "kink",
        type: "uint256",
      },
    ],
    name: "NewInterestParams",
    type: "event",
  },
  {
    inputs: [],
    name: "baseRatePerBlock",
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
    name: "blocksPerYear",
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
    inputs: [
      {
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
    ],
    name: "getBorrowRate",
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
    inputs: [
      {
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveFactorMantissa",
        type: "uint256",
      },
    ],
    name: "getSupplyRate",
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
    name: "isInterestRateModel",
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
    name: "jumpMultiplierPerBlock",
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
    name: "kink",
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
    name: "multiplierPerBlock",
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
    inputs: [
      {
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
    ],
    name: "utilizationRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161081638038061081683398101604081905261002f91610170565b61004962603d80856100e160201b6102a31790919060201c565b6001556100648362603d806100e1602090811b6102a317901c565b60005561007f8262603d806100e1602090811b6102a317901c565b60028190556003829055600154600054604080519283526020830191909152810191909152606081018290527f6960ab234c7ef4b0c9197100f5393cfcde7c453ac910a27bd2000aa1dd4c068d9060800160405180910390a15050505061021d565b600061012983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061013060201b60201c565b9392505050565b6000818361015a5760405162461bcd60e51b815260040161015191906101a6565b60405180910390fd5b50600061016784866101fb565b95945050505050565b6000806000806080858703121561018657600080fd5b505082516020840151604085015160609095015191969095509092509050565b600060208083528351808285015260005b818110156101d3578581018301518582016040015282016101b7565b818111156101e5576000604083870101525b50601f01601f1916929092016040019392505050565b60008261021857634e487b7160e01b600052601260045260246000fd5b500490565b6105ea8061022c6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063a385fb9611610066578063a385fb96146100f2578063b8168816146100fc578063b9f9850a1461010f578063f14039de14610118578063fd2da3391461012157600080fd5b806315f24053146100985780632191f92a146100be5780636e71e2d8146100d65780638726bb89146100e9575b600080fd5b6100ab6100a636600461047b565b61012a565b6040519081526020015b60405180910390f35b6100c6600181565b60405190151581526020016100b5565b6100ab6100e436600461047b565b6101f6565b6100ab60005481565b6100ab62603d8081565b6100ab61010a3660046104a7565b610236565b6100ab60025481565b6100ab60015481565b6100ab60035481565b6000806101388585856101f6565b9050600354811161017e57610176600154610170670de0b6b3a764000061016a600054866102ee90919063ffffffff16565b906102a3565b90610372565b9150506101ef565b60006101a9600154610170670de0b6b3a764000061016a6000546003546102ee90919063ffffffff16565b905060006101c2600354846103d190919063ffffffff16565b90506101e982610170670de0b6b3a764000061016a600254866102ee90919063ffffffff16565b93505050505b9392505050565b600082610205575060006101ef565b61022e61021c836102168787610372565b906103d1565b61016a85670de0b6b3a76400006102ee565b949350505050565b60008061024b670de0b6b3a7640000846103d1565b9050600061025a87878761012a565b90506000610274670de0b6b3a764000061016a84866102ee565b9050610297670de0b6b3a764000061016a836102918c8c8c6101f6565b906102ee565b98975050505050505050565b60006102e583836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610413565b90505b92915050565b6000826102fd575060006102e8565b600061030983856104ef565b905082610316858361050e565b146102e55760405162461bcd60e51b815260206004820152602160248201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6044820152607760f81b60648201526084015b60405180910390fd5b60008061037f8385610530565b9050838110156102e55760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006044820152606401610369565b60006102e583836040518060400160405280601f81526020017f536166654d6174683a207375627472616374696f6e20756e646572666c6f770081525061044a565b600081836104345760405162461bcd60e51b81526004016103699190610548565b506000610441848661050e565b95945050505050565b6000818484111561046e5760405162461bcd60e51b81526004016103699190610548565b506000610441848661059d565b60008060006060848603121561049057600080fd5b505081359360208301359350604090920135919050565b600080600080608085870312156104bd57600080fd5b5050823594602084013594506040840135936060013592509050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610509576105096104d9565b500290565b60008261052b57634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115610543576105436104d9565b500190565b600060208083528351808285015260005b8181101561057557858101830151858201604001528201610559565b81811115610587576000604083870101525b50601f01601f1916929092016040019392505050565b6000828210156105af576105af6104d9565b50039056fea2646970667358221220caa6b3ec96834a8187bec42682be6ea204357b5148a8474b884fa2369d317b7e64736f6c634300080b0033";

export class JumpRateModel__factory extends ContractFactory {
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
    baseRatePerYear: BigNumberish,
    multiplierPerYear: BigNumberish,
    jumpMultiplierPerYear: BigNumberish,
    kink_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<JumpRateModel> {
    return super.deploy(
      baseRatePerYear,
      multiplierPerYear,
      jumpMultiplierPerYear,
      kink_,
      overrides || {}
    ) as Promise<JumpRateModel>;
  }
  getDeployTransaction(
    baseRatePerYear: BigNumberish,
    multiplierPerYear: BigNumberish,
    jumpMultiplierPerYear: BigNumberish,
    kink_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      baseRatePerYear,
      multiplierPerYear,
      jumpMultiplierPerYear,
      kink_,
      overrides || {}
    );
  }
  attach(address: string): JumpRateModel {
    return super.attach(address) as JumpRateModel;
  }
  connect(signer: Signer): JumpRateModel__factory {
    return super.connect(signer) as JumpRateModel__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JumpRateModelInterface {
    return new utils.Interface(_abi) as JumpRateModelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): JumpRateModel {
    return new Contract(address, _abi, signerOrProvider) as JumpRateModel;
  }
}
