import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-abi-exporter";
require('hardhat-contract-sizer');

// import { ethers } from "hardhat";
// import "hardhat-deploy";
import "@nomiclabs/hardhat-etherscan";
// dotenv.config();
const DEPLOYER_PRIVATE_KEY: string = String(process.env.DEPLOYER_SECRET_KEY);
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
    defaultNetwork: "bsc",
    solidity: {
        compilers: [
            {
                version: "0.4.23"
            },
            {
                version: "0.5.1"
            },
            {
                version: "0.8.7"
            },
            {
                version: "0.8.0"
            },
            {
                version: "0.8.8"
            },
            {
                version: "0.8.1"
            },
            {
                version: "0.4.24"
            }
        ],
        settings: {
            optimizer: {
                enabled: true,
                // runs: 1000,
            },
        },
    },
    abiExporter: {
        path: './data/abi',
        // runOnCompile: true,
        // clear: true,
        // flat: true,
        // only: [':ERC20$'],
        // spacing: 2,
        // pretty: true,
    },
    networks: {
        hardhat: {
            // forking: {
            //     url: "https://rpc.testnet.fantom.network/",
            // },
            chainId: 1337,
        },
        localhost: {
            url: "http://127.0.0.1:8545",
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
            // forking: {
            //     url: providers.getUrl(Network.OPERA_MAIN_NET),
            // },
            chainId: 1337,
            timeout: 1000000000
        },
        ropsten: {
            url: process.env.ROPSTEN_URL || "",
            accounts:
                process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        },
        ftm_testnet: {
            url: "https://rpc.testnet.fantom.network/",
            chainId: 4002,
            accounts: process.env.PRIVATE_KEY_CLIENT !== undefined ? [process.env.PRIVATE_KEY_CLIENT] : [], //client wallet
            timeout: 1000000,
            // gas: "auto"
        },
        bscTestnet: {
            url: "https://data-seed-prebsc-1-s1.binance.org:8545",
            chainId: 97,
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
            timeout: 1000000,
            gas: "auto"
        },
        bsc: {
            url: "https://bsc-dataseed.binance.org/",
            chainId: 56,
            accounts: process.env.PRIVATE_KEY_CLIENT !== undefined ? [process.env.PRIVATE_KEY_CLIENT] : [], //client wallet
            timeout: 1000000,
            // gas: "auto"
        },
        goerli: {
            url: "https://goerli.infura.io/v3/abc......",
            chainId: 5,
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
            timeout: 1000000,
            // gas: "auto"
        },
        mainnet: {
            url: "https://mainnet.infura.io/v3/abc......",
            chainId: 1,
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
            timeout: 1000000,
            // gas: "auto"
        },
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: "USD",
    },
    etherscan: {
        apiKey: {
            bsc: "abc......",
            bscTestnet: "abc......",
            mainnet: "abc.......",
            goerli: "abc.......",
        },
    },
    // namedAccounts: {
    //     deployer: {
    //         default: 0, // here this will by default take the first account as deployer
    //         1337: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    //     },
    // },
};

export default config;
