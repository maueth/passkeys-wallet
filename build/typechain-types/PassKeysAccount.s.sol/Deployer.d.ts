import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface DeployerInterface extends utils.Interface {
    functions: {
        "IS_SCRIPT()": FunctionFragment;
        "deploy(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_SCRIPT" | "deploy"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
    encodeFunctionData(functionFragment: "deploy", values: [PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
    events: {};
}
export interface Deployer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DeployerInterface;
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
        deploy(_pkey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;
    deploy(_pkey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;
        deploy(_pkey: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;
        deploy(_pkey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deploy(_pkey: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
