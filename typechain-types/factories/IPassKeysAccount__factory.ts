/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPassKeysAccount,
  IPassKeysAccountInterface,
} from "../IPassKeysAccount";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pubKeyX",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pubKeyY",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "keyId",
        type: "string",
      },
    ],
    name: "PublicKeyAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pubKeyX",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pubKeyY",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "keyId",
        type: "string",
      },
    ],
    name: "PublicKeyRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_keyId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_pubKeyX",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pubKeyY",
        type: "uint256",
      },
    ],
    name: "addPassKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAuthorisedKeys",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "pubKeyX",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pubKeyY",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "keyId",
            type: "string",
          },
        ],
        internalType: "struct PassKeyId[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_keyId",
        type: "string",
      },
    ],
    name: "removePassKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPassKeysAccount__factory {
  static readonly abi = _abi;
  static createInterface(): IPassKeysAccountInterface {
    return new utils.Interface(_abi) as IPassKeysAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPassKeysAccount {
    return new Contract(address, _abi, signerOrProvider) as IPassKeysAccount;
  }
}
