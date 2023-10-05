import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface AnvilScriptInterface extends utils.Interface {
    functions: {
        "IS_SCRIPT()": FunctionFragment;
        "run()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_SCRIPT" | "run"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
    encodeFunctionData(functionFragment: "run", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "run", data: BytesLike): Result;
    events: {};
}
export interface AnvilScript extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AnvilScriptInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<[boolean]>;
        run(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;
    run(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;
        run(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;
        run(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        run(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
