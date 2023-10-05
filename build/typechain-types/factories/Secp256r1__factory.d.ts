import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Secp256r1, Secp256r1Interface } from "../Secp256r1";
type Secp256r1ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Secp256r1__factory extends ContractFactory {
    constructor(...args: Secp256r1ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Secp256r1>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Secp256r1;
    connect(signer: Signer): Secp256r1__factory;
    static readonly bytecode = "0x608080604052346100195760ce908161001f823930815050f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c90816372a4c30f14606057506391327ec614603457600080fd5b80600319360112605d576040516ffffffffeffffffffffffffffffffffff60601b198152602090f35b80fd5b905081600319360112609457807fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63255160209252f35b5080fdfea26469706673582212207b7ba747cf8b48c684fe3f278466bf4616c1bbd6d13b80c91dd1657d5d1b9bcc64736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "nn";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): Secp256r1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Secp256r1;
}
export {};
