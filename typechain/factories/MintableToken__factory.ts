/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MintableToken, MintableTokenInterface } from "../MintableToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620013473803806200134783398101604081905262000034916200022f565b8151829082906200004d906003906020850190620000de565b50805162000063906004906020840190620000de565b505050620000806200007a6200008860201b60201c565b6200008c565b5050620002e9565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000ec9062000296565b90600052602060002090601f0160209004810192826200011057600085556200015b565b82601f106200012b57805160ff19168380011785556200015b565b828001600101855582156200015b579182015b828111156200015b5782518255916020019190600101906200013e565b50620001699291506200016d565b5090565b5b808211156200016957600081556001016200016e565b600082601f83011262000195578081fd5b81516001600160401b0380821115620001b257620001b2620002d3565b6040516020601f8401601f1916820181018381118382101715620001da57620001da620002d3565b6040528382528584018101871015620001f1578485fd5b8492505b83831015620002145785830181015182840182015291820191620001f5565b838311156200022557848185840101525b5095945050505050565b6000806040838503121562000242578182fd5b82516001600160401b038082111562000259578384fd5b620002678683870162000184565b935060208501519150808211156200027d578283fd5b506200028c8582860162000184565b9150509250929050565b600281046001821680620002ab57607f821691505b60208210811415620002cd57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61104e80620002f96000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d7146101f3578063a9059cbb14610206578063dd62ed3e14610219578063f2fde38b1461022c57610100565b8063715018a6146101bb5780638da5cb5b146101c357806395d89b41146101d85780639dc29fac146101e057610100565b8063313ce567116100d3578063313ce5671461016b578063395093511461018057806340c10f191461019357806370a08231146101a857610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014357806323b872dd14610158575b600080fd5b61010d61023f565b60405161011a9190610b20565b60405180910390f35b610136610131366004610ad8565b6102d1565b60405161011a9190610b15565b61014b6102ee565b60405161011a9190610f81565b610136610166366004610a9d565b6102f4565b61017361038d565b60405161011a9190610f8a565b61013661018e366004610ad8565b610392565b6101a66101a1366004610ad8565b6103e6565b005b61014b6101b6366004610a4a565b610433565b6101a6610452565b6101cb61049d565b60405161011a9190610b01565b61010d6104ac565b6101a66101ee366004610ad8565b6104bb565b610136610201366004610ad8565b610504565b610136610214366004610ad8565b61057d565b61014b610227366004610a6b565b610591565b6101a661023a366004610a4a565b6105bc565b60606003805461024e90610fc7565b80601f016020809104026020016040519081016040528092919081815260200182805461027a90610fc7565b80156102c75780601f1061029c576101008083540402835291602001916102c7565b820191906000526020600020905b8154815290600101906020018083116102aa57829003601f168201915b5050505050905090565b60006102e56102de61062d565b8484610631565b50600192915050565b60025490565b60006103018484846106e5565b6001600160a01b03841660009081526001602052604081208161032261062d565b6001600160a01b03166001600160a01b031681526020019081526020016000205490508281101561036e5760405162461bcd60e51b815260040161036590610d44565b60405180910390fd5b6103828561037a61062d565b858403610631565b506001949350505050565b601290565b60006102e561039f61062d565b8484600160006103ad61062d565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103e19190610f98565b610631565b6103ee61062d565b6001600160a01b03166103ff61049d565b6001600160a01b0316146104255760405162461bcd60e51b815260040161036590610da1565b61042f828261080f565b5050565b6001600160a01b0381166000908152602081905260409020545b919050565b61045a61062d565b6001600160a01b031661046b61049d565b6001600160a01b0316146104915760405162461bcd60e51b815260040161036590610da1565b61049b60006108d7565b565b6005546001600160a01b031690565b60606004805461024e90610fc7565b6104c361062d565b6001600160a01b03166104d461049d565b6001600160a01b0316146104fa5760405162461bcd60e51b815260040161036590610da1565b61042f8282610941565b6000806001600061051361062d565b6001600160a01b039081168252602080830193909352604091820160009081209188168152925290205490508281101561055f5760405162461bcd60e51b815260040161036590610eed565b61057361056a61062d565b85858403610631565b5060019392505050565b60006102e561058a61062d565b84846106e5565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6105c461062d565b6001600160a01b03166105d561049d565b6001600160a01b0316146105fb5760405162461bcd60e51b815260040161036590610da1565b6001600160a01b0381166106215760405162461bcd60e51b815260040161036590610c2d565b61062a816108d7565b50565b3390565b6001600160a01b0383166106575760405162461bcd60e51b815260040161036590610e90565b6001600160a01b03821661067d5760405162461bcd60e51b815260040161036590610c8a565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906106d8908590610f81565b60405180910390a3505050565b6001600160a01b03831661070b5760405162461bcd60e51b815260040161036590610e33565b6001600160a01b0382166107315760405162461bcd60e51b815260040161036590610b73565b61073c838383610a2e565b6001600160a01b038316600090815260208190526040902054818110156107755760405162461bcd60e51b815260040161036590610ce7565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906107ac908490610f98565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107f69190610f81565b60405180910390a3610809848484610a2e565b50505050565b6001600160a01b0382166108355760405162461bcd60e51b815260040161036590610f4a565b61084160008383610a2e565b80600260008282546108539190610f98565b90915550506001600160a01b03821660009081526020819052604081208054839290610880908490610f98565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906108c3908590610f81565b60405180910390a361042f60008383610a2e565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166109675760405162461bcd60e51b815260040161036590610dd6565b61097382600083610a2e565b6001600160a01b038216600090815260208190526040902054818110156109ac5760405162461bcd60e51b815260040161036590610bd0565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109db908490610fb0565b90915550506040516000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610a1e908690610f81565b60405180910390a3610a2e836000845b505050565b80356001600160a01b038116811461044d57600080fd5b600060208284031215610a5b578081fd5b610a6482610a33565b9392505050565b60008060408385031215610a7d578081fd5b610a8683610a33565b9150610a9460208401610a33565b90509250929050565b600080600060608486031215610ab1578081fd5b610aba84610a33565b9250610ac860208501610a33565b9150604084013590509250925092565b60008060408385031215610aea578182fd5b610af383610a33565b946020939093013593505050565b6001600160a01b0391909116815260200190565b901515815260200190565b6000602080835283518082850152825b81811015610b4c57858101830151858201604001528201610b30565b81811115610b5d5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201527f6573730000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526022908201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60408201527f6365000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560408201527f7373000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260408201527f616c616e63650000000000000000000000000000000000000000000000000000606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160408201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360408201527f7300000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460408201527f6472657373000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760408201527f207a65726f000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60ff91909116815260200190565b60008219821115610fab57610fab611002565b500190565b600082821015610fc257610fc2611002565b500390565b600281046001821680610fdb57607f821691505b60208210811415610ffc57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212204ec782bd8c930407cdea5a820d3e1a19ee66160c53162985aaf4d9afe73a7e9b64736f6c63430008000033";

export class MintableToken__factory extends ContractFactory {
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
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MintableToken> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<MintableToken>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): MintableToken {
    return super.attach(address) as MintableToken;
  }
  connect(signer: Signer): MintableToken__factory {
    return super.connect(signer) as MintableToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintableTokenInterface {
    return new utils.Interface(_abi) as MintableTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MintableToken {
    return new Contract(address, _abi, signerOrProvider) as MintableToken;
  }
}