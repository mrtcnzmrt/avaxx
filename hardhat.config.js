require("@nomiclabs/hardhat-waffle");

const PRIVATE_KEY = "228026fa8e40a5bf4e85d5bbe540890e7e733ea6e1dca6a9aa0325d4e438472f"; // Your wallets private key

module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      accounts: [PRIVATE_KEY],
    },
  },
};