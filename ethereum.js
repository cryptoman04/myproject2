import { ethers } from "ethers";
import Fortmatic from "fortmatic";
import Web3 from "web3";

const fm = new Fortmatic("pk_test_8CFFEB379F8F8943");

let privateKey =
	"24EA3847DC82C6F4102082C9AF4130731C29E33A93ECF478320DD555FC25A6AC";
let wallet = new ethers.Wallet(privateKey);

// Connect a wallet to mainnet
let provider = ethers.getDefaultProvider();

const web3 = new Web3(fm.getDefaultProvider());
let walletWithProvider = new ethers.Wallet(privateKey, provider);
let web3Provider = new ethers.providers.Web3Provider(web3);

console.log('web3priovdier', web3Provider);

export default web3Provider