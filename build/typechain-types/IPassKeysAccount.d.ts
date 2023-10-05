import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export type PassKeyIdStruct = {
    pubKeyX: PromiseOrValue<BigNumberish>;
    pubKeyY: PromiseOrValue<BigNumberish>;
    keyId: PromiseOrValue<string>;
};
export type PassKeyIdStructOutput = [BigNumber, BigNumber, string] & {
    pubKeyX: BigNumber;
    pubKeyY: BigNumber;
    keyId: string;
};
export type UserOperationStruct = {
    sender: PromiseOrValue<string>;
    nonce: PromiseOrValue<BigNumberish>;
    initCode: PromiseOrValue<BytesLike>;
    callData: PromiseOrValue<BytesLike>;
    callGasLimit: PromiseOrValue<BigNumberish>;
    verificationGasLimit: PromiseOrValue<BigNumberish>;
    preVerificationGas: PromiseOrValue<BigNumberish>;
    maxFeePerGas: PromiseOrValue<BigNumberish>;
    maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
    paymasterAndData: PromiseOrValue<BytesLike>;
    signature: PromiseOrValue<BytesLike>;
};
export type UserOperationStructOutput = [
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    sender: string;
    nonce: BigNumber;
    initCode: string;
    callData: string;
    callGasLimit: BigNumber;
    verificationGasLimit: BigNumber;
    preVerificationGas: BigNumber;
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    paymasterAndData: string;
    signature: string;
};
export interface IPassKeysAccountInterface extends utils.Interface {
    functions: {
        "addPassKey(string,uint256,uint256)": FunctionFragment;
        "getAuthorisedKeys()": FunctionFragment;
        "removePassKey(string)": FunctionFragment;
        "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addPassKey" | "getAuthorisedKeys" | "removePassKey" | "validateUserOp"): FunctionFragment;
    encodeFunctionData(functionFragment: "addPassKey", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "getAuthorisedKeys", values?: undefined): string;
    encodeFunctionData(functionFragment: "removePassKey", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "validateUserOp", values: [
        UserOperationStruct,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "addPassKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAuthorisedKeys", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removePassKey", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUserOp", data: BytesLike): Result;
    events: {
        "PublicKeyAdded(bytes32,uint256,uint256,string)": EventFragment;
        "PublicKeyRemoved(bytes32,uint256,uint256,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PublicKeyAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PublicKeyRemoved"): EventFragment;
}
export interface PublicKeyAddedEventObject {
    keyHash: string;
    pubKeyX: BigNumber;
    pubKeyY: BigNumber;
    keyId: string;
}
export type PublicKeyAddedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    string
], PublicKeyAddedEventObject>;
export type PublicKeyAddedEventFilter = TypedEventFilter<PublicKeyAddedEvent>;
export interface PublicKeyRemovedEventObject {
    keyHash: string;
    pubKeyX: BigNumber;
    pubKeyY: BigNumber;
    keyId: string;
}
export type PublicKeyRemovedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    string
], PublicKeyRemovedEventObject>;
export type PublicKeyRemovedEventFilter = TypedEventFilter<PublicKeyRemovedEvent>;
export interface IPassKeysAccount extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPassKeysAccountInterface;
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
        addPassKey(_keyId: PromiseOrValue<string>, _pubKeyX: PromiseOrValue<BigNumberish>, _pubKeyY: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAuthorisedKeys(overrides?: CallOverrides): Promise<[PassKeyIdStructOutput[]]>;
        removePassKey(_keyId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    addPassKey(_keyId: PromiseOrValue<string>, _pubKeyX: PromiseOrValue<BigNumberish>, _pubKeyY: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAuthorisedKeys(overrides?: CallOverrides): Promise<PassKeyIdStructOutput[]>;
    removePassKey(_keyId: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    validateUserOp(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addPassKey(_keyId: PromiseOrValue<string>, _pubKeyX: PromiseOrValue<BigNumberish>, _pubKeyY: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getAuthorisedKeys(overrides?: CallOverrides): Promise<PassKeyIdStructOutput[]>;
        removePassKey(_keyId: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "PublicKeyAdded(bytes32,uint256,uint256,string)"(keyHash?: PromiseOrValue<BytesLike> | null, pubKeyX?: null, pubKeyY?: null, keyId?: null): PublicKeyAddedEventFilter;
        PublicKeyAdded(keyHash?: PromiseOrValue<BytesLike> | null, pubKeyX?: null, pubKeyY?: null, keyId?: null): PublicKeyAddedEventFilter;
        "PublicKeyRemoved(bytes32,uint256,uint256,string)"(keyHash?: PromiseOrValue<BytesLike> | null, pubKeyX?: null, pubKeyY?: null, keyId?: null): PublicKeyRemovedEventFilter;
        PublicKeyRemoved(keyHash?: PromiseOrValue<BytesLike> | null, pubKeyX?: null, pubKeyY?: null, keyId?: null): PublicKeyRemovedEventFilter;
    };
    estimateGas: {
        addPassKey(_keyId: PromiseOrValue<string>, _pubKeyX: PromiseOrValue<BigNumberish>, _pubKeyY: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAuthorisedKeys(overrides?: CallOverrides): Promise<BigNumber>;
        removePassKey(_keyId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addPassKey(_keyId: PromiseOrValue<string>, _pubKeyX: PromiseOrValue<BigNumberish>, _pubKeyY: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAuthorisedKeys(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removePassKey(_keyId: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: PromiseOrValue<BytesLike>, missingAccountFunds: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
