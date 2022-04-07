/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "BlockSwapERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BlockSwapERC20__factory>;
    getContractFactory(
      name: "BlockSwapFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BlockSwapFactory__factory>;
    getContractFactory(
      name: "BlockSwapPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BlockSwapPair__factory>;
    getContractFactory(
      name: "BlockSwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BlockSwapRouter__factory>;
    getContractFactory(
      name: "IBlockSwapCallee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBlockSwapCallee__factory>;
    getContractFactory(
      name: "IBlockSwapERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBlockSwapERC20__factory>;
    getContractFactory(
      name: "IBlockSwapFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBlockSwapFactory__factory>;
    getContractFactory(
      name: "IBlockSwapPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBlockSwapPair__factory>;
    getContractFactory(
      name: "IBlockSwapRouter01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBlockSwapRouter01__factory>;
    getContractFactory(
      name: "IBlockSwapRouter02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBlockSwapRouter02__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "MintableToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MintableToken__factory>;
    getContractFactory(
      name: "WKUB",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WKUB__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "BlockSwapERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BlockSwapERC20>;
    getContractAt(
      name: "BlockSwapFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BlockSwapFactory>;
    getContractAt(
      name: "BlockSwapPair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BlockSwapPair>;
    getContractAt(
      name: "BlockSwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BlockSwapRouter>;
    getContractAt(
      name: "IBlockSwapCallee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBlockSwapCallee>;
    getContractAt(
      name: "IBlockSwapERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBlockSwapERC20>;
    getContractAt(
      name: "IBlockSwapFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBlockSwapFactory>;
    getContractAt(
      name: "IBlockSwapPair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBlockSwapPair>;
    getContractAt(
      name: "IBlockSwapRouter01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBlockSwapRouter01>;
    getContractAt(
      name: "IBlockSwapRouter02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBlockSwapRouter02>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "MintableToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MintableToken>;
    getContractAt(
      name: "WKUB",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WKUB>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
