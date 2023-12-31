import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { StdError, StdErrorInterface } from "../../StdError.sol/StdError";
type StdErrorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StdError__factory extends ContractFactory {
    constructor(...args: StdErrorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<StdError>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): StdError;
    connect(signer: Signer): StdError__factory;
    static readonly bytecode = "0x6080806040523461001a5761031f9081610020823930815050f35b600080fdfe60806040818152600436101561001457600080fd5b600091823560e01c90816305ee8612146102365750806310332977146102025780631de45560146101ce5780638995290f1461019a578063986c5f6814610166578063b22dc54d14610132578063b67689da146100fe578063d160e4de146100ca5763fa784a441461008557600080fd5b816003193601126100c657806100c2915190634e487b7160e01b602083015260126024830152602482526100b88261026e565b51918291826102a0565b0390f35b5080fd5b50816003193601126100c657806100c2915190634e487b7160e01b602083015260226024830152602482526100b88261026e565b50816003193601126100c657806100c2915190634e487b7160e01b602083015260516024830152602482526100b88261026e565b50816003193601126100c657806100c2915190634e487b7160e01b602083015260316024830152602482526100b88261026e565b50816003193601126100c657806100c2915190634e487b7160e01b602083015260416024830152602482526100b88261026e565b50816003193601126100c657806100c2915190634e487b7160e01b602083015260116024830152602482526100b88261026e565b50816003193601126100c657806100c2915190634e487b7160e01b602083015260216024830152602482526100b88261026e565b50816003193601126100c657806100c2915190634e487b7160e01b602083015260016024830152602482526100b88261026e565b9190508260031936011261026a576100c29250634e487b7160e01b602083015260326024830152602482526100b88261026e565b8280fd5b6060810190811067ffffffffffffffff82111761028a57604052565b634e487b7160e01b600052604160045260246000fd5b6020808252825181830181905290939260005b8281106102d557505060409293506000838284010152601f8019910116010190565b8181018601518482016040015285016102b356fea26469706673582212207127b88adfb6a3f210e383b220cf24e3d2480d01e81418e9c5b99de22784e41764736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "arithmeticError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "assertionError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "divisionError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "encodeStorageError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "enumConversionError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "indexOOBError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "memOverflowError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "popError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "zeroVarError";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): StdErrorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StdError;
}
export {};
