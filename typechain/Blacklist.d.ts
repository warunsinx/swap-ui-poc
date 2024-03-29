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

interface BlacklistInterface extends ethers.utils.Interface {
  functions: {
    "blacklist(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "blacklist", values: [string]): string;

  decodeFunctionResult(functionFragment: "blacklist", data: BytesLike): Result;

  events: {
    "AddBlacklist(address,address)": EventFragment;
    "RevokeBlacklist(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddBlacklist"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevokeBlacklist"): EventFragment;
}

export type AddBlacklistEvent = TypedEvent<
  [string, string] & { account: string; caller: string }
>;

export type RevokeBlacklistEvent = TypedEvent<
  [string, string] & { account: string; caller: string }
>;

export class Blacklist extends BaseContract {
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

  interface: BlacklistInterface;

  functions: {
    blacklist(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  blacklist(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    blacklist(arg0: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "AddBlacklist(address,address)"(
      account?: string | null,
      caller?: string | null
    ): TypedEventFilter<[string, string], { account: string; caller: string }>;

    AddBlacklist(
      account?: string | null,
      caller?: string | null
    ): TypedEventFilter<[string, string], { account: string; caller: string }>;

    "RevokeBlacklist(address,address)"(
      account?: string | null,
      caller?: string | null
    ): TypedEventFilter<[string, string], { account: string; caller: string }>;

    RevokeBlacklist(
      account?: string | null,
      caller?: string | null
    ): TypedEventFilter<[string, string], { account: string; caller: string }>;
  };

  estimateGas: {
    blacklist(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    blacklist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
