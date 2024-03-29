/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IYESControllerInterface extends ethers.utils.Interface {
  functions: {
    "accountAssets(address)": FunctionFragment;
    "allMarkets()": FunctionFragment;
    "borrowAllowed(address,address,uint256)": FunctionFragment;
    "borrowGuardianPaused(address)": FunctionFragment;
    "borrowLimitOf(address)": FunctionFragment;
    "collateralFactorMantissa()": FunctionFragment;
    "depositAllowed(address)": FunctionFragment;
    "depositGuardianPaused(address)": FunctionFragment;
    "enterMarkets(address[])": FunctionFragment;
    "exitMarket(address)": FunctionFragment;
    "getAccountLiquidity(address)": FunctionFragment;
    "isController()": FunctionFragment;
    "liquidateBorrowAllowed(address,address)": FunctionFragment;
    "liquidateCalculateSeizeTokens(address,uint256)": FunctionFragment;
    "liquidationIncentiveMantissa()": FunctionFragment;
    "markets(address,address)": FunctionFragment;
    "oracle()": FunctionFragment;
    "repayBorrowAllowed(address)": FunctionFragment;
    "seizeAllowed(address)": FunctionFragment;
    "seizeGuardianPaused()": FunctionFragment;
    "setBorrowPaused(address,bool)": FunctionFragment;
    "setDepositPaused(address,bool)": FunctionFragment;
    "setSeizePaused(bool)": FunctionFragment;
    "withdrawAllowed(address,address)": FunctionFragment;
    "yesVault()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accountAssets",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "allMarkets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowAllowed",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowGuardianPaused",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowLimitOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralFactorMantissa",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositAllowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositGuardianPaused",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "enterMarkets",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "exitMarket", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getAccountLiquidity",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isController",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidateBorrowAllowed",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidateCalculateSeizeTokens",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidationIncentiveMantissa",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "markets",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "repayBorrowAllowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "seizeAllowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "seizeGuardianPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBorrowPaused",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setDepositPaused",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setSeizePaused",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAllowed",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "yesVault", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "accountAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allMarkets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowLimitOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralFactorMantissa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enterMarkets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exitMarket", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAccountLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidateBorrowAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidateCalculateSeizeTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidationIncentiveMantissa",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "markets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "repayBorrowAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "seizeAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "seizeGuardianPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBorrowPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDepositPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSeizePaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yesVault", data: BytesLike): Result;

  events: {
    "ActionPaused(string,bool)": EventFragment;
    "LendingActionPaused(address,string,bool)": EventFragment;
    "MarketEntered(address,address)": EventFragment;
    "MarketExited(address,address)": EventFragment;
    "MarketListed(address)": EventFragment;
    "NewCollateralFactor(uint256,uint256)": EventFragment;
    "NewLiquidationIncentive(uint256,uint256)": EventFragment;
    "NewPriceOracle(address,address)": EventFragment;
    "NewYESVault(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ActionPaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LendingActionPaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketEntered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketExited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketListed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewCollateralFactor"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewLiquidationIncentive"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPriceOracle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewYESVault"): EventFragment;
}

export type ActionPausedEvent = TypedEvent<
  [string, boolean] & { action: string; state: boolean }
>;

export type LendingActionPausedEvent = TypedEvent<
  [string, string, boolean] & { lToken: string; action: string; state: boolean }
>;

export type MarketEnteredEvent = TypedEvent<
  [string, string] & { lToken: string; account: string }
>;

export type MarketExitedEvent = TypedEvent<
  [string, string] & { lToken: string; account: string }
>;

export type MarketListedEvent = TypedEvent<[string] & { lToken: string }>;

export type NewCollateralFactorEvent = TypedEvent<
  [BigNumber, BigNumber] & {
    oldCollateralFactorMantissa: BigNumber;
    newCollateralFactorMantissa: BigNumber;
  }
>;

export type NewLiquidationIncentiveEvent = TypedEvent<
  [BigNumber, BigNumber] & {
    oldLiquidationIncentiveMantissa: BigNumber;
    newLiquidationIncentiveMantissa: BigNumber;
  }
>;

export type NewPriceOracleEvent = TypedEvent<
  [string, string] & { oldPriceOracle: string; newPriceOracle: string }
>;

export type NewYESVaultEvent = TypedEvent<
  [string, string] & { oldYESVault: string; newYESVault: string }
>;

export class IYESController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IYESControllerInterface;

  functions: {
    accountAssets(
      account: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    allMarkets(overrides?: CallOverrides): Promise<[string[]]>;

    borrowAllowed(
      lToken: string,
      borrower: string,
      borrowAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    borrowGuardianPaused(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    borrowLimitOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    collateralFactorMantissa(overrides?: CallOverrides): Promise<[BigNumber]>;

    depositAllowed(
      lToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositGuardianPaused(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    enterMarkets(
      lTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exitMarket(
      lToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAccountLiquidity(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    isController(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidateBorrowAllowed(
      lToken: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    liquidateCalculateSeizeTokens(
      lToken: string,
      borrowBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    liquidationIncentiveMantissa(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    markets(
      lToken: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean, boolean]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    repayBorrowAllowed(
      lToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    seizeAllowed(
      lToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    seizeGuardianPaused(overrides?: CallOverrides): Promise<[boolean]>;

    setBorrowPaused(
      lContractAddress: string,
      state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDepositPaused(
      lContractAddress: string,
      state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSeizePaused(
      state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawAllowed(
      lToken: string,
      withdrawer: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    yesVault(overrides?: CallOverrides): Promise<[string]>;
  };

  accountAssets(account: string, overrides?: CallOverrides): Promise<string[]>;

  allMarkets(overrides?: CallOverrides): Promise<string[]>;

  borrowAllowed(
    lToken: string,
    borrower: string,
    borrowAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  borrowGuardianPaused(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  borrowLimitOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  collateralFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

  depositAllowed(lToken: string, overrides?: CallOverrides): Promise<BigNumber>;

  depositGuardianPaused(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  enterMarkets(
    lTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exitMarket(
    lToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAccountLiquidity(
    account: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  isController(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidateBorrowAllowed(
    lToken: string,
    borrower: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  liquidateCalculateSeizeTokens(
    lToken: string,
    borrowBalance: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;

  markets(
    lToken: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<[boolean, boolean]>;

  oracle(overrides?: CallOverrides): Promise<string>;

  repayBorrowAllowed(
    lToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  seizeAllowed(lToken: string, overrides?: CallOverrides): Promise<BigNumber>;

  seizeGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

  setBorrowPaused(
    lContractAddress: string,
    state: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDepositPaused(
    lContractAddress: string,
    state: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSeizePaused(
    state: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawAllowed(
    lToken: string,
    withdrawer: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  yesVault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    accountAssets(
      account: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    allMarkets(overrides?: CallOverrides): Promise<string[]>;

    borrowAllowed(
      lToken: string,
      borrower: string,
      borrowAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowGuardianPaused(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    borrowLimitOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    depositAllowed(
      lToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositGuardianPaused(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    enterMarkets(
      lTokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    exitMarket(lToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    getAccountLiquidity(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    isController(overrides?: CallOverrides): Promise<boolean>;

    liquidateBorrowAllowed(
      lToken: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidateCalculateSeizeTokens(
      lToken: string,
      borrowBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    markets(
      lToken: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean, boolean]>;

    oracle(overrides?: CallOverrides): Promise<string>;

    repayBorrowAllowed(
      lToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    seizeAllowed(lToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    seizeGuardianPaused(overrides?: CallOverrides): Promise<boolean>;

    setBorrowPaused(
      lContractAddress: string,
      state: boolean,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setDepositPaused(
      lContractAddress: string,
      state: boolean,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setSeizePaused(state: boolean, overrides?: CallOverrides): Promise<boolean>;

    withdrawAllowed(
      lToken: string,
      withdrawer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    yesVault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ActionPaused(string,bool)"(
      action?: null,
      state?: null
    ): TypedEventFilter<[string, boolean], { action: string; state: boolean }>;

    ActionPaused(
      action?: null,
      state?: null
    ): TypedEventFilter<[string, boolean], { action: string; state: boolean }>;

    "LendingActionPaused(address,string,bool)"(
      lToken?: null,
      action?: null,
      state?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { lToken: string; action: string; state: boolean }
    >;

    LendingActionPaused(
      lToken?: null,
      action?: null,
      state?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { lToken: string; action: string; state: boolean }
    >;

    "MarketEntered(address,address)"(
      lToken?: null,
      account?: null
    ): TypedEventFilter<[string, string], { lToken: string; account: string }>;

    MarketEntered(
      lToken?: null,
      account?: null
    ): TypedEventFilter<[string, string], { lToken: string; account: string }>;

    "MarketExited(address,address)"(
      lToken?: null,
      account?: null
    ): TypedEventFilter<[string, string], { lToken: string; account: string }>;

    MarketExited(
      lToken?: null,
      account?: null
    ): TypedEventFilter<[string, string], { lToken: string; account: string }>;

    "MarketListed(address)"(
      lToken?: null
    ): TypedEventFilter<[string], { lToken: string }>;

    MarketListed(lToken?: null): TypedEventFilter<[string], { lToken: string }>;

    "NewCollateralFactor(uint256,uint256)"(
      oldCollateralFactorMantissa?: null,
      newCollateralFactorMantissa?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      {
        oldCollateralFactorMantissa: BigNumber;
        newCollateralFactorMantissa: BigNumber;
      }
    >;

    NewCollateralFactor(
      oldCollateralFactorMantissa?: null,
      newCollateralFactorMantissa?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      {
        oldCollateralFactorMantissa: BigNumber;
        newCollateralFactorMantissa: BigNumber;
      }
    >;

    "NewLiquidationIncentive(uint256,uint256)"(
      oldLiquidationIncentiveMantissa?: null,
      newLiquidationIncentiveMantissa?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      {
        oldLiquidationIncentiveMantissa: BigNumber;
        newLiquidationIncentiveMantissa: BigNumber;
      }
    >;

    NewLiquidationIncentive(
      oldLiquidationIncentiveMantissa?: null,
      newLiquidationIncentiveMantissa?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      {
        oldLiquidationIncentiveMantissa: BigNumber;
        newLiquidationIncentiveMantissa: BigNumber;
      }
    >;

    "NewPriceOracle(address,address)"(
      oldPriceOracle?: null,
      newPriceOracle?: null
    ): TypedEventFilter<
      [string, string],
      { oldPriceOracle: string; newPriceOracle: string }
    >;

    NewPriceOracle(
      oldPriceOracle?: null,
      newPriceOracle?: null
    ): TypedEventFilter<
      [string, string],
      { oldPriceOracle: string; newPriceOracle: string }
    >;

    "NewYESVault(address,address)"(
      oldYESVault?: null,
      newYESVault?: null
    ): TypedEventFilter<
      [string, string],
      { oldYESVault: string; newYESVault: string }
    >;

    NewYESVault(
      oldYESVault?: null,
      newYESVault?: null
    ): TypedEventFilter<
      [string, string],
      { oldYESVault: string; newYESVault: string }
    >;
  };

  estimateGas: {
    accountAssets(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allMarkets(overrides?: CallOverrides): Promise<BigNumber>;

    borrowAllowed(
      lToken: string,
      borrower: string,
      borrowAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    borrowGuardianPaused(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowLimitOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralFactorMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    depositAllowed(
      lToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositGuardianPaused(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    enterMarkets(
      lTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exitMarket(
      lToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAccountLiquidity(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isController(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidateBorrowAllowed(
      lToken: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidateCalculateSeizeTokens(
      lToken: string,
      borrowBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidationIncentiveMantissa(overrides?: CallOverrides): Promise<BigNumber>;

    markets(
      lToken: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    repayBorrowAllowed(
      lToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    seizeAllowed(lToken: string, overrides?: CallOverrides): Promise<BigNumber>;

    seizeGuardianPaused(overrides?: CallOverrides): Promise<BigNumber>;

    setBorrowPaused(
      lContractAddress: string,
      state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDepositPaused(
      lContractAddress: string,
      state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSeizePaused(
      state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawAllowed(
      lToken: string,
      withdrawer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    yesVault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accountAssets(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    borrowAllowed(
      lToken: string,
      borrower: string,
      borrowAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    borrowGuardianPaused(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowLimitOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralFactorMantissa(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositAllowed(
      lToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositGuardianPaused(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    enterMarkets(
      lTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exitMarket(
      lToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAccountLiquidity(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isController(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidateBorrowAllowed(
      lToken: string,
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidateCalculateSeizeTokens(
      lToken: string,
      borrowBalance: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidationIncentiveMantissa(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    markets(
      lToken: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    repayBorrowAllowed(
      lToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    seizeAllowed(
      lToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    seizeGuardianPaused(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setBorrowPaused(
      lContractAddress: string,
      state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDepositPaused(
      lContractAddress: string,
      state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSeizePaused(
      state: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawAllowed(
      lToken: string,
      withdrawer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    yesVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
