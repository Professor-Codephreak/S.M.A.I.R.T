// import Hardhat configuration type
import { HardhatUserConfig } from "hardhat/config";
// Import the Hardhat toolbox for additional plugins and utilities
import "@nomicfoundation/hardhat-toolbox";
// Import the dotenv library to load environment variables from a .env file
require('dotenv').config();

// Collect accounts from environment variables, filtering out undefined values
const Accounts = [
  process.env.PK_ACCOUNT1,
  process.env.PK_ACCOUNT2,
  process.env.PK_ACCOUNT3,
  process.env.PK_ACCOUNT4,
  process.env.PK_ACCOUNT5,
  process.env.PK_ACCOUNT6,
].filter(account => account !== undefined) as string[];

// Define the Hardhat configuration
const config: HardhatUserConfig = {
  solidity: {
    // Configure the Solidity compiler
    compilers: [
      {
        version: "0.8.20", // Specify the first Solidity version
        settings: {
          optimizer: {
            enabled: true, // Enable the optimizer
            runs: 1_000_000, // Optimize for how many times you intend to run the code
          },
          viaIR: true, // Enable the Yul intermediate representation optimizer
        },
      },
      {
        version: "0.8.24", // Specify the second Solidity version
        settings: {
          optimizer: {
            enabled: true, // Enable the optimizer
            runs: 1_000_000, // Optimize for how many times you intend to run the code
          },
          viaIR: true, // Enable the Yul intermediate representation optimizer
        },
      },
    ],
  },
  networks: {
    // Configuration for the local Hardhat network
    hardhat: {
      gas: "auto", // Automatically estimate the gas
      blockGasLimit: 0x1fffffffffffff, // Set a very high block gas limit
      allowUnlimitedContractSize: true, // Allow contracts of unlimited size
      accounts: {
        count: 400 // Set the number of accounts available in the local Hardhat network
      }
    },
    // Configuration for the Ethereum mainnet
    eth_mainnet: {
      url: process.env.ETH_MAINNET_HTTPS as string, // RPC URL for the Ethereum mainnet
      accounts: Accounts, // Use the accounts defined earlier
    },
    // Configuration for the Goerli test network
    goerli: {
      url: process.env.ETH_GOERLI_HTTPS as string, // RPC URL for the Goerli network
      accounts: Accounts, // Use the accounts defined earlier
    },
    // Configuration for the Sepolia test network
    sepolia: {
      url: process.env.ETH_SEPOLIA_HTTPS as string, // RPC URL for the Sepolia network
      accounts: Accounts, // Use the accounts defined earlier
      timeout: 150_000, // Set the timeout to 150 seconds
    },
    // Configuration for the Binance Smart Chain testnet
    bnb_testnet: {
      url: process.env.BNB_TESTNET_HTTPS as string, // RPC URL for the BNB testnet
      accounts: Accounts, // Use the accounts defined earlier
    },
    // Configuration for the Binance Smart Chain mainnet
    bnb_mainnet: {
      url: process.env.BNB_MAINNET_HTTPS as string, // RPC URL for the BNB mainnet
      accounts: Accounts, // Use the accounts defined earlier
    },
    // Configuration for the Arbitrum Goerli test network
    goerli_arb: {
      url: process.env.ARB_GOERLI_HTTPS as string, // RPC URL for the Arbitrum Goerli network
      accounts: Accounts, // Use the accounts defined earlier
    },
    // Configuration for the Anvil network
    anvil: {
      url: "http://127.0.0.1:8545", // RPC URL for the local Anvil network
      accounts: Accounts, // Use the accounts defined earlier
    },
    // Configuration for the Ganache network (commented out to avoid conflicts with Anvil)
    /*
    ganache: {
      url: "http://127.0.0.1:8545", // RPC URL for the local Ganache network
      accounts: Accounts, // Use the accounts defined earlier
    },
    */
  },
  mocha: {
    timeout: 1_000_000, // Set the timeout for tests
  },
  gasReporter: {
    enabled: true, // Enable gas reporting
    currency: 'USD', // Currency for gas price reporting
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY as string, // Etherscan API key for contract verification
  },
};

export default config;
