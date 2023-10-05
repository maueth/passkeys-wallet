import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PassKeysAccount, PassKeysAccountInterface } from "../PassKeysAccount";
type PassKeysAccountConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PassKeysAccount__factory extends ContractFactory {
    constructor(...args: PassKeysAccountConstructorParams);
    deploy(anEntryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PassKeysAccount>;
    getDeployTransaction(anEntryPoint: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PassKeysAccount;
    connect(signer: Signer): PassKeysAccount__factory;
    static readonly bytecode = "0x60c0346200016857601f620028ea38819003918201601f19168301916001600160401b038311848410176200016d578084926020946040528339810103126200016857516001600160a01b038116810362000168573060805260a05260005460ff8160081c16620001135760ff80821610620000d7575b6040516127669081620001848239608051818181610279015281816107f8015261090d015260a0518181816103d6015281816105b20152818161064f01528181610af401528181610c3001528181610cfd015281816111a001526111f20152f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a13862000076565b60405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806318dfb3c71461012b5780633659cfe6146101265780633a871cdd146101215780634a58db191461011c5780634d44560d146101175780634f1ef2861461011257806352d1902d1461010d578063873bd820146101085780638da5cb5b14610103578063977d08c0146100fe578063affed0e0146100f9578063b0d691fe146100f4578063b61d27f6146100ef578063c399ec88146100ea578063c4d66de8146100e5578063c7d523d0146100e05763d6f9f5630361000e57610f3f565b610e37565b610d7a565b610cd0565b610c5f565b610c1a565b610bf3565b610a8e565b610a6d565b610a22565b6108fa565b6107b7565b61061e565b6105a3565b61039f565b610252565b610165565b9181601f84011215610160578235916001600160401b038311610160576020808501948460051b01011161016057565b600080fd5b34610160576040366003190112610160576001600160401b0360043581811161016057610196903690600401610130565b9091602435908111610160576101b0903690600401610130565b906101b96111ef565b8183036102065760005b8381106101cc57005b806101fc6101e16102019360051b88016110e9565b6101f66101ef8488886110f3565b3691610762565b906112f1565b6110bf565b6101c3565b60405162461bcd60e51b815260206004820152601360248201527277726f6e67206172726179206c656e6774687360681b6044820152606490fd5b6001600160a01b0381160361016057565b346101605760203660031901126101605760043561026f81610241565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691906102a83084141561136e565b6102c56000805160206127118339815191529382855416146113cf565b6102cd61131d565b604051906102da826106fc565b600082527f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561031457505061001991506114ec565b6020600491604094939451928380926352d1902d60e01b825286165afa6000918161036f575b5061035c5760405162461bcd60e51b8152806103586004820161149d565b0390fd5b6100199361036a911461143f565b61157c565b61039191925060203d8111610398575b6103898183610717565b810190611430565b903861033a565b503d61037f565b3461016057600319606036820112610160576004356001600160401b038082116101605761016082600401938336030112610160577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316330361055e57610412610144830184611016565b8192910160c0838203126101605760608301358281116101605781610438918501610799565b9160808401358181116101605782610451918601610799565b9060a08501359081116101605761048f60009261047560209561049b948901610799565b90610489610484602435611d86565b61265e565b90611dc6565b60405191828092611daf565b039060025afa156105595760006104b961048f602093835190611e1a565b039060025afa15610559576105229161051b610516604493600051906104f26104ed82356000526002602052604060002090565b6119fa565b610506602082015115158061055457611e51565b6020604083013592013590611ecd565b611e8d565b0182611016565b905015610545575b61053560443561108b565b60405160008152602090f35b0390f35b61054e9061127b565b3861052a565b611e51565b611311565b60405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152606490fd5b60008060031936011261061b577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681813b1561061b5760405163b760faf960e01b8152306004820152918290602490829034905af180156105595761060f575080f35b610618906106c9565b80f35b80fd5b34610160576000604036600319011261061b5760043561063d81610241565b61064561131d565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691839190833b156106af5760449083604051958694859363040b850f60e31b855216600484015260243560248401525af180156105595761060f575080f35b8280fd5b634e487b7160e01b600052604160045260246000fd5b6001600160401b0381116106dc57604052565b6106b3565b606081019081106001600160401b038211176106dc57604052565b602081019081106001600160401b038211176106dc57604052565b90601f801991011681019081106001600160401b038211176106dc57604052565b60405190610745826106e1565b565b6001600160401b0381116106dc57601f01601f191660200190565b92919261076e82610747565b9161077c6040519384610717565b829481845281830111610160578281602093846000960137010152565b9080601f83011215610160578160206107b493359101610762565b90565b6040366003190112610160576004356107cf81610241565b6024356001600160401b038111610160576107ee903690600401610799565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169291906108283085141561136e565b6108456000805160206127118339815191529482865416146113cf565b61084d61131d565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561088357505061001991506114ec565b6020600491604094939451928380926352d1902d60e01b825286165afa600091816108da575b506108c75760405162461bcd60e51b8152806103586004820161149d565b610019936108d5911461143f565b611635565b6108f391925060203d8111610398576103898183610717565b90386108a9565b34610160576000366003190112610160577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163003610954576040516000805160206127118339815191528152602090f35b60405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608490fd5b9181601f84011215610160578235916001600160401b038311610160576020838186019501011161016057565b606060031982011261016057600435906001600160401b03821161016057610a16916004016109bf565b90916024359060443590565b3461016057610019610a33366109ec565b90610a3f93929361131d565b604051602081019085858337610a65602082888101600083820152038084520182610717565b519020611849565b3461016057600036600319011261016057602060015460601c604051908152f35b3461016057610b65610a9f366109ec565b93919092600094855494610aca60ff8760081c161580978198610be5575b8115610bc5575b50611113565b85610add600160ff196000541617600055565b610bac575b600180546001600160601b03169055867f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de8280a3604051602081019085858337610a656020828881018c83820152038084520182610717565b610b6c5780f35b610b7c61ff001960005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a180f35b610bc061010061ff00196000541617600055565b610ae2565b303b15915081610bd7575b5038610ac4565b6001915060ff161438610bd0565b600160ff8216109150610abd565b346101605760003660031901126101605760206001600160601b0360015416604051908152f35b34610160576000366003190112610160576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b3461016057606036600319011261016057600435610c7c81610241565b6044356001600160401b03811161016057600091610caa610ca2849336906004016109bf565b6101ef6111ef565b9060208251920190602435905af1610cc061105b565b9015610cc857005b602081519101fd5b346101605760008060031936011261061b576040516370a0823160e01b81523060048201526020816024817f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03165afa908115610559578291610d40575b604051828152602090f35b90506020813d8211610d72575b81610d5a60209383610717565b81010312610d6e5761054191505138610d35565b5080fd5b3d9150610d4d565b3461016057602036600319011261016057600435610d9781610241565b610dd960005491610dbd60ff8460081c161580948195610be5578115610bc55750611113565b82610dd0600160ff196000541617600055565b610e1e57611176565b610ddf57005b610def61ff001960005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a1005b610e3261010061ff00196000541617600055565b611176565b34610160576020366003190112610160576004356001600160401b03811161016057610e6a6100199136906004016109bf565b90610e7361131d565b611c07565b60005b838110610e8b5750506000910152565b8181015183820152602001610e7b565b90602091610eb481518092818552858086019101610e78565b601f01601f1916010190565b602080820190808352835180925260409283810182858560051b8401019601946000925b858410610ef5575050505050505090565b909192939495968580610f2e600193603f19868203018852868c5180518352848101518584015201519060609081898201520190610e9b565b990194019401929594939190610ee4565b346101605760008060031936011261061b5760035490610f5e826119cf565b90604090610f6e82519384610717565b838352601f19610f7d856119cf565b01815b818110610fee5750505b838110610f9e578151806105418582610ec0565b80610fce6104ed610fbe610fb4610fe9956117c5565b90549060031b1c90565b6000526002602052604060002090565b610fd882866119e6565b52610fe381856119e6565b506110bf565b610f8a565b6020908451610ffc816106e1565b848152828581830152606087830152828801015201610f80565b903590601e198136030182121561016057018035906001600160401b0382116101605760200191813603831361016057565b60405190611055826106fc565b60008252565b3d15611086573d9061106c82610747565b9161107a6040519384610717565b82523d6000602084013e565b606090565b806110935750565b600080808093338219f1506110a661105b565b50565b634e487b7160e01b600052601160045260246000fd5b60001981146110ce5760010190565b6110a9565b634e487b7160e01b600052603260045260246000fd5b356107b481610241565b9082101561110e5761110a9160051b810190611016565b9091565b6110d3565b1561111a57565b60405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608490fd5b600180546001600160601b0316606092831b6bffffffffffffffffffffffff19161790819055901c7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de600080a3565b337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031614801561126d575b1561122957565b606460405162461bcd60e51b815260206004820152602060248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152fd5b5060015460601c3314611222565b600154906001600160601b0390818316928284146110ce576020926001850116906001600160601b031916176001550135036112b357565b60405162461bcd60e51b81526020600482015260166024820152756163636f756e743a20696e76616c6964206e6f6e636560501b6044820152606490fd5b600091829182602083519301915af161130861105b565b9015610cc85750565b6040513d6000823e3d90fd5b60015460601c33148015611365575b1561133357565b60405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b6044820152606490fd5b5030331461132c565b1561137557565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b19195b1959d85d1958d85b1b60a21b6064820152608490fd5b156113d657565b60405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201526b6163746976652070726f787960a01b6064820152608490fd5b90816020910312610160575190565b1561144657565b60405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608490fd5b60809060208152602e60208201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960408201526d6f6e206973206e6f74205555505360901b60608201520190565b803b156115215760008051602061271183398151915280546001600160a01b0319166001600160a01b03909216919091179055565b60405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608490fd5b90611586826114ec565b6001600160a01b0382167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a280511580159061162d575b6115c8575050565b6110a691600080604051936115dc856106e1565b602785527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c6020860152660819985a5b195960ca1b6040860152602081519101845af461162761105b565b91611688565b5060006115c0565b9061163f826114ec565b6001600160a01b0382167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a2805115801590611680576115c8575050565b5060016115c0565b919290156116ea575081511561169c575090565b3b156116a55790565b60405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606490fd5b8251909150156116fd5750805190602001fd5b60405162461bcd60e51b815260206004820152908190610358906024830190610e9b565b908092918237016000815290565b90600182811c9216801561175f575b602083101461174957565b634e487b7160e01b600052602260045260246000fd5b91607f169161173e565b818110611774575050565b60008155600101611769565b9190601f811161178f57505050565b610745926000526020600020906020601f840160051c830193106117bb575b601f0160051c0190611769565b90915081906117ae565b60035481101561110e5760036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0190600090565b600354680100000000000000008110156106dc57600181018060035581101561110e5760036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0155565b9294939460026118cf60405192848452602098868a8601526060604086015280606086015280826080870137600060808287010152877fb044981c6514211b75f47581cf3c0269cf83354f0ec734b3fc05acb2a432e7b9601f199660808189601f8701168101030190a2604051956118c0876106e1565b86528986019687523691610762565b93604084019485526118eb866000526002602052604060002090565b935184555192600193848201550192518051966001600160401b0388116106dc576119208861191a875461172f565b87611780565b8092601f891160011461196257505095809281926107459798600094611957575b50501b916000199060031b1c19161790556117fc565b015192503880611941565b8893919298169761197886600052602060002090565b926000905b8a82106119b85750508361074598991061199f575b505050811b0190556117fc565b015160001960f88460031b161c19169055388080611992565b80878596829496860151815501950193019061197d565b6001600160401b0381116106dc5760051b60200190565b805182101561110e5760209160051b010190565b9060405191611a08836106e1565b8281548152600160028184015493602094858501520190604051938492600092815491611a348361172f565b80875292828116908115611aa75750600114611a62575b5050505060409291611a5e910384610717565b0152565b60009081528381209695945091905b818310611a8f57509394509192509082010181611a5e604038611a4b565b86548884018501529586019587945091830191611a71565b60ff191685880152505050151560051b830101905081611a5e604038611a4b565b15611acf57565b60405162461bcd60e51b815260206004820152601a60248201527f43616e6e6f742072656d6f766520746865206c617374206b65790000000000006044820152606490fd5b908160031b91808304600814901517156110ce57565b600260009182815582600182015501611b43815461172f565b80611b4d57505050565b82601f8211600114611b5e57505055565b9091808252611b7c601f60208420940160051c840160018501611769565b5555565b6000198101919082116110ce57565b6003548015611bd5576000198101908082101561110e577fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85a600091600383520155600355565b634e487b7160e01b600052603160045260246000fd5b6107b49392606092825260208201528160408201520190610e9b565b600191611c31611c3f600393611c1f86865411611ac8565b60405192839160208301958691611721565b03601f198101835282610717565b51902090611c5a6104ed836000526002602052604060002090565b9081511580611d7a575b611d7457611c84611c7f846000526002602052604060002090565b611b2a565b6000845b611cd3575b50507f7a16d57fe6df1ddb4adb65541d18e3fa18792c54ed63f1152d18ab2e1faaad699192508051611cce6040602084015193015160405193849384611beb565b0390a2565b815480821015611d6e5784611cea610fb4846117c5565b14611cff5750611cf9906110bf565b84611c88565b7f7a16d57fe6df1ddb4adb65541d18e3fa18792c54ed63f1152d18ab2e1faaad69949550611d5e9250611d3f610fb4611d3a611d4593611b80565b6117c5565b916117c5565b90919082549060031b91821b91600019901b1916179055565b611d66611b8f565b829138611c8d565b50611c8d565b50505050565b50602082015115611c64565b9060405191602083015260208252604082018281106001600160401b038211176106dc57604052565b90611dc260209282815194859201610e78565b0190565b610745919392936040519485918351611de781602096878088019101610e78565b8301611dfb82518093878085019101610e78565b01611e0e82518093868085019101610e78565b01038085520183610717565b60406107459193929381519481611e3b879351809260208087019101610e78565b8201906020820152036020810185520183610717565b15611e5857565b60405162461bcd60e51b815260206004820152600d60248201526c12d95e481b9bdd08199bdd5b99609a1b6044820152606490fd5b15611e9457565b60405162461bcd60e51b8152602060048201526011602482015270496e76616c6964207369676e617475726560781b6044820152606490fd5b929190801580156120e2575b80156120bb575b8015612094575b61208b576107b493612080611efa61223e565b91611f03610738565b600081526000602082015260006040820152835260208151910151611f26610738565b918252602082015260016040820152611f4560208401918083526122cc565b90612071611f5b60408601938085528351612282565b9260608601938452612061612051611f71610738565b7f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c29681527f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5602082015260016040820152611fd460808a0191808352875190612282565b60a08a0152611fe68151855190612282565b60c08a0152611ff88151885190612282565b60e08a015261200781516122cc565b9061201c6101008b0192808452885190612282565b6101208b015261202f8251865190612282565b6101408b01526120428251895190612282565b6101608b015251905190612282565b6101808801948186525190612282565b6101a08701528251905190612282565b6101c085015251905190612282565b6101e08201526120ea565b50505050600090565b507bffffffff00000000000000004319055258e8617b0c46353d039cdaae19821015611ee7565b507bffffffff00000000000000004319055258e8617b0c46353d039cdaae19811015611ee0565b508115611ed9565b939290917bffffffff00000000000000004319055258e8617b0c46353d039cdaae19908184108015906121f7575b6121ed576121268291612544565b809309918309600080918193608091825b61214f5750505061214a939495506122ec565b501490565b856121cb575b888160fe1c600c8460fc1c161780612182575b505061217b90600292831b921b92612212565b9182612137565b6121be939761217b9760406121b561219d85879b989b612201565b51519460206121ac8289612201565b51015196612201565b51015194612393565b9590945090928838612168565b92946121dc91946121e2939661249f565b9161249f565b949193909392612155565b5060009450505050565b5081811015612118565b90601081101561110e5760051b0190565b80156110ce576000190190565b6040519061222c826106e1565b60006040838281528260208201520152565b604051906102008083018381106001600160401b038211176106dc576040528260005b82811061226d57505050565b60209061227861221f565b8184015201612261565b6122af9161228e61221f565b50815191604060208201519101518251916040602085015194015194612393565b90604051926122bd846106e1565b83526020830152604082015290565b6122af906122d861221f565b50805190604060208201519101519161249f565b929190811561238757600160601b63ffffffff60c01b0319916000838281811161237d575b505060405191602083526020808401526020604084015260608301527fffffffff00000001000000000000000000000000fffffffffffffffffffffffd60808301528360a083015260208260c0816005600019fa1561061b575082905181808280098097099509900990565b0691508338612311565b50509050600090600090565b9395939190816123a557505050929190565b9092919495861561249557600160601b63ffffffff60c01b0319958694859485919082808380099b818d999781868180808f9d888009809d099c8d99099c81878d0990099c09900993089581811061248e575b03958280808960020980099281808481878d0993818110612487575b036002099481868009980996828089600209830890818110612480575b039b8c936002090994818110612479575b03900997828910612470575b859182910892800995828710612467575b960394030990565b9584019561245f565b9785019761244e565b8301612442565b8301612431565b8201612414565b83016123f8565b5094505091929190565b929091600160601b63ffffffff60c01b031990819081858009958280808080808c87096004099a800960080992818080808089800980097fffffffff00000001000000000000000000000000fffffffffffffffffffffffc099280096003090881896002098282800981811061253d575b038981809b10612536575b03900981811061252f575b03940960020990565b8301612526565b830161251b565b8301612510565b7bffffffff00000000000000004319055258e8617b0c46353d039cdaae198082116125c4575b60405191602083526020808401526020604084015260608301527fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63254f608083015260a082015260208160c0816005600019fa15610160575190565b8091069061256a565b604051906125da826106e1565b604082527f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392d5f6040837f4142434445464748494a4b4c4d4e4f505152535455565758595a61626364656660208201520152565b9061263682610747565b6126436040519182610717565b8281528092612654601f1991610747565b0190602036910137565b8051156127075761266d6125cd565b61269361268461267d8451611b14565b6006900490565b8351600690066126f95761262c565b91602083019181805101925b8383106126ad575050505090565b6004906003809401938451600190603f9082828260121c16880101518553828282600c1c16880101518386015382828260061c168801015160028601531685010151908201530161269f565b612702906110bf565b61262c565b506107b461104856fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca26469706673582212209f70562f1b3710d49466fc6438b2b4cd81a446fd17e63f3fde8701c193d9d60864736f6c63430008130033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "anEntryPoint";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "beacon";
            readonly type: "address";
        }];
        readonly name: "BeaconUpgraded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "keyHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "pubKeyX";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "pubKeyY";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "keyId";
            readonly type: "string";
        }];
        readonly name: "PublicKeyAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "keyHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "pubKeyX";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "pubKeyY";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "keyId";
            readonly type: "string";
        }];
        readonly name: "PublicKeyRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract IEntryPoint";
            readonly name: "entryPoint";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "SimpleAccountInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "addDeposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_keyId";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pubKeyX";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pubKeyY";
            readonly type: "uint256";
        }];
        readonly name: "addPassKey";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "entryPoint";
        readonly outputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "dest";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "func";
            readonly type: "bytes";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "dest";
            readonly type: "address[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "func";
            readonly type: "bytes[]";
        }];
        readonly name: "executeBatch";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAuthorisedKeys";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "pubKeyX";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "pubKeyY";
                readonly type: "uint256";
            }, {
                readonly internalType: "string";
                readonly name: "keyId";
                readonly type: "string";
            }];
            readonly internalType: "struct PassKeyId[]";
            readonly name: "knownKeys";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDeposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_keyId";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pubKeyX";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pubKeyY";
            readonly type: "uint256";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "anOwner";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "nonce";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proxiableUUID";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_keyId";
            readonly type: "string";
        }];
        readonly name: "removePassKey";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "initCode";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "uint256";
                readonly name: "callGasLimit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "verificationGasLimit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "preVerificationGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxFeePerGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxPriorityFeePerGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "paymasterAndData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "signature";
                readonly type: "bytes";
            }];
            readonly internalType: "struct UserOperation";
            readonly name: "userOp";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "userOpHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "missingAccountFunds";
            readonly type: "uint256";
        }];
        readonly name: "validateUserOp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "validationData";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "withdrawAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawDepositTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): PassKeysAccountInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PassKeysAccount;
}
export {};
