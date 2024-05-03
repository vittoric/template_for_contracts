require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    baseSepolia: {
      accounts: [PRIVATE_KEY],
      chainId: 84532,
      url: "https://sepolia.base.org",
    },
  }
};