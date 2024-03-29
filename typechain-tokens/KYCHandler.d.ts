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

interface KYCHandlerInterface extends ethers.utils.Interface {
  functions: {
    "acceptedKycLevel()": FunctionFragment;
    "activateOnlyKycAddress()": FunctionFragment;
    "isActivatedOnlyKycAddress()": FunctionFragment;
    "kyc()": FunctionFragment;
    "setAcceptedKycLevel(uint256)": FunctionFragment;
    "setKYC(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptedKycLevel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activateOnlyKycAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isActivatedOnlyKycAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "kyc", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAcceptedKycLevel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setKYC", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "acceptedKycLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activateOnlyKycAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isActivatedOnlyKycAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kyc", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAcceptedKycLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKYC", data: BytesLike): Result;

  events: {
    "ActivateOnlyKYCAddress()": EventFragment;
    "SetAccecptedKycLevel(uint256,uint256)": EventFragment;
    "SetKYC(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ActivateOnlyKYCAddress"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetAccecptedKycLevel"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetKYC"): EventFragment;
}

export type ActivateOnlyKYCAddressEvent = TypedEvent<[] & {}>;

export type SetAccecptedKycLevelEvent = TypedEvent<
  [BigNumber, BigNumber] & { oldKycLevel: BigNumber; newKycLevel: BigNumber }
>;

export type SetKYCEvent = TypedEvent<
  [string, string] & { oldKyc: string; newKyc: string }
>;

export class KYCHandler extends BaseContract {
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

  interface: KYCHandlerInterface;

  functions: {
    acceptedKycLevel(overrides?: CallOverrides): Promise<[BigNumber]>;

    activateOnlyKycAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isActivatedOnlyKycAddress(overrides?: CallOverrides): Promise<[boolean]>;

    kyc(overrides?: CallOverrides): Promise<[string]>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKYC(
      _kyc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptedKycLevel(overrides?: CallOverrides): Promise<BigNumber>;

  activateOnlyKycAddress(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isActivatedOnlyKycAddress(overrides?: CallOverrides): Promise<boolean>;

  kyc(overrides?: CallOverrides): Promise<string>;

  setAcceptedKycLevel(
    _kycLevel: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKYC(
    _kyc: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptedKycLevel(overrides?: CallOverrides): Promise<BigNumber>;

    activateOnlyKycAddress(overrides?: CallOverrides): Promise<void>;

    isActivatedOnlyKycAddress(overrides?: CallOverrides): Promise<boolean>;

    kyc(overrides?: CallOverrides): Promise<string>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setKYC(_kyc: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ActivateOnlyKYCAddress()"(): TypedEventFilter<[], {}>;

    ActivateOnlyKYCAddress(): TypedEventFilter<[], {}>;

    "SetAccecptedKycLevel(uint256,uint256)"(
      oldKycLevel?: null,
      newKycLevel?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { oldKycLevel: BigNumber; newKycLevel: BigNumber }
    >;

    SetAccecptedKycLevel(
      oldKycLevel?: null,
      newKycLevel?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { oldKycLevel: BigNumber; newKycLevel: BigNumber }
    >;

    "SetKYC(address,address)"(
      oldKyc?: null,
      newKyc?: null
    ): TypedEventFilter<[string, string], { oldKyc: string; newKyc: string }>;

    SetKYC(
      oldKyc?: null,
      newKyc?: null
    ): TypedEventFilter<[string, string], { oldKyc: string; newKyc: string }>;
  };

  estimateGas: {
    acceptedKycLevel(overrides?: CallOverrides): Promise<BigNumber>;

    activateOnlyKycAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isActivatedOnlyKycAddress(overrides?: CallOverrides): Promise<BigNumber>;

    kyc(overrides?: CallOverrides): Promise<BigNumber>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKYC(
      _kyc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptedKycLevel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    activateOnlyKycAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isActivatedOnlyKycAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kyc(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAcceptedKycLevel(
      _kycLevel: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKYC(
      _kyc: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
