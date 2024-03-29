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

interface TestDiamonFactoryInterface extends ethers.utils.Interface {
  functions: {
    "INIT_CODE_PAIR_HASH()": FunctionFragment;
    "PROJECT()": FunctionFragment;
    "adminRouter()": FunctionFragment;
    "allPairs(uint256)": FunctionFragment;
    "allPairsLength()": FunctionFragment;
    "createPair(address,address)": FunctionFragment;
    "feeTo()": FunctionFragment;
    "feeToSetter()": FunctionFragment;
    "getAcceptedLV()": FunctionFragment;
    "getAdminRounter()": FunctionFragment;
    "getCommittee()": FunctionFragment;
    "getKYC()": FunctionFragment;
    "getPair(address,address)": FunctionFragment;
    "setAcceptedKycLevel(uint256)": FunctionFragment;
    "setAdmin(address)": FunctionFragment;
    "setCommittee(address)": FunctionFragment;
    "setFee100(address,bool)": FunctionFragment;
    "setFeeTo(address)": FunctionFragment;
    "setFeeToSetter(address)": FunctionFragment;
    "setKYC(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "INIT_CODE_PAIR_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PROJECT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "adminRouter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allPairs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allPairsLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createPair",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeToSetter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAcceptedLV",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAdminRounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCommittee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getKYC", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPair",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAcceptedKycLevel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setCommittee",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee100",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setFeeToSetter",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setKYC", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "INIT_CODE_PAIR_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PROJECT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "adminRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allPairs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allPairsLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createPair", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeToSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAcceptedLV",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAdminRounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCommittee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getKYC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPair", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAcceptedKycLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCommittee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee100", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeToSetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKYC", data: BytesLike): Result;

  events: {
    "PairCreated(address,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PairCreated"): EventFragment;
}

export type PairCreatedEvent = TypedEvent<
  [string, string, string, BigNumber] & {
    token0: string;
    token1: string;
    pair: string;
    arg3: BigNumber;
  }
>;

export class TestDiamonFactory extends BaseContract {
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

  interface: TestDiamonFactoryInterface;

  functions: {
    INIT_CODE_PAIR_HASH(overrides?: CallOverrides): Promise<[string]>;

    PROJECT(overrides?: CallOverrides): Promise<[string]>;

    adminRouter(overrides?: CallOverrides): Promise<[string]>;

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    allPairsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    feeToSetter(overrides?: CallOverrides): Promise<[string]>;

    getAcceptedLV(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAdminRounter(overrides?: CallOverrides): Promise<[string]>;

    getCommittee(overrides?: CallOverrides): Promise<[string]>;

    getKYC(overrides?: CallOverrides): Promise<[string]>;

    getPair(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAdmin(
      _adminRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCommittee(
      _committee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFee100(
      _addr: string,
      _active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeToSetter(
      _feeToSetter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKYC(
      _kyc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  INIT_CODE_PAIR_HASH(overrides?: CallOverrides): Promise<string>;

  PROJECT(overrides?: CallOverrides): Promise<string>;

  adminRouter(overrides?: CallOverrides): Promise<string>;

  allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

  createPair(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  feeToSetter(overrides?: CallOverrides): Promise<string>;

  getAcceptedLV(overrides?: CallOverrides): Promise<BigNumber>;

  getAdminRounter(overrides?: CallOverrides): Promise<string>;

  getCommittee(overrides?: CallOverrides): Promise<string>;

  getKYC(overrides?: CallOverrides): Promise<string>;

  getPair(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<string>;

  setAcceptedKycLevel(
    _kycLevel: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAdmin(
    _adminRouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCommittee(
    _committee: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFee100(
    _addr: string,
    _active: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeTo(
    _feeTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeToSetter(
    _feeToSetter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKYC(
    _kyc: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    INIT_CODE_PAIR_HASH(overrides?: CallOverrides): Promise<string>;

    PROJECT(overrides?: CallOverrides): Promise<string>;

    adminRouter(overrides?: CallOverrides): Promise<string>;

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<string>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    feeToSetter(overrides?: CallOverrides): Promise<string>;

    getAcceptedLV(overrides?: CallOverrides): Promise<BigNumber>;

    getAdminRounter(overrides?: CallOverrides): Promise<string>;

    getCommittee(overrides?: CallOverrides): Promise<string>;

    getKYC(overrides?: CallOverrides): Promise<string>;

    getPair(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAdmin(_adminRouter: string, overrides?: CallOverrides): Promise<void>;

    setCommittee(_committee: string, overrides?: CallOverrides): Promise<void>;

    setFee100(
      _addr: string,
      _active: boolean,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setFeeTo(_feeTo: string, overrides?: CallOverrides): Promise<void>;

    setFeeToSetter(
      _feeToSetter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setKYC(_kyc: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "PairCreated(address,address,address,uint256)"(
      token0?: string | null,
      token1?: string | null,
      pair?: null,
      undefined?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { token0: string; token1: string; pair: string; arg3: BigNumber }
    >;

    PairCreated(
      token0?: string | null,
      token1?: string | null,
      pair?: null,
      undefined?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { token0: string; token1: string; pair: string; arg3: BigNumber }
    >;
  };

  estimateGas: {
    INIT_CODE_PAIR_HASH(overrides?: CallOverrides): Promise<BigNumber>;

    PROJECT(overrides?: CallOverrides): Promise<BigNumber>;

    adminRouter(overrides?: CallOverrides): Promise<BigNumber>;

    allPairs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    allPairsLength(overrides?: CallOverrides): Promise<BigNumber>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    feeToSetter(overrides?: CallOverrides): Promise<BigNumber>;

    getAcceptedLV(overrides?: CallOverrides): Promise<BigNumber>;

    getAdminRounter(overrides?: CallOverrides): Promise<BigNumber>;

    getCommittee(overrides?: CallOverrides): Promise<BigNumber>;

    getKYC(overrides?: CallOverrides): Promise<BigNumber>;

    getPair(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAdmin(
      _adminRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCommittee(
      _committee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFee100(
      _addr: string,
      _active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeToSetter(
      _feeToSetter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKYC(
      _kyc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    INIT_CODE_PAIR_HASH(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PROJECT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adminRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allPairs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allPairsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createPair(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeToSetter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAcceptedLV(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAdminRounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCommittee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getKYC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPair(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAdmin(
      _adminRouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCommittee(
      _committee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFee100(
      _addr: string,
      _active: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeToSetter(
      _feeToSetter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKYC(
      _kyc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
