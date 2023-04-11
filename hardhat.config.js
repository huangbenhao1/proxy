require("@nomicfoundation/hardhat-toolbox");
// hardhat.config.js
require('@openzeppelin/hardhat-upgrades');

require('dotenv').config();


const { SEPOLIA_TEST, MNEMONIC_TEST,COINMARKETCAP_API_KEY,ETHERSCAN_API_KEY} = process.env;

module.exports = {
  /* solidity: {
    compilers: [
      {
        version: "0.8.19",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.12",
      },
    ],
    overrides: {
      "contracts/ERC20.sol": {
        version: "0.8.18",
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  }, */
  solidity:"0.8.10",
  networks:{
    Sepolia: {
      url: SEPOLIA_TEST,
      accounts: [`0x${MNEMONIC_TEST}`]
    }
  },
  etherscan:{
    apiKey: ETHERSCAN_API_KEY
  }
};
