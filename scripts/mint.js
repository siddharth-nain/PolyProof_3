// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
require('dotenv').config()

const tokenAddress = "0x219dC4B3000eaCFF7E4f94218b9b0006c21e2b1C"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xC9D328f1FdA7C9622fbfb8129969Fdb51C3aDE9B"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  
    const tx = await token.mint(walletAddress, 5);
    await tx.wait();

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });