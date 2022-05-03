require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure smoke warrior reflect rural unknown coral light army general'; 
let testAccounts = [
"0x3371360ff5ec481754a4872df5fa2aceae5064a0c96260b1d80fb9a015048996",
"0x7448d12a0020530620de17276ce362ed760ee3ee2f26b87c3ea01533ef380b21",
"0x2c883d762936aa0c17950790d2f869fcfe508aa1ea434991b9251cdd19623883",
"0x80d4b774e93ec181b45fc640518d70377fa398bbaa94484076b0fb942ef8398b",
"0xb675345a726e599926a0f71df5a92aeacd8f6d07ad186b133222d0e900820ccc",
"0xe00409f2f8aaa08123609a243532dbe1aa517db18d096b154626184e3369feeb",
"0xf7e0e3cee36a9217168ad5947676f421d7929aa3e21f8a94c181cb2798613608",
"0x8591ffe89c967565806e6f515842db5e3378e2204479224f8940ab32098ce5ba",
"0xc7786fc8dd03f94aa215cf750b0e85c22cf6486e4d5c6f6b5cb5ec031b8bfd24",
"0xd47e5af4271dba9220d8ee186d8ab57d08293392cbf512713cc2faf2938f4370"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


