import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Script, ScriptInterface } from "../Script";
export declare class Script__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "IS_SCRIPT";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ScriptInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Script;
}
