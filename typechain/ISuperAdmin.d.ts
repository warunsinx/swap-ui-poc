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

interface ISuperAdminInterface extends ethers.utils.Interface {
  functions: {
    "acceptSuperAdmin()": FunctionFragment;
    "pendingSuperAdmin()": FunctionFragment;
    "setPendingSuperAdmin(address)": FunctionFragment;
    "superAdmin()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptSuperAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingSuperAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingSuperAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "superAdmin",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptSuperAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingSuperAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPendingSuperAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "superAdmin", data: BytesLike): Result;

  events: {
    "NewPendingSuperAdmin(address)": EventFragment;
    "NewSuperAdmin(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewPendingSuperAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewSuperAdmin"): EventFragment;
}

export type NewPendingSuperAdminEvent = TypedEvent<
  [string] & { pendingSuperAdmin: string }
>;

export type NewSuperAdminEvent = TypedEvent<[string] & { superAdmin: string }>;

export class ISuperAdmin extends BaseContract {
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

  interface: ISuperAdminInterface;

  functions: {
    acceptSuperAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pendingSuperAdmin(overrides?: CallOverrides): Promise<[string]>;

    setPendingSuperAdmin(
      _pendingSuperAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    superAdmin(overrides?: CallOverrides): Promise<[string]>;
  };

  acceptSuperAdmin(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pendingSuperAdmin(overrides?: CallOverrides): Promise<string>;

  setPendingSuperAdmin(
    _pendingSuperAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  superAdmin(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    acceptSuperAdmin(overrides?: CallOverrides): Promise<void>;

    pendingSuperAdmin(overrides?: CallOverrides): Promise<string>;

    setPendingSuperAdmin(
      _pendingSuperAdmin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    superAdmin(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "NewPendingSuperAdmin(address)"(
      pendingSuperAdmin?: null
    ): TypedEventFilter<[string], { pendingSuperAdmin: string }>;

    NewPendingSuperAdmin(
      pendingSuperAdmin?: null
    ): TypedEventFilter<[string], { pendingSuperAdmin: string }>;

    "NewSuperAdmin(address)"(
      superAdmin?: null
    ): TypedEventFilter<[string], { superAdmin: string }>;

    NewSuperAdmin(
      superAdmin?: null
    ): TypedEventFilter<[string], { superAdmin: string }>;
  };

  estimateGas: {
    acceptSuperAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pendingSuperAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    setPendingSuperAdmin(
      _pendingSuperAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    superAdmin(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptSuperAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pendingSuperAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPendingSuperAdmin(
      _pendingSuperAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    superAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
