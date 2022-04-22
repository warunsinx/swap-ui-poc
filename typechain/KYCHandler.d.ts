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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface KYCHandlerInterface extends ethers.utils.Interface {
  functions: {
    "acceptedKYCLevel()": FunctionFragment;
    "isActivatedOnlyKycAddress()": FunctionFragment;
    "kyc()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptedKYCLevel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isActivatedOnlyKycAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "kyc", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptedKYCLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isActivatedOnlyKycAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kyc", data: BytesLike): Result;

  events: {};
}

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
    acceptedKYCLevel(overrides?: CallOverrides): Promise<[BigNumber]>;

    isActivatedOnlyKycAddress(overrides?: CallOverrides): Promise<[boolean]>;

    kyc(overrides?: CallOverrides): Promise<[string]>;
  };

  acceptedKYCLevel(overrides?: CallOverrides): Promise<BigNumber>;

  isActivatedOnlyKycAddress(overrides?: CallOverrides): Promise<boolean>;

  kyc(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    acceptedKYCLevel(overrides?: CallOverrides): Promise<BigNumber>;

    isActivatedOnlyKycAddress(overrides?: CallOverrides): Promise<boolean>;

    kyc(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    acceptedKYCLevel(overrides?: CallOverrides): Promise<BigNumber>;

    isActivatedOnlyKycAddress(overrides?: CallOverrides): Promise<BigNumber>;

    kyc(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptedKYCLevel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isActivatedOnlyKycAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kyc(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
