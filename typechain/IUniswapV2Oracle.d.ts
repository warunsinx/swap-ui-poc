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

interface IUniswapV2OracleInterface extends ethers.utils.Interface {
  functions: {
    "consult(address,uint256,address)": FunctionFragment;
    "factory()": FunctionFragment;
    "granularity()": FunctionFragment;
    "observationIndexOf(uint256)": FunctionFragment;
    "pairObservations(address,uint256)": FunctionFragment;
    "periodSize()": FunctionFragment;
    "update(address,address)": FunctionFragment;
    "windowSize()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "consult",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "granularity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "observationIndexOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pairObservations",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "periodSize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "update",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "windowSize",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "consult", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "granularity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "observationIndexOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pairObservations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "periodSize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "windowSize", data: BytesLike): Result;

  events: {};
}

export class IUniswapV2Oracle extends BaseContract {
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

  interface: IUniswapV2OracleInterface;

  functions: {
    consult(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    granularity(overrides?: CallOverrides): Promise<[number]>;

    observationIndexOf(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    pairObservations(
      addr: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber] & {
          timestamp: BigNumber;
          price0Cumulative: BigNumber;
          price1Cumulative: BigNumber;
        }
      ]
    >;

    periodSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    update(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    windowSize(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  consult(
    tokenIn: string,
    amountIn: BigNumberish,
    tokenOut: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  factory(overrides?: CallOverrides): Promise<string>;

  granularity(overrides?: CallOverrides): Promise<number>;

  observationIndexOf(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  pairObservations(
    addr: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      timestamp: BigNumber;
      price0Cumulative: BigNumber;
      price1Cumulative: BigNumber;
    }
  >;

  periodSize(overrides?: CallOverrides): Promise<BigNumber>;

  update(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  windowSize(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    consult(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<string>;

    granularity(overrides?: CallOverrides): Promise<number>;

    observationIndexOf(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    pairObservations(
      addr: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        timestamp: BigNumber;
        price0Cumulative: BigNumber;
        price1Cumulative: BigNumber;
      }
    >;

    periodSize(overrides?: CallOverrides): Promise<BigNumber>;

    update(
      tokenA: string,
      tokenB: string,
      overrides?: CallOverrides
    ): Promise<void>;

    windowSize(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    consult(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    granularity(overrides?: CallOverrides): Promise<BigNumber>;

    observationIndexOf(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pairObservations(
      addr: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    periodSize(overrides?: CallOverrides): Promise<BigNumber>;

    update(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    windowSize(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    consult(
      tokenIn: string,
      amountIn: BigNumberish,
      tokenOut: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    granularity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    observationIndexOf(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pairObservations(
      addr: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    periodSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    update(
      tokenA: string,
      tokenB: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    windowSize(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
