/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BlockSwapFactory,
  BlockSwapFactoryInterface,
} from "../BlockSwapFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToSetter",
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
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "PairCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "INIT_CODE_PAIR_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allPairs",
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
    name: "allPairsLength",
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
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeTo",
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
    name: "feeToSetter",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getPair",
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
        name: "_feeTo",
        type: "address",
      },
    ],
    name: "setFeeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToSetter",
        type: "address",
      },
    ],
    name: "setFeeToSetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051612c8b380380612c8b8339818101604052602081101561003357600080fd5b5051600180546001600160a01b0319166001600160a01b03909216919091179055612c28806100636000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80635855a25a11610076578063c9c653961161005b578063c9c653961461013b578063e6a4390514610169578063f46901ed14610197576100a3565b80635855a25a1461010b578063a2e74af614610113576100a3565b8063017e7e58146100a8578063094b7415146100cc5780631e3dd18b146100d4578063574f2ba3146100f1575b600080fd5b6100b06101bd565b604080516001600160a01b039092168252519081900360200190f35b6100b06101cc565b6100b0600480360360208110156100ea57600080fd5b50356101db565b6100f9610202565b60408051918252519081900360200190f35b6100f9610208565b6101396004803603602081101561012957600080fd5b50356001600160a01b031661029b565b005b6100b06004803603604081101561015157600080fd5b506001600160a01b0381358116916020013516610329565b6100b06004803603604081101561017f57600080fd5b506001600160a01b0381358116916020013516610687565b610139600480360360208110156101ad57600080fd5b50356001600160a01b03166106ad565b6000546001600160a01b031681565b6001546001600160a01b031681565b600381815481106101e857fe5b6000918252602090912001546001600160a01b0316905081565b60035490565b6040516102176020820161073b565b6020820181038252601f19601f820116604052506040516020018082805190602001908083835b6020831061025d5780518252601f19909201916020918201910161023e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012081565b6001546001600160a01b031633146102fa576040805162461bcd60e51b815260206004820152601460248201527f426c6f636b537761703a20464f5242494444454e000000000000000000000000604482015290519081900360640190fd5b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000816001600160a01b0316836001600160a01b03161415610392576040805162461bcd60e51b815260206004820152601e60248201527f426c6f636b537761703a204944454e544943414c5f4144445245535345530000604482015290519081900360640190fd5b600080836001600160a01b0316856001600160a01b0316106103b55783856103b8565b84845b90925090506001600160a01b038216610418576040805162461bcd60e51b815260206004820152601760248201527f426c6f636b537761703a205a45524f5f41444452455353000000000000000000604482015290519081900360640190fd5b6001600160a01b03828116600090815260026020908152604080832085851684529091529020541615610492576040805162461bcd60e51b815260206004820152601660248201527f426c6f636b537761703a20504149525f45584953545300000000000000000000604482015290519081900360640190fd5b6060604051806020016104a49061073b565b6020820181038252601f19601f8201166040525090506000838360405160200180836001600160a01b03166001600160a01b031660601b8152601401826001600160a01b03166001600160a01b031660601b815260140192505050604051602081830303815290604052805190602001209050808251602084016000f5604080517f485cc9550000000000000000000000000000000000000000000000000000000081526001600160a01b038781166004830152868116602483015291519297509087169163485cc9559160448082019260009290919082900301818387803b15801561059057600080fd5b505af11580156105a4573d6000803e3d6000fd5b505050506001600160a01b0384811660008181526002602081815260408084208987168086529083528185208054978d1673ffffffffffffffffffffffffffffffffffffffff1998891681179091559383528185208686528352818520805488168517905560038054600181018255958190527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90950180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a35050505092915050565b60026020908152600092835260408084209091529082529020546001600160a01b031681565b6001546001600160a01b0316331461070c576040805162461bcd60e51b815260206004820152601460248201527f426c6f636b537761703a20464f5242494444454e000000000000000000000000604482015290519081900360640190fd5b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6124aa806107498339019056fe60806040526001600c5534801561001557600080fd5b5060405146908060526124588239604080519182900360520182208282018252600d83526c426c6f636b53776170204c507360981b6020938401528151808301835260018152603160f81b908401528151808401919091527f0b147190fa44ba1f23e736881b9f5b891ac6e438bd821c5f0d5641271acd410e818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101949094523060a0808601919091528151808603909101815260c09094019052825192019190912060035550600580546001600160a01b03191633179055612350806101086000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610544578063d505accf1461054c578063dd62ed3e1461059d578063fff6cae9146105cb576101b9565b8063ba9a7a561461050e578063bc25cf7714610516578063c45a01551461053c576101b9565b80637ecebe00116100d35780637ecebe001461047557806389afcb441461049b57806395d89b41146104da578063a9059cbb146104e2576101b9565b80636a6278421461042157806370a08231146104475780637464fc3d1461046d576101b9565b806323b872dd116101665780633644e515116101405780633644e515146103db578063485cc955146103e35780635909c0d5146104115780635a3d549314610419576101b9565b806323b872dd1461037f57806330adf81f146103b5578063313ce567146103bd576101b9565b8063095ea7b311610197578063095ea7b3146103015780630dfe16811461034157806318160ddd14610365576101b9565b8063022c0d9f146101be57806306fdde031461024c5780630902f1ac146102c9575b600080fd5b61024a600480360360808110156101d457600080fd5b8135916020810135916001600160a01b03604083013516919081019060808101606082013564010000000081111561020b57600080fd5b82018360208201111561021d57600080fd5b8035906020019184600183028401116401000000008311171561023f57600080fd5b5090925090506105d3565b005b610254610b28565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561028e578181015183820152602001610276565b50505050905090810190601f1680156102bb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102d1610b61565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61032d6004803603604081101561031757600080fd5b506001600160a01b038135169060200135610b8b565b604080519115158252519081900360200190f35b610349610ba2565b604080516001600160a01b039092168252519081900360200190f35b61036d610bb1565b60408051918252519081900360200190f35b61032d6004803603606081101561039557600080fd5b506001600160a01b03813581169160208101359091169060400135610bb7565b61036d610c24565b6103c5610c48565b6040805160ff9092168252519081900360200190f35b61036d610c4d565b61024a600480360360408110156103f957600080fd5b506001600160a01b0381358116916020013516610c53565b61036d610cf8565b61036d610cfe565b61036d6004803603602081101561043757600080fd5b50356001600160a01b0316610d04565b61036d6004803603602081101561045d57600080fd5b50356001600160a01b0316611004565b61036d611016565b61036d6004803603602081101561048b57600080fd5b50356001600160a01b031661101c565b6104c1600480360360208110156104b157600080fd5b50356001600160a01b031661102e565b6040805192835260208301919091528051918290030190f35b6102546113d4565b61032d600480360360408110156104f857600080fd5b506001600160a01b03813516906020013561140d565b61036d61141a565b61024a6004803603602081101561052c57600080fd5b50356001600160a01b0316611420565b61034961158b565b61034961159a565b61024a600480360360e081101561056257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356115a9565b61036d600480360360408110156105b357600080fd5b506001600160a01b03813581169160200135166117d1565b61024a6117ee565b600c5460011461061e576040805162461bcd60e51b8152602060048201526011602482015270109b1bd8dad4ddd85c0e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55841515806106315750600084115b61066c5760405162461bcd60e51b81526004018080602001828103825260258152602001806122ce6025913960400191505060405180910390fd5b600080610677610b61565b5091509150816001600160701b03168710801561069c5750806001600160701b031686105b6106d75760405162461bcd60e51b81526004018080602001828103825260218152602001806122ad6021913960400191505060405180910390fd5b60065460075460009182916001600160a01b039182169190811690891682148015906107155750806001600160a01b0316896001600160a01b031614155b610766576040805162461bcd60e51b815260206004820152601560248201527f426c6f636b537761703a20494e56414c49445f544f0000000000000000000000604482015290519081900360640190fd5b8a1561077757610777828a8d611950565b891561078857610788818a8c611950565b861561084357886001600160a01b031663cb907af3338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561082a57600080fd5b505af115801561083e573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561088957600080fd5b505afa15801561089d573d6000803e3d6000fd5b505050506040513d60208110156108b357600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108ff57600080fd5b505afa158015610913573d6000803e3d6000fd5b505050506040513d602081101561092957600080fd5b5051925060009150506001600160701b0385168a9003831161094c57600061095b565b89856001600160701b03160383035b9050600089856001600160701b0316038311610978576000610987565b89856001600160701b03160383035b905060008211806109985750600081115b6109d35760405162461bcd60e51b81526004018080602001828103825260248152602001806122616024913960400191505060405180910390fd5b6000610a076109e984601963ffffffff611b0316565b6109fb8761271063ffffffff611b0316565b9063ffffffff611b6f16565b90506000610a1f6109e984601963ffffffff611b0316565b9050610a516305f5e100610a456001600160701b038b8116908b1663ffffffff611b0316565b9063ffffffff611b0316565b610a61838363ffffffff611b0316565b1015610ab4576040805162461bcd60e51b815260206004820152600c60248201527f426c6f636b537761703a204b0000000000000000000000000000000000000000604482015290519081900360640190fd5b5050610ac284848888611bc7565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280600d81526020017f426c6f636b53776170204c50730000000000000000000000000000000000000081525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b98338484611da4565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b0383166000908152600260209081526040808320338452909152812054610beb908363ffffffff611b6f16565b6001600160a01b0385166000908152600260209081526040808320338452909152902055610c1a848484611e06565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610cb2576040805162461bcd60e51b815260206004820152601460248201527f426c6f636b537761703a20464f5242494444454e000000000000000000000000604482015290519081900360640190fd5b600680546001600160a01b039384167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610d51576040805162461bcd60e51b8152602060048201526011602482015270109b1bd8dad4ddd85c0e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c81905580610d61610b61565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610db557600080fd5b505afa158015610dc9573d6000803e3d6000fd5b505050506040513d6020811015610ddf57600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610e3257600080fd5b505afa158015610e46573d6000803e3d6000fd5b505050506040513d6020811015610e5c57600080fd5b505190506000610e7b836001600160701b03871663ffffffff611b6f16565b90506000610e98836001600160701b03871663ffffffff611b6f16565b90506000610ea68787611ec0565b60005490915080610ee357610ecf6103e86109fb610eca878763ffffffff611b0316565b612033565b9850610ede60006103e8612085565b610f32565b610f2f6001600160701b038916610f00868463ffffffff611b0316565b81610f0757fe5b046001600160701b038916610f22868563ffffffff611b0316565b81610f2957fe5b0461211b565b98505b60008911610f715760405162461bcd60e51b81526004018080602001828103825260288152602001806122f36028913960400191505060405180910390fd5b610f7b8a8a612085565b610f8786868a8a611bc7565b8115610fb757600854610fb3906001600160701b0380821691600160701b90041663ffffffff611b0316565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c5460011461107c576040805162461bcd60e51b8152602060048201526011602482015270109b1bd8dad4ddd85c0e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c8190558061108c610b61565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b1580156110e857600080fd5b505afa1580156110fc573d6000803e3d6000fd5b505050506040513d602081101561111257600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561116057600080fd5b505afa158015611174573d6000803e3d6000fd5b505050506040513d602081101561118a57600080fd5b5051306000908152600160205260408120549192506111a98888611ec0565b600054909150806111c0848763ffffffff611b0316565b816111c757fe5b049a50806111db848663ffffffff611b0316565b816111e257fe5b04995060008b1180156111f5575060008a115b6112305760405162461bcd60e51b81526004018080602001828103825260288152602001806122856028913960400191505060405180910390fd5b61123a3084612133565b611245878d8d611950565b611250868d8c611950565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b15801561129657600080fd5b505afa1580156112aa573d6000803e3d6000fd5b505050506040513d60208110156112c057600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b15801561130c57600080fd5b505afa158015611320573d6000803e3d6000fd5b505050506040513d602081101561133657600080fd5b5051935061134685858b8b611bc7565b811561137657600854611372906001600160701b0380821691600160701b90041663ffffffff611b0316565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b6040518060400160405280600c81526020017f426c6f636b537761702d4c50000000000000000000000000000000000000000081525081565b6000610b98338484611e06565b6103e881565b600c5460011461146b576040805162461bcd60e51b8152602060048201526011602482015270109b1bd8dad4ddd85c0e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b03948516949093169261151a9285928792611515926001600160701b03169185916370a0823191602480820192602092909190829003018186803b1580156114dd57600080fd5b505afa1580156114f1573d6000803e3d6000fd5b505050506040513d602081101561150757600080fd5b50519063ffffffff611b6f16565b611950565b600854604080516370a0823160e01b81523060048201529051611581928492879261151592600160701b90046001600160701b0316916001600160a01b038616916370a0823191602480820192602092909190829003018186803b1580156114dd57600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b428410156115fe576040805162461bcd60e51b815260206004820152601260248201527f426c6f636b537761703a20455850495245440000000000000000000000000000604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e0850182528051908301207f19010000000000000000000000000000000000000000000000000000000000006101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa158015611734573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381161580159061176a5750886001600160a01b0316816001600160a01b0316145b6117bb576040805162461bcd60e51b815260206004820152601c60248201527f426c6f636b537761703a20494e56414c49445f5349474e415455524500000000604482015290519081900360640190fd5b6117c6898989611da4565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c54600114611839576040805162461bcd60e51b8152602060048201526011602482015270109b1bd8dad4ddd85c0e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b81523060048201529051611949926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561188a57600080fd5b505afa15801561189e573d6000803e3d6000fd5b505050506040513d60208110156118b457600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561190157600080fd5b505afa158015611915573d6000803e3d6000fd5b505050506040513d602081101561192b57600080fd5b50516008546001600160701b0380821691600160701b900416611bc7565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b03167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251815160009460609489169392918291908083835b60208310611a165780518252601f1990920191602091820191016119f7565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611a78576040519150601f19603f3d011682016040523d82523d6000602084013e611a7d565b606091505b5091509150818015611aab575080511580611aab5750808060200190516020811015611aa857600080fd5b50515b611afc576040805162461bcd60e51b815260206004820152601a60248201527f426c6f636b537761703a205452414e534645525f4641494c4544000000000000604482015290519081900360640190fd5b5050505050565b6000811580611b1e57505080820282828281611b1b57fe5b04145b610b9c576040805162461bcd60e51b815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b80820382811115610b9c576040805162461bcd60e51b815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b6001600160701b038411801590611be557506001600160701b038311155b611c36576040805162461bcd60e51b815260206004820152601360248201527f426c6f636b537761703a204f564552464c4f5700000000000000000000000000604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611c6657506001600160701b03841615155b8015611c7a57506001600160701b03831615155b15611ceb578063ffffffff16611ca885611c93866121d1565b6001600160e01b03169063ffffffff6121e316565b600980546001600160e01b03929092169290920201905563ffffffff8116611cd384611c93876121d1565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091177fffffffff0000000000000000000000000000ffffffffffffffffffffffffffff16600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611e2f908263ffffffff611b6f16565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611e64908263ffffffff61220816565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611f1157600080fd5b505afa158015611f25573d6000803e3d6000fd5b505050506040513d6020811015611f3b57600080fd5b5051600b546001600160a01b03821615801594509192509061201f57801561201a576000611f7e610eca6001600160701b0388811690881663ffffffff611b0316565b90506000611f8b83612033565b905080821115612017576000611fbe6008610a45611faf868663ffffffff611b6f16565b6000549063ffffffff611b0316565b90506000611ff3611fd684600863ffffffff611b0316565b611fe786601163ffffffff611b0316565b9063ffffffff61220816565b9050600081838161200057fe5b0490508015612013576120138782612085565b5050505b50505b61202b565b801561202b576000600b555b505092915050565b60006003821115612076575080600160028204015b818110156120705780915060028182858161205f57fe5b04018161206857fe5b049050612048565b50612080565b8115612080575060015b919050565b600054612098908263ffffffff61220816565b60009081556001600160a01b0383168152600160205260409020546120c3908263ffffffff61220816565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600081831061212a578161212c565b825b9392505050565b6001600160a01b03821660009081526001602052604090205461215c908263ffffffff611b6f16565b6001600160a01b03831660009081526001602052604081209190915554612189908263ffffffff611b6f16565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161220057fe5b049392505050565b80820182811015610b9c576040805162461bcd60e51b815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fdfe426c6f636b537761703a20494e53554646494349454e545f494e5055545f414d4f554e54426c6f636b537761703a20494e53554646494349454e545f4c49515549444954595f4255524e4544426c6f636b537761703a20494e53554646494349454e545f4c4951554944495459426c6f636b537761703a20494e53554646494349454e545f4f55545055545f414d4f554e54426c6f636b537761703a20494e53554646494349454e545f4c49515549444954595f4d494e544544a26469706673582212203c83b79939602ccfb1e307b82093bf8be55c1ebcbc27a09b62b4fdbb4e95305c64736f6c63430006070033454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429a264697066735822122050607e249112d94e06454839747b2ca4f5e8b4f2a4c082607afa99181a36fa6764736f6c63430006070033";

export class BlockSwapFactory__factory extends ContractFactory {
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
    _feeToSetter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BlockSwapFactory> {
    return super.deploy(
      _feeToSetter,
      overrides || {}
    ) as Promise<BlockSwapFactory>;
  }
  getDeployTransaction(
    _feeToSetter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_feeToSetter, overrides || {});
  }
  attach(address: string): BlockSwapFactory {
    return super.attach(address) as BlockSwapFactory;
  }
  connect(signer: Signer): BlockSwapFactory__factory {
    return super.connect(signer) as BlockSwapFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BlockSwapFactoryInterface {
    return new utils.Interface(_abi) as BlockSwapFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BlockSwapFactory {
    return new Contract(address, _abi, signerOrProvider) as BlockSwapFactory;
  }
}