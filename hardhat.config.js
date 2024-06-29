require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: 'https://api.avax-test.network/ext/C/rpc',
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
