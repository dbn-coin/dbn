import { ethers, network, } from "hardhat";
import { any, boolean } from "hardhat/internal/core/params/argumentTypes";
// whitelist addresses

async function main() {

  console.log("<<<<<Welcome>>>>>\n Going to deploy on:", network.name)

  if (network.name != "bsc") {
    // usdt token
    const FullFeatureToken = await ethers.getContractFactory("FullFeatureToken");

    // locked tokens 

    // deploy usdt
    
    const FullFeatureContract = await FullFeatureToken.deploy("test",
    "$",
    100000000,
    8,
   "0x7920E626546f6F952912380E28F70F84B8846Ea6",
 {_isMintable:false, _isBurnable:false, _isPausable:false,_isBlacklistEnabled:false,_isDocumentAllowed:false, 
  _isWhitelistEnabled:false,_isMaxAmountOfTokensSet:false,_isForceTransferAllowed:false},
   2000,
   "ipfs://QmdnfzqwRuTmZwquauTxGs9hXzMaaVczmuSuQbpUU4pRng"

     );
    console.log("set 01: FullFeatureContract deployed:::", FullFeatureContract.address)


  }
  if (network.name == "bsc") {

    // locked tokens 
    const DBONContract = await ethers.getContractFactory("DBON");

    // nft
    const EmolumeNFTContract = await ethers.getContractFactory("EmolumeNFT")

    // usdt deposit bank
    const TetherBankAddress = await ethers.getContractFactory("UsdtDeposit");

    console.log("set 01: use usdt address:::", "0x55d398326f99059fF775485246999027B3197955")
    // deploy lock emolume
    const ldbnContract = await DBONContract.deploy();
    console.log("set 02: ldbnContract deployed:::", ldbnContract.address)
    // nft here
    const emolumeNFTContract = await EmolumeNFTContract.deploy()
    console.log("set 03: emolumeNFTContract deployed:::", emolumeNFTContract.address)
    // deploy bank
    const tetherBankAddress = await TetherBankAddress.deploy(
      "0x55d398326f99059fF775485246999027B3197955",
      ldbnContract.address,
      emolumeNFTContract.address,
      '' ,// add manager address
    );
    console.log("set 04: tetherBankAddress deployed:::", tetherBankAddress.address)

    await ldbnContract.updateBank(tetherBankAddress.address)
    console.log("set 05: ldbnContract updateBank:::");

    await emolumeNFTContract.updateBank(tetherBankAddress.address)
    console.log("set 06: emolumeNFTContract updateBank:::\n \n");


    // end
    // console.log("usdtAddress:'" + usdtContract.address + "',");//test net
    console.log("usdtAddress:'" + "0x55d398326f99059fF775485246999027B3197955" + "',");
    console.log("nftAddress:'" + emolumeNFTContract.address + "',");
    console.log("ldbnAddress:'" + ldbnContract.address + "',");
    console.log("tetherBankAddress:'" + tetherBankAddress.address + "',\n \n");
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});







