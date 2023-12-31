/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes",
                name: "initCode",
                type: "bytes",
            },
        ],
        name: "createSender",
        outputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6080806040523461001657610178908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c63570e1a361461002857600080fd5b3461009e57602036600319011261009e5760043567ffffffffffffffff9182821161009e573660238301121561009e57816004013592831161009e57366024848401011161009e5761009a61008084602485016100b7565b6040516001600160a01b0390911681529081906020820190565b0390f35b80fd5b634e487b7160e01b600052604160045260246000fd5b90806014116101385767ffffffffffffffff91601319820183811161013d5760405193600b8401601f19908116603f011685019081118582101761013d5760405280845260208401903684840111610138576020946000600c819682946014880187378301015251923560601c5af190600051911561013257565b60009150565b600080fd5b6100a156fea2646970667358221220b9b244649c5aff2c444ebd7609ebcc8aaacca34ee824a528544c2b3a6bf01e6e64736f6c63430008130033";
const isSuperArgs = (xs) => xs.length > 1;
export class SenderCreator__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
SenderCreator__factory.bytecode = _bytecode;
SenderCreator__factory.abi = _abi;
