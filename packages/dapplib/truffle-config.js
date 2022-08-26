require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind concert grace industry foster trash'; 
let testAccounts = [
"0x19a2a032d02bb539618d21fe5a324ec502db7389acab60392b59bcabf79874b8",
"0xbd49454908cab5873684d10b4f1091010631907af914beb0d4132f01c06f60aa",
"0x482dca7c6020c952f0d070a161edbc9b80bd2673ba28c1904000eb1546d2c406",
"0x52235d656ffb096dc417ec0a992ecc6376c8836e811e25ea23b34b94eacf4e61",
"0x3558af246a6f6612dd80c4aa7a2f0e83982c7c41647af181254588c63d439951",
"0xae686c99678fafbdec68384dff5916fd4752967958fcd2b914635091d26dbed5",
"0x2efcf007e9c6e8b1d48ff1998737aa86dc3c0e0d8b31b58a1909be93d84f1aa6",
"0x15103a86ecd4b49f7d68dcbdd167b242c0b28f1c505e4ffabd06a3c4e8322cba",
"0x6aee670a73560d9c2a5c938818f5f0c95318fe4d718dc85b59c772b66608d2ad",
"0x041c634593377a0c4470953e15124e4c9f4311800a8230e1f4396afdf5cb43ba"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

