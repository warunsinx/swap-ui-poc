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
      name: "BKNextCallHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BKNextCallHelper__factory>;
    getContractFactory(
      name: "LendingContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingContract__factory>;
    getContractFactory(
      name: "LendingGetter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingGetter__factory>;
    getContractFactory(
      name: "LendingInterest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingInterest__factory>;
    getContractFactory(
      name: "LendingSetter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingSetter__factory>;
    getContractFactory(
      name: "LendingStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LendingStorage__factory>;
    getContractFactory(
      name: "SuperAdmin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SuperAdmin__factory>;
    getContractFactory(
      name: "IBKNextCallHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBKNextCallHelper__factory>;
    getContractFactory(
      name: "IInterestRateModel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IInterestRateModel__factory>;
    getContractFactory(
      name: "ILending",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILending__factory>;
    getContractFactory(
      name: "ILKAP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILKAP20__factory>;
    getContractFactory(
      name: "ILToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILToken__factory>;
    getContractFactory(
      name: "IMarketImpl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMarketImpl__factory>;
    getContractFactory(
      name: "IPriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPriceOracle__factory>;
    getContractFactory(
      name: "ISuperAdmin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISuperAdmin__factory>;
    getContractFactory(
      name: "IYESController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYESController__factory>;
    getContractFactory(
      name: "IYESPriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYESPriceOracle__factory>;
    getContractFactory(
      name: "IYESToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYESToken__factory>;
    getContractFactory(
      name: "IYESVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IYESVault__factory>;
    getContractFactory(
      name: "JumpRateModel",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.JumpRateModel__factory>;
    getContractFactory(
      name: "KAP20Lending",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KAP20Lending__factory>;
    getContractFactory(
      name: "KUBLending",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KUBLending__factory>;
    getContractFactory(
      name: "TokenErrorReporter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenErrorReporter__factory>;
    getContractFactory(
      name: "YESControllerErrorReporter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YESControllerErrorReporter__factory>;
    getContractFactory(
      name: "FixedPoint",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FixedPoint__factory>;
    getContractFactory(
      name: "LToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LToken__factory>;
    getContractFactory(
      name: "MarketImpl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketImpl__factory>;
    getContractFactory(
      name: "AccessController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessController__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Authorization",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Authorization__factory>;
    getContractFactory(
      name: "IAdminKAP20Router",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAdminKAP20Router__factory>;
    getContractFactory(
      name: "IAdminProjectRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAdminProjectRouter__factory>;
    getContractFactory(
      name: "IUniswapRouter01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapRouter01__factory>;
    getContractFactory(
      name: "IUniswapRouter02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapRouter02__factory>;
    getContractFactory(
      name: "IUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Factory__factory>;
    getContractFactory(
      name: "IUniswapV2Oracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Oracle__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "Blacklist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Blacklist__factory>;
    getContractFactory(
      name: "IBlacklist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBlacklist__factory>;
    getContractFactory(
      name: "Committee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Committee__factory>;
    getContractFactory(
      name: "IKAP20Committee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20Committee__factory>;
    getContractFactory(
      name: "KAP20Committee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KAP20Committee__factory>;
    getContractFactory(
      name: "IEIP20NonStandard",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IEIP20NonStandard__factory>;
    getContractFactory(
      name: "IKAP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20__factory>;
    getContractFactory(
      name: "IKToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKToken__factory>;
    getContractFactory(
      name: "KAP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KAP20__factory>;
    getContractFactory(
      name: "IKKUB",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKKUB__factory>;
    getContractFactory(
      name: "IKAP20KYC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20KYC__factory>;
    getContractFactory(
      name: "IKYC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKYC__factory>;
    getContractFactory(
      name: "IKYCBitkubChain",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKYCBitkubChain__factory>;
    getContractFactory(
      name: "KYCHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KYCHandler__factory>;
    getContractFactory(
      name: "IPausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPausable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "IReleaseTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IReleaseTimelock__factory>;
    getContractFactory(
      name: "ReleaseTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReleaseTimelock__factory>;
    getContractFactory(
      name: "INextTransferRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INextTransferRouter__factory>;
    getContractFactory(
      name: "SlidingWindowOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SlidingWindowOracle__factory>;
    getContractFactory(
      name: "IAdminProjectRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAdminProjectRouter__factory>;
    getContractFactory(
      name: "IDiamonFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamonFactory__factory>;
    getContractFactory(
      name: "IDiamonPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamonPair__factory>;
    getContractFactory(
      name: "IKAP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20__factory>;
    getContractFactory(
      name: "IKAP20AdminApprove",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20AdminApprove__factory>;
    getContractFactory(
      name: "IKAP20Blacklist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20Blacklist__factory>;
    getContractFactory(
      name: "IKAP20Committee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20Committee__factory>;
    getContractFactory(
      name: "IKAP20KYC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20KYC__factory>;
    getContractFactory(
      name: "IKYCBitkubChain",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKYCBitkubChain__factory>;
    getContractFactory(
      name: "Authorization",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Authorization__factory>;
    getContractFactory(
      name: "IAdminProjectRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAdminProjectRouter__factory>;
    getContractFactory(
      name: "IKAP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20__factory>;
    getContractFactory(
      name: "IKKUB",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKKUB__factory>;
    getContractFactory(
      name: "IKToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKToken__factory>;
    getContractFactory(
      name: "IKYC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKYC__factory>;
    getContractFactory(
      name: "TestAdminKAP20Router",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestAdminKAP20Router__factory>;
    getContractFactory(
      name: "IAdminProject",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAdminProject__factory>;
    getContractFactory(
      name: "TestAdminProjectRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestAdminProjectRouter__factory>;
    getContractFactory(
      name: "Authorization",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Authorization__factory>;
    getContractFactory(
      name: "DiamonKAP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DiamonKAP20__factory>;
    getContractFactory(
      name: "DiamonPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DiamonPair__factory>;
    getContractFactory(
      name: "TestDiamonFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestDiamonFactory__factory>;
    getContractFactory(
      name: "IDiamonFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamonFactory__factory>;
    getContractFactory(
      name: "IDiamonPair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamonPair__factory>;
    getContractFactory(
      name: "IDiamonRouter01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamonRouter01__factory>;
    getContractFactory(
      name: "IDiamonRouter02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IDiamonRouter02__factory>;
    getContractFactory(
      name: "IKAP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "TestDiamonRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestDiamonRouter__factory>;
    getContractFactory(
      name: "IAdminAsset",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAdminAsset__factory>;
    getContractFactory(
      name: "IKAP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20__factory>;
    getContractFactory(
      name: "IKYC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKYC__factory>;
    getContractFactory(
      name: "TestKKUB",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestKKUB__factory>;
    getContractFactory(
      name: "Authorization",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Authorization__factory>;
    getContractFactory(
      name: "Blacklist",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Blacklist__factory>;
    getContractFactory(
      name: "IKAP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20__factory>;
    getContractFactory(
      name: "IKToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKToken__factory>;
    getContractFactory(
      name: "IKYCBitkubChain",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKYCBitkubChain__factory>;
    getContractFactory(
      name: "KYCHandler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KYCHandler__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "TestKAP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestKAP20__factory>;
    getContractFactory(
      name: "TestKUSDT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestKUSDT__factory>;
    getContractFactory(
      name: "IAdmin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAdmin__factory>;
    getContractFactory(
      name: "TestKYCBitkubChainV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestKYCBitkubChainV2__factory>;
    getContractFactory(
      name: "Authorization",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Authorization__factory>;
    getContractFactory(
      name: "Committee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Committee__factory>;
    getContractFactory(
      name: "IAdminKAP20Router",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAdminKAP20Router__factory>;
    getContractFactory(
      name: "IAdminProjectRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAdminProjectRouter__factory>;
    getContractFactory(
      name: "IKAP20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKAP20__factory>;
    getContractFactory(
      name: "INextTransferRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INextTransferRouter__factory>;
    getContractFactory(
      name: "TestNextTransferRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestNextTransferRouter__factory>;
    getContractFactory(
      name: "Timelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Timelock__factory>;
    getContractFactory(
      name: "YESController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YESController__factory>;
    getContractFactory(
      name: "YESLocker",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YESLocker__factory>;
    getContractFactory(
      name: "YESPriceOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YESPriceOracle__factory>;
    getContractFactory(
      name: "YESTicket",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YESTicket__factory>;
    getContractFactory(
      name: "YESToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YESToken__factory>;
    getContractFactory(
      name: "YESVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.YESVault__factory>;

    getContractAt(
      name: "BKNextCallHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BKNextCallHelper>;
    getContractAt(
      name: "LendingContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingContract>;
    getContractAt(
      name: "LendingGetter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingGetter>;
    getContractAt(
      name: "LendingInterest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingInterest>;
    getContractAt(
      name: "LendingSetter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingSetter>;
    getContractAt(
      name: "LendingStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LendingStorage>;
    getContractAt(
      name: "SuperAdmin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SuperAdmin>;
    getContractAt(
      name: "IBKNextCallHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBKNextCallHelper>;
    getContractAt(
      name: "IInterestRateModel",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IInterestRateModel>;
    getContractAt(
      name: "ILending",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILending>;
    getContractAt(
      name: "ILKAP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILKAP20>;
    getContractAt(
      name: "ILToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILToken>;
    getContractAt(
      name: "IMarketImpl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMarketImpl>;
    getContractAt(
      name: "IPriceOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPriceOracle>;
    getContractAt(
      name: "ISuperAdmin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISuperAdmin>;
    getContractAt(
      name: "IYESController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IYESController>;
    getContractAt(
      name: "IYESPriceOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IYESPriceOracle>;
    getContractAt(
      name: "IYESToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IYESToken>;
    getContractAt(
      name: "IYESVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IYESVault>;
    getContractAt(
      name: "JumpRateModel",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.JumpRateModel>;
    getContractAt(
      name: "KAP20Lending",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KAP20Lending>;
    getContractAt(
      name: "KUBLending",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KUBLending>;
    getContractAt(
      name: "TokenErrorReporter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenErrorReporter>;
    getContractAt(
      name: "YESControllerErrorReporter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YESControllerErrorReporter>;
    getContractAt(
      name: "FixedPoint",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FixedPoint>;
    getContractAt(
      name: "LToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LToken>;
    getContractAt(
      name: "MarketImpl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketImpl>;
    getContractAt(
      name: "AccessController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessController>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Authorization",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Authorization>;
    getContractAt(
      name: "IAdminKAP20Router",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAdminKAP20Router>;
    getContractAt(
      name: "IAdminProjectRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAdminProjectRouter>;
    getContractAt(
      name: "IUniswapRouter01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapRouter01>;
    getContractAt(
      name: "IUniswapRouter02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapRouter02>;
    getContractAt(
      name: "IUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Factory>;
    getContractAt(
      name: "IUniswapV2Oracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Oracle>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "Blacklist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Blacklist>;
    getContractAt(
      name: "IBlacklist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBlacklist>;
    getContractAt(
      name: "Committee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Committee>;
    getContractAt(
      name: "IKAP20Committee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20Committee>;
    getContractAt(
      name: "KAP20Committee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KAP20Committee>;
    getContractAt(
      name: "IEIP20NonStandard",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IEIP20NonStandard>;
    getContractAt(
      name: "IKAP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20>;
    getContractAt(
      name: "IKToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKToken>;
    getContractAt(
      name: "KAP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KAP20>;
    getContractAt(
      name: "IKKUB",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKKUB>;
    getContractAt(
      name: "IKAP20KYC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20KYC>;
    getContractAt(
      name: "IKYC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKYC>;
    getContractAt(
      name: "IKYCBitkubChain",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKYCBitkubChain>;
    getContractAt(
      name: "KYCHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KYCHandler>;
    getContractAt(
      name: "IPausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPausable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "IReleaseTimelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IReleaseTimelock>;
    getContractAt(
      name: "ReleaseTimelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReleaseTimelock>;
    getContractAt(
      name: "INextTransferRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INextTransferRouter>;
    getContractAt(
      name: "SlidingWindowOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SlidingWindowOracle>;
    getContractAt(
      name: "IAdminProjectRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAdminProjectRouter>;
    getContractAt(
      name: "IDiamonFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDiamonFactory>;
    getContractAt(
      name: "IDiamonPair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDiamonPair>;
    getContractAt(
      name: "IKAP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20>;
    getContractAt(
      name: "IKAP20AdminApprove",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20AdminApprove>;
    getContractAt(
      name: "IKAP20Blacklist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20Blacklist>;
    getContractAt(
      name: "IKAP20Committee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20Committee>;
    getContractAt(
      name: "IKAP20KYC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20KYC>;
    getContractAt(
      name: "IKYCBitkubChain",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKYCBitkubChain>;
    getContractAt(
      name: "Authorization",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Authorization>;
    getContractAt(
      name: "IAdminProjectRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAdminProjectRouter>;
    getContractAt(
      name: "IKAP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20>;
    getContractAt(
      name: "IKKUB",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKKUB>;
    getContractAt(
      name: "IKToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKToken>;
    getContractAt(
      name: "IKYC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKYC>;
    getContractAt(
      name: "TestAdminKAP20Router",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestAdminKAP20Router>;
    getContractAt(
      name: "IAdminProject",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAdminProject>;
    getContractAt(
      name: "TestAdminProjectRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestAdminProjectRouter>;
    getContractAt(
      name: "Authorization",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Authorization>;
    getContractAt(
      name: "DiamonKAP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DiamonKAP20>;
    getContractAt(
      name: "DiamonPair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DiamonPair>;
    getContractAt(
      name: "TestDiamonFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestDiamonFactory>;
    getContractAt(
      name: "IDiamonFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDiamonFactory>;
    getContractAt(
      name: "IDiamonPair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDiamonPair>;
    getContractAt(
      name: "IDiamonRouter01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDiamonRouter01>;
    getContractAt(
      name: "IDiamonRouter02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IDiamonRouter02>;
    getContractAt(
      name: "IKAP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "TestDiamonRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestDiamonRouter>;
    getContractAt(
      name: "IAdminAsset",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAdminAsset>;
    getContractAt(
      name: "IKAP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20>;
    getContractAt(
      name: "IKYC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKYC>;
    getContractAt(
      name: "TestKKUB",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestKKUB>;
    getContractAt(
      name: "Authorization",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Authorization>;
    getContractAt(
      name: "Blacklist",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Blacklist>;
    getContractAt(
      name: "IKAP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20>;
    getContractAt(
      name: "IKToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKToken>;
    getContractAt(
      name: "IKYCBitkubChain",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKYCBitkubChain>;
    getContractAt(
      name: "KYCHandler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KYCHandler>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "TestKAP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestKAP20>;
    getContractAt(
      name: "TestKUSDT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestKUSDT>;
    getContractAt(
      name: "IAdmin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAdmin>;
    getContractAt(
      name: "TestKYCBitkubChainV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestKYCBitkubChainV2>;
    getContractAt(
      name: "Authorization",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Authorization>;
    getContractAt(
      name: "Committee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Committee>;
    getContractAt(
      name: "IAdminKAP20Router",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAdminKAP20Router>;
    getContractAt(
      name: "IAdminProjectRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAdminProjectRouter>;
    getContractAt(
      name: "IKAP20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKAP20>;
    getContractAt(
      name: "INextTransferRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INextTransferRouter>;
    getContractAt(
      name: "TestNextTransferRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestNextTransferRouter>;
    getContractAt(
      name: "Timelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Timelock>;
    getContractAt(
      name: "YESController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YESController>;
    getContractAt(
      name: "YESLocker",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YESLocker>;
    getContractAt(
      name: "YESPriceOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YESPriceOracle>;
    getContractAt(
      name: "YESTicket",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YESTicket>;
    getContractAt(
      name: "YESToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YESToken>;
    getContractAt(
      name: "YESVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.YESVault>;

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
