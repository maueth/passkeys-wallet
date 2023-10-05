import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Secp256r1Test, Secp256r1TestInterface } from "../../Secp256r1.t.sol/Secp256r1Test";
type Secp256r1TestConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Secp256r1Test__factory extends ContractFactory {
    constructor(...args: Secp256r1TestConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Secp256r1Test>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Secp256r1Test;
    connect(signer: Signer): Secp256r1Test__factory;
    static readonly bytecode = "0x608060405234620002c057600160ff19906000918181845416178355816004918254161781557fa591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e601b5562000053620002c5565b927f912177ddfa310e5daf1a0d53c567b3c19261cda206bf788eaa4a3a708f09085684526020937f1bd0b92ff302efae4782e16c1b3eeb32b05df7cca4c84d74535bd4fb613e02bb8582015283825b60028110620002ac5750506040516001600160401b0393909150606082018481118382101762000299576040527fa6ad1deeababc22e1eeba4bc93f6535ff95391a1981d9276bbe39b1ce473d6ed82528582017f688c2d5b0231d21e9f6ad264cfcdcf09aec15ea8c5c354f38b2fae95e82959e4815262000122620002c5565b92828452631d195cdd60e21b8885015283604082015251601e5551601f55815193841162000286578554908582811c921680156200027b575b87831014620002685750601f81116200021d575b508491601f8411600114620001b95791839491849394620001ad575b50501b916000199060031b1c19161790555b604051611a459081620002fc8239f35b0151925038806200018b565b919083601f198116878552878520945b8888838310620002055750505010620001eb575b505050811b0190556200019d565b015160001960f88460031b161c19169055388080620001dd565b868601518855909601959485019487935001620001c9565b858352858320601f850160051c8101918786106200025d575b601f0160051c019085905b828110620002515750506200016f565b84815501859062000241565b909150819062000236565b634e487b7160e01b845260229052602483fd5b91607f16916200015b565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b86835193019281601c0155018490620000a2565b600080fd5b60408051919082016001600160401b03811183821017620002e557604052565b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001257600080fd5b60003560e01c80630a9254e4146100f757806312246443146100f25780631ed7831c146100ed5780633e5e3c23146100e85780633f7286f4146100e357806366d9a9a0146100de5780636c1154a9146100d957806385226c81146100d4578063916a17c6146100cf578063b5508aa9146100ca578063ba414fa6146100c5578063e2035c52146100c0578063e20c9f71146100bb5763fa7626d4146100b657600080fd5b610c24565b610ba0565b610b77565b610b52565b610ac3565b610970565b6108e1565b610716565b610430565b6102f4565b610270565b6101dc565b61015f565b3461015a5760008060031936011261015757610119610114610f57565b6110c4565b60219082905b6010821061012b578380f35b60038160019251908151865560406020928381015186890155015160028701550193019101909161011f565b80fd5b600080fd5b3461015a57600036600319011261015a57610196610191610181610114610f57565b601c54601d5490601b54926117a5565b61161f565b005b6020908160408183019282815285518094520193019160005b8281106101bf575050505090565b83516001600160a01b0316855293810193928101926001016101b1565b3461015a57600036600319011261015a5760405180600d5491828152602080910192600d6000527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb5916000905b8282106102505761024c8561024081890382610cb6565b60405191829182610198565b0390f35b83546001600160a01b031686529485019460019384019390910190610229565b3461015a57600036600319011261015a5760405180600f5491828152602080910192600f6000527f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac802916000905b8282106102d45761024c8561024081890382610cb6565b83546001600160a01b0316865294850194600193840193909101906102bd565b3461015a57600036600319011261015a5760405180600e5491828152602080910192600e6000527fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd916000905b8282106103585761024c8561024081890382610cb6565b83546001600160a01b031686529485019460019384019390910190610341565b602080820190808352835180925260409283810182858560051b840101960194600080935b8685106103af57505050505050505090565b909192939480969798603f198382030186528951826060818885019360018060a01b038151168652015193888382015284518094520192019085905b80821061040c5750505090806001929a01950195019396959492919061039d565b82516001600160e01b03191684528a949384019390920191600191909101906103eb565b3461015a57600036600319011261015a5760125461044d81610e61565b61045a6040519182610cb6565b818152601260009081529160207fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec34448184015b8386106104a1576040518061024c8782610378565b826040516104ae81610c5d565b83546001600160a01b031681526040516001850180548083526104db602084015b92600052602060002090565b906000915b81600784011061063c579386600297969482946105479460019b9854918482821061061b575b8282106105fe575b8282106105e1575b8282106105c4575b8282106105a7575b82821061058a575b82821061056e575b5010610559575b5090500382610cb6565b8382015281520192019501949061048c565b6001600160e01b03191681520186903861053d565b83811b6001600160e01b031916855290938d9101930184610536565b6001600160e01b0319604085901b168552909301928c018461052e565b6001600160e01b0319606085901b168552909301928c0184610526565b6001600160e01b0319608085901b168552909301928c018461051e565b6001600160e01b031960a085901b168552909301928c0184610516565b6001600160e01b031960c085901b168552909301928c018461050e565b846106338f93968660e01b63ffffffff60e01b169052565b01930184610506565b939495509091600161010060089261070687548d60e06106668584831b63ffffffff60e01b169052565b6001600160e01b031960c084811b82168488015260a085811b8316604089015291936106f592909185918791906106e3906106cc8c86866060926080906106bb8582018585851b1663ffffffff60e01b169052565b01921b1663ffffffff60e01b169052565b6001600160e01b0319604085901b861616908c0152565b8901921b1663ffffffff60e01b169052565b8401911663ffffffff60e01b169052565b01940192019088959493926104e0565b3461015a57600036600319011261015a57610744610191601c54601d54601b549161073f610f57565b611717565b61076d7ff5a9b843ef6ed11fecc9170bd861512f56b342dd7270325228015d821925d915601b55565b6107c6610778610d2e565b7f8efa9b1e7bc5ecf43cbaccf2205daf40f60b19b88912d5d2b7dc63db2ecfdde981527f044a33ff15f58ebcdf978a46bd930e2ad054f8412b4eca55ae61297d24d72a2a6020820152611479565b61082c6107d1610d1f565b7fba5fcb538285326ed0e6fcdd2e95331d49029495d07840088b6919a379b17c8981527f874391cc36d7336ecaa23658e0b0aaf64212e9445eb241b0b81517276aea0b68602082015261082261149d565b604082015261152e565b610196610191601c54601d54601b549161073f610f57565b60005b8381106108575750506000910152565b8181015183820152602001610847565b602080820190808352835180925260408301928160408460051b8301019501936000915b84831061089b5750505050505090565b909192939495848080600193603f198682030187528a516108c781518092818552858086019101610844565b601f01601f1916010198019695949190910192019061088b565b3461015a57600036600319011261015a576011546108fe81610e61565b61090b6040519182610cb6565b81815260209182820160116000527f31ecc21a745e3968a04e9570e4425bc18fa8019c68028196b546d1669c200c68936000915b838310610954576040518061024c8782610867565b600182819261096289610eb3565b81520196019201919461093f565b3461015a57600036600319011261015a5760135461098d81610e61565b61099a6040519182610cb6565b818152601360009081529160207f66de8ffda797e3de9c05e8fc57b3bf0ec28a930d40b0d285d93c06501cf6a0908184015b8386106109e1576040518061024c8782610378565b826040516109ee81610c5d565b83546001600160a01b03168152604051600185018054808352610a13602084016104cf565b906000915b816007840110610a8957938660029796948294610a779460019b9854918482821061061b578282106105fe578282106105e1578282106105c4578282106105a75782821061058a5782821061056e575010610559575090500382610cb6565b838201528152019201950194906109cc565b9394955090916001610100600892610ab387548d60e06106668584831b63ffffffff60e01b169052565b0194019201908895949392610a18565b3461015a57600036600319011261015a57601054610ae081610e61565b610aed6040519182610cb6565b81815260209182820160106000527f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae672936000915b838310610b36576040518061024c8782610867565b6001828192610b4489610eb3565b815201960192019194610b21565b3461015a57600036600319011261015a576020610b6d610d93565b6040519015158152f35b3461015a57600036600319011261015a57610196610191601c54601d54601b549161073f610f57565b3461015a57600036600319011261015a5760405180600c5491828152602080910192600c6000527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7916000905b828210610c045761024c8561024081890382610cb6565b83546001600160a01b031686529485019460019384019390910190610bed565b3461015a57600036600319011261015a57602060ff600054166040519015158152f35b634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff821117610c7957604052565b610c47565b6060810190811067ffffffffffffffff821117610c7957604052565b6080810190811067ffffffffffffffff821117610c7957604052565b90601f8019910116810190811067ffffffffffffffff821117610c7957604052565b90600491630667f9d760e41b8152610cf98251809360208685019101610844565b010190565b906004916370ca10bb60e01b8152610cf98251809360208685019101610844565b60405190610d2c82610c7e565b565b60405190610d2c82610c5d565b3d15610d76573d9067ffffffffffffffff8211610c795760405191610d6a601f8201601f191660200184610cb6565b82523d6000602084013e565b606090565b9081602091031261015a5751801515810361015a5790565b6000805460081c60ff1615610daf575460081c60ff1690565b90565b80737109709ecfa91a80626ff3989d68f67f5b1dd12d803b610dd057505090565b8192506040518281610e0d60208201906040820191737109709ecfa91a80626ff3989d68f67f5b1dd12d815260206519985a5b195960d21b910152565b03610e20601f1991828101855284610cb6565b610e426040519182610e36602082019687610cd8565b03908101835282610cb6565b51925af150610dac610e52610d3b565b60208082518301019101610d7b565b67ffffffffffffffff8111610c795760051b60200190565b90600182811c92168015610ea9575b6020831014610e9357565b634e487b7160e01b600052602260045260246000fd5b91607f1691610e88565b9060405191826000825492610ec784610e79565b908184526001948581169081600014610f345750600114610ef1575b5050610d2c92500383610cb6565b9093915060005260209081600020936000915b818310610f1c575050610d2c93508201013880610ee3565b85548884018501529485019487945091830191610f04565b915050610d2c94506020925060ff191682840152151560051b8201013880610ee3565b60405190610f6482610c7e565b81601e548152601f54906020918282015260405180926000908054610f8881610e79565b8085529060019081811690811561101a5750600114610fb8575b50505060409291610fb4910384610cb6565b0152565b60008381527fc97bfaf2f8ee708c303a06d134f5ecd8389ae0432af62dc132a24118292866bb9695945091905b81831061100257509394509192509082010181610fb46040610fa2565b86548884018501529586019587945091830191610fe5565b60ff1916848701525050151560051b830101905081610fb46040610fa2565b6040519061104682610c7e565b60006040838281528260208201520152565b6040519061020080830183811067ffffffffffffffff821117610c79576040528260005b82811061108857505050565b602090611093611039565b818401520161107c565b9060108110156110ae5760051b0190565b634e487b7160e01b600052603260045260246000fd5b906112566110d0611058565b926110d9610d1f565b6000815260006020820152600060408201528452602081519101516110fc610d1f565b91825260208201526001604082015261111b60208501918083526112a8565b906112476111316040870193808552835161125e565b9260608701938452611237611227611147610d1f565b7f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c29681527f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f56020820152600160408201526111aa60808b019180835287519061125e565b60a08b01526111bc815185519061125e565b60c08b01526111ce815188519061125e565b60e08b01526111dd81516112a8565b906111f26101008c019280845288519061125e565b6101208c0152611205825186519061125e565b6101408c0152611218825189519061125e565b6101608c01525190519061125e565b610180890194818652519061125e565b6101a0880152825190519061125e565b6101c08601525190519061125e565b6101e0830152565b61128b9161126a611039565b508151916040602082015191015182519160406020850151940151946112c8565b906040519261129984610c7e565b83526020830152604082015290565b61128b906112b4611039565b5080519060406020820151910151916113d4565b9395939190816112da57505050929190565b909291949586156113ca57600160601b63ffffffff60c01b0319958694859485919082808380099b818d999781868180808f9d888009809d099c8d99099c81878d0990099c0990099308958181106113c3575b03958280808960020980099281808481878d09938181106113bc575b0360020994818680099809968280896002098308908181106113b5575b039b8c9360020909948181106113ae575b039009978289106113a5575b85918291089280099582871061139c575b960394030990565b95840195611394565b97850197611383565b8301611377565b8301611366565b8201611349565b830161132d565b5094505091929190565b929091600160601b63ffffffff60c01b031990819081858009958280808080808c87096004099a800960080992818080808089800980097fffffffff00000001000000000000000000000000fffffffffffffffffffffffc0992800960030908818960020982828009818110611472575b038981809b1061146b575b039009818110611464575b03940960020990565b830161145b565b8301611450565b8301611445565b60005b60028110611488575050565b6001906020835193019281601c01550161147c565b604051906114aa82610c5d565b60048252631d195cdd60e21b6020830152565b601f81116114c9575050565b600090602082527fc97bfaf2f8ee708c303a06d134f5ecd8389ae0432af62dc132a24118292866bb906020601f850160051c83019410611524575b601f0160051c01915b82811061151957505050565b81815560010161150d565b9092508290611504565b908151601e55604060209283810151601f55015191825167ffffffffffffffff8111610c7957611567816115628454610e79565b6114bd565b81601f82116001146115a05781929394600092611595575b50508160011b916000199060031b1c1916179055565b01519050388061157f565b6020600052601f198216907fc97bfaf2f8ee708c303a06d134f5ecd8389ae0432af62dc132a24118292866bb9160005b818110611608575095836001959697106115ef575b505050811b019055565b015160001960f88460031b161c191690553880806115e5565b91928560018192868b0151815501940192016115d0565b1561162657565b7f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f50606060405160208152601760208201527f4572726f723a20417373657274696f6e204661696c65640000000000000000006040820152a1737109709ecfa91a80626ff3989d68f67f5b1dd12d803b6116af575b50610d2c61010061ff00196000541617600055565b600080916040518160208201526519985a5b195960d21b604082015260016060820152606081526116df81610c9a565b82604051611703816116f5602082019586610cfe565b03601f198101835282610cb6565b51925af150611710610d3b565b503861169a565b9291908015801561179d575b8015611776575b801561174f575b61174657611741610dac946110c4565b6117a5565b50505050600090565b507bffffffff00000000000000004319055258e8617b0c46353d039cdaae19821015611731565b507bffffffff00000000000000004319055258e8617b0c46353d039cdaae1981101561172a565b508115611723565b939290917bffffffff00000000000000004319055258e8617b0c46353d039cdaae19908184108015906118b2575b6118a8576117e18291611986565b809309918309600080918193608091825b61180a57505050611805939495506118df565b501490565b85611886575b888160fe1c600c8460fc1c16178061183d575b505061183690600292831b921b926118bc565b91826117f2565b611879939761183697604061187061185885879b989b61109d565b5151946020611867828961109d565b5101519661109d565b510151946112c8565b9590945090928838611823565b9294611897919461189d93966113d4565b916113d4565b949193909392611810565b5060009450505050565b50818110156117d3565b80156118c9576000190190565b634e487b7160e01b600052601160045260246000fd5b929190811561197a57600160601b63ffffffff60c01b03199160008382818111611970575b505060405191602083526020808401526020604084015260608301527fffffffff00000001000000000000000000000000fffffffffffffffffffffffd60808301528360a083015260208260c0816005600019fa15610157575082905181808280098097099509900990565b0691508338611904565b50509050600090600090565b7bffffffff00000000000000004319055258e8617b0c46353d039cdaae19808211611a06575b60405191602083526020808401526020604084015260608301527fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63254f608083015260a082015260208160c0816005600019fa1561015a575190565b809106906119ac56fea2646970667358221220c228ad3ae1e542742f203877682f260ecec1140f0d8307da3f70675b658a772264736f6c63430008130033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "log";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "log_address";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "val";
            readonly type: "uint256[]";
        }];
        readonly name: "log_array";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "int256[]";
            readonly name: "val";
            readonly type: "int256[]";
        }];
        readonly name: "log_array";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "val";
            readonly type: "address[]";
        }];
        readonly name: "log_array";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "log_bytes";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "log_bytes32";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly name: "log_int";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "val";
            readonly type: "address";
        }];
        readonly name: "log_named_address";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "val";
            readonly type: "uint256[]";
        }];
        readonly name: "log_named_array";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "int256[]";
            readonly name: "val";
            readonly type: "int256[]";
        }];
        readonly name: "log_named_array";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "val";
            readonly type: "address[]";
        }];
        readonly name: "log_named_array";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "val";
            readonly type: "bytes";
        }];
        readonly name: "log_named_bytes";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "val";
            readonly type: "bytes32";
        }];
        readonly name: "log_named_bytes32";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "val";
            readonly type: "int256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "decimals";
            readonly type: "uint256";
        }];
        readonly name: "log_named_decimal_int";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "val";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "decimals";
            readonly type: "uint256";
        }];
        readonly name: "log_named_decimal_uint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "int256";
            readonly name: "val";
            readonly type: "int256";
        }];
        readonly name: "log_named_int";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "val";
            readonly type: "string";
        }];
        readonly name: "log_named_string";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "val";
            readonly type: "uint256";
        }];
        readonly name: "log_named_uint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly name: "log_string";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "log_uint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "logs";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "IS_TEST";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "excludeArtifacts";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "excludedArtifacts_";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "excludeContracts";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "excludedContracts_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "excludeSenders";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "excludedSenders_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "failed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetArtifactSelectors";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "selectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly name: "targetedArtifactSelectors_";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetArtifacts";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "targetedArtifacts_";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetContracts";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "targetedContracts_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetSelectors";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "selectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly name: "targetedSelectors_";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "targetSenders";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "targetedSenders_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "testCheckSigWithPrecompute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "testCheckSignature";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "testSingleSignatureVerify";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): Secp256r1TestInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Secp256r1Test;
}
export {};
