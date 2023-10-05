import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC20PresetMinterPauser, ERC20PresetMinterPauserInterface } from "../ERC20PresetMinterPauser";
type ERC20PresetMinterPauserConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20PresetMinterPauser__factory extends ContractFactory {
    constructor(...args: ERC20PresetMinterPauserConstructorParams);
    deploy(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ERC20PresetMinterPauser>;
    getDeployTransaction(name: PromiseOrValue<string>, symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ERC20PresetMinterPauser;
    connect(signer: Signer): ERC20PresetMinterPauser__factory;
    static readonly bytecode = "0x60406080815234620004ad5762001e3790813803806200001f81620004b2565b9384398201918181840312620004ad5780516001600160401b039390848111620004ad578162000051918401620004d8565b9160209182820151868111620004ad576200006d9201620004d8565b93825194818611620003c45760058054966001958689811c99168015620004a2575b868a1014620003a3578190601f998a81116200044e575b5086908a8311600114620003e657600092620003da575b5050600019600383901b1c191690861b1781555b8151928311620003c457600654908582811c92168015620003b9575b85831014620003a35787821162000359575b505082958211600114620002f057948192939495600092620002e4575b5050600019600383901b1c191690831b176006555b60ff19806007541660075560008052600082528360002033600052825260ff84600020541615620002a9575b600080528282526200017333856000206200054a565b507f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a680600052600083528460002033600052835260ff856000205416156200026e575b600052828252620001cb33856000206200054a565b507f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a9081600052600083528460002033600052835260ff8560002054161562000232575b50600052526200022333826000206200054a565b505161183f9081620005d88239f35b81600052600083528460002033600052835283856000209182541617905533338260008051602062001e17833981519152600080a4386200020f565b80600052600083528460002033600052835284600020848382541617905533338260008051602062001e17833981519152600080a4620001b6565b6000805260008252836000203360005282528360002083828254161790553333600060008051602062001e178339815191528180a46200015d565b0151905038806200011c565b601f198216956006600052836000209160005b888110620003435750838697989695961062000329575b505050811b0160065562000131565b015160001960f88460031b161c191690553880806200031a565b8183015184559286019291850191850162000303565b6006600052846000209088808601821c83019387871062000399575b01901c019085905b8281106200038c5750620000ff565b600081550185906200037d565b9350829362000375565b634e487b7160e01b600052602260045260246000fd5b91607f1691620000ed565b634e487b7160e01b600052604160045260246000fd5b015190503880620000bd565b90889350601f1983169185600052886000209260005b8a8282106200043757505084116200041d575b505050811b018155620000d1565b015160001960f88460031b161c191690553880806200040f565b8385015186558c97909501949384019301620003fc565b90915083600052866000208a808501861c82019289861062000498575b918a918695949301871c01915b82811062000488575050620000a6565b600081558594508a910162000478565b925081926200046b565b98607f16986200008f565b600080fd5b6040519190601f01601f191682016001600160401b03811183821017620003c457604052565b919080601f84011215620004ad5782516001600160401b038111620003c4576020906200050e601f8201601f19168301620004b2565b92818452828287010111620004ad5760005b8181106200053657508260009394955001015290565b858101830151848201840152820162000520565b91906001830160009082825280602052604082205415600014620005d15784549468010000000000000000861015620005bd5760018601808255861015620005a957836040949596828552602085200155549382526020522055600190565b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b83526041600452602483fd5b5092505056fe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a714610ce65750816306fdde0314610c27578163095ea7b314610bfd57816318160ddd14610bdf57816323b872dd14610ba2578163248a9ca314610b785781632f2ff15d14610ac4578163313ce56714610aa857816336568abe14610a1657816339509351146109c65781633f4ba83a1461089457816340c10f19146106db57816342966c68146106bd5781635c975abb1461069957816370a082311461066157816379cc6790146106315781638456cb59146105015781639010d07c146104c057816391d148541461047a57816395d89b4114610377578163a217fddf1461035c578163a457c2d7146102b4578163a9059cbb14610283578163ca15c8731461025b578163d539139314610220578163d547741f146101de57508063dd62ed3e146101965763e63ab1e91461015957600080fd5b34610192578160031936011261019257602090517f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a8152f35b5080fd5b5034610192578060031936011261019257806020926101b3610da2565b6101bb610dbd565b6001600160a01b0391821683526003865283832091168252845220549051908152f35b9190503461021c578060031936011261021c5761021991356102146001610203610dbd565b938387528660205286200154610dd3565b611139565b80f35b8280fd5b505034610192578160031936011261019257602090517f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68152f35b90503461021c57602036600319011261021c5760209282913581526001845220549051908152f35b5050346101925780600319360112610192576020906102ad6102a3610da2565b60243590336111e3565b5160018152f35b905082346103595782600319360112610359576102cf610da2565b918360243592338152600360205281812060018060a01b0386168252602052205490828210610308576020856102ad85850387336113b5565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152fd5b80fd5b50503461019257816003193601126101925751908152602090f35b9190503461021c578260031936011261021c57805191836006549060019082821c928281168015610470575b602095868610821461045d575084885290811561043b57506001146103e2575b6103de86866103d4828b0383611101565b5191829182610d76565b0390f35b929550600683527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f5b82841061042857505050826103de946103d49282010194386103c3565b805486850188015292860192810161040b565b60ff191687860152505050151560051b83010192506103d4826103de386103c3565b634e487b7160e01b845260229052602483fd5b93607f16936103a3565b90503461021c578160031936011261021c578160209360ff9261049b610dbd565b903582528186528282206001600160a01b039091168252855220549151911615158152f35b90503461021c578160031936011261021c576020926104eb913581526001845282602435912061168b565b905491519160018060a01b039160031b1c168152f35b90503461021c578260031936011261021c577f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a83528260205281832033845260205260ff8284205416156105c9576007549060ff8216610593575060ff1916600117600755513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25890602090a180f35b606490602084519162461bcd60e51b8352820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152fd5b6020608492519162461bcd60e51b8352820152603760248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f2070617573650000000000000000006064820152fd5b505034610192573660031901126103595761021961064d610da2565b6024359061065c8233836114b7565b61154f565b5050346101925760203660031901126101925760209181906001600160a01b03610689610da2565b1681526002845220549051908152f35b50503461019257816003193601126101925760209060ff6007541690519015158152f35b8390346101925760203660031901126101925761021990353361154f565b9190503461021c578060031936011261021c576106f6610da2565b90602435907f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a68552602092858452818620338752845260ff828720541615610832576001600160a01b03169384156107f15760ff6007541661079d579185939183610783837fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef96546111c0565b90558585526002835280852082815401905551908152a380f35b83608492519162461bcd60e51b8352820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b6064820152fd5b83606492519162461bcd60e51b8352820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b815162461bcd60e51b8152808601859052603660248201527f45524332305072657365744d696e7465725061757365723a206d7573742068616044820152751d99481b5a5b9d195c881c9bdb19481d1bc81b5a5b9d60521b6064820152608490fd5b90503461021c578260031936011261021c577f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a83528260205281832033845260205260ff82842054161561095e576007549060ff821615610924575060ff1916600755513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa90602090a180f35b606490602084519162461bcd60e51b8352820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152fd5b6020608492519162461bcd60e51b8352820152603960248201527f45524332305072657365744d696e7465725061757365723a206d75737420686160448201527f76652070617573657220726f6c6520746f20756e7061757365000000000000006064820152fd5b5050346101925780600319360112610192576102ad602092610a0f6109e9610da2565b338352600386528483206001600160a01b038216845286529184902054602435906111c0565b90336113b5565b83915034610192578260031936011261019257610a31610dbd565b90336001600160a01b03831603610a4d57906102199135611139565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b5050346101925781600319360112610192576020905160128152f35b9190503461021c578060031936011261021c57610b2d9135906001610ae7610dbd565b92808652602090868252610aff838589200154610dd3565b80875286825283872094838060a01b031694858852825260ff848820541615610b31575b86525283206116a3565b5080f35b8087528682528387208588528252838720805460ff1916841790553385827f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8a80a4610b23565b90503461021c57602036600319011261021c57816020936001923581528085522001549051908152f35b505034610192576060366003190112610192576020906102ad610bc3610da2565b610bcb610dbd565b60443591610bda8333836114b7565b6111e3565b90503461021c578260031936011261021c5760209250549051908152f35b5050346101925780600319360112610192576020906102ad610c1d610da2565b60243590336113b5565b9190503461021c578260031936011261021c57805191836005549060019082821c928281168015610cdc575b602095868610821461045d575084885290811561043b5750600114610c83576103de86866103d4828b0383611101565b929550600583527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db05b828410610cc957505050826103de946103d49282010194386103c3565b8054868501880152928601928101610cac565b93607f1693610c53565b84913461021c57602036600319011261021c573563ffffffff60e01b811680910361021c5760209250635a05180f60e01b8114908115610d28575b5015158152f35b637965db0b60e01b811491508115610d42575b5083610d21565b6301ffc9a760e01b14905083610d3b565b60005b838110610d665750506000910152565b8181015183820152602001610d56565b60409160208252610d968151809281602086015260208686019101610d53565b601f01601f1916010190565b600435906001600160a01b0382168203610db857565b600080fd5b602435906001600160a01b0382168203610db857565b6000818152602090808252604092838220338352835260ff848320541615610dfb5750505050565b835167ffffffffffffffff91903360608201848111838210176110ed578752602a825285820192873685378251156110d957603084538251916001928310156110c5576078602185015360295b83811161105b5750611019579087519460808601908682109082111761100557885260428552868501956060368837855115610ff157603087538551821015610ff15790607860218701536041915b818311610f8357505050610f4157938593610f2793610f18604894610eef7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000099610f3d9b519a8b978801525180926037880190610d53565b8401917001034b99036b4b9b9b4b733903937b6329607d1b603784015251809386840190610d53565b01036028810185520183611101565b5162461bcd60e51b815291829160048301610d76565b0390fd5b60648587519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f81166010811015610fdd576f181899199a1a9b1b9c1cb0b131b232b360811b901a610fb38589611664565b5360041c928015610fc957600019019190610e97565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b634e487b7160e01b87526041600452602487fd5b60648789519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b90600f811660108110156110b1576f181899199a1a9b1b9c1cb0b131b232b360811b901a6110898387611664565b5360041c90801561109d5760001901610e48565b634e487b7160e01b88526011600452602488fd5b634e487b7160e01b89526032600452602489fd5b634e487b7160e01b87526032600452602487fd5b634e487b7160e01b86526032600452602486fd5b634e487b7160e01b86526041600452602486fd5b90601f8019910116810190811067ffffffffffffffff82111761112357604052565b634e487b7160e01b600052604160045260246000fd5b90604061117692600090808252816020528282209360018060a01b03169384835260205260ff8383205416611179575b815260016020522061172d565b50565b8082528160205282822084835260205282822060ff1981541690553384827ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b8580a4611169565b919082018092116111cd57565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0390811691821561136257169182156113115760ff600754166112b9576000828152600260205260408120549180831061126557604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef95876020965260028652038282205586815220818154019055604051908152a3565b60405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602a60248201527f45524332305061757361626c653a20746f6b656e207472616e736665722077686044820152691a5b19481c185d5cd95960b21b6064820152608490fd5b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b6001600160a01b0390811691821561146657169182156114165760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260038252604060002085600052825280604060002055604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b9060018060a01b03808316600052600360205260406000209082166000526020526040600020549260001984036114ef575b50505050565b80841061150a576115019303916113b5565b388080806114e9565b60405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606490fd5b6001600160a01b031680156116155760ff600754166112b957806000526002602052604060002054918083106115c5576020817fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92600095858752600284520360408620558060045403600455604051908152a3565b60405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608490fd5b60405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608490fd5b908151811015611675570160200190565b634e487b7160e01b600052603260045260246000fd5b80548210156116755760005260206000200190600090565b91906001830160009082825280602052604082205415600014611727578454946801000000000000000086101561171357836117036116ec886001604098999a0185558461168b565b819391549060031b91821b91600019901b19161790565b9055549382526020522055600190565b634e487b7160e01b83526041600452602483fd5b50925050565b9060018201906000928184528260205260408420549081151560001461180257600019918083018181116117ee5782549084820191821161109d578082036117b9575b505050805480156117a557820191611788838361168b565b909182549160031b1b191690555582526020526040812055600190565b634e487b7160e01b86526031600452602486fd5b6117d96117c96116ec938661168b565b90549060031b1c9283928661168b565b90558652846020526040862055388080611770565b634e487b7160e01b87526011600452602487fd5b505050509056fea2646970667358221220cde36be99a31186959777db53e492d3438f5abb3cbefaa72c9382022b562384164736f6c634300081300332f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Paused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleGranted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleRevoked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Unpaused";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "MINTER_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PAUSER_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burnFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getRoleMember";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleMemberCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "paused";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "renounceRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unpause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ERC20PresetMinterPauserInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20PresetMinterPauser;
}
export {};
