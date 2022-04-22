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

interface YESLockerInterface extends ethers.utils.Interface {
  functions: {
    "depositToken(uint256)": FunctionFragment;
    "endAt()": FunctionFragment;
    "startAt()": FunctionFragment;
    "totalYesBalance()": FunctionFragment;
    "totalYesWithdrawn()": FunctionFragment;
    "withdrawToken(uint256)": FunctionFragment;
    "yesTicket()": FunctionFragment;
    "yesToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "depositToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "endAt", values?: undefined): string;
  encodeFunctionData(functionFragment: "startAt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalYesBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalYesWithdrawn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "yesTicket", values?: undefined): string;
  encodeFunctionData(functionFragment: "yesToken", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "depositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "endAt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startAt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalYesBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalYesWithdrawn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "yesTicket", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "yesToken", data: BytesLike): Result;

  events: {};
}

export class YESLocker extends BaseContract {
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

  interface: YESLockerInterface;

  functions: {
    depositToken(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endAt(overrides?: CallOverrides): Promise<[BigNumber]>;

    startAt(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalYesBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalYesWithdrawn(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawToken(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    yesTicket(overrides?: CallOverrides): Promise<[string]>;

    yesToken(overrides?: CallOverrides): Promise<[string]>;
  };

  depositToken(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endAt(overrides?: CallOverrides): Promise<BigNumber>;

  startAt(overrides?: CallOverrides): Promise<BigNumber>;

  totalYesBalance(overrides?: CallOverrides): Promise<BigNumber>;

  totalYesWithdrawn(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawToken(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  yesTicket(overrides?: CallOverrides): Promise<string>;

  yesToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    depositToken(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    endAt(overrides?: CallOverrides): Promise<BigNumber>;

    startAt(overrides?: CallOverrides): Promise<BigNumber>;

    totalYesBalance(overrides?: CallOverrides): Promise<BigNumber>;

    totalYesWithdrawn(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawToken(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    yesTicket(overrides?: CallOverrides): Promise<string>;

    yesToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    depositToken(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endAt(overrides?: CallOverrides): Promise<BigNumber>;

    startAt(overrides?: CallOverrides): Promise<BigNumber>;

    totalYesBalance(overrides?: CallOverrides): Promise<BigNumber>;

    totalYesWithdrawn(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawToken(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    yesTicket(overrides?: CallOverrides): Promise<BigNumber>;

    yesToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    depositToken(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endAt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startAt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalYesBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalYesWithdrawn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawToken(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    yesTicket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    yesToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
