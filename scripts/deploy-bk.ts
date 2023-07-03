import { ethers, network, } from "hardhat";
// whitelist addresses

async function main() {

  console.log("<<<<<Welcome>>>>>\n Going to deploy on:", network.name)

  if (network.name != "bsc") {
    // usdt token
    const USDTContract = await ethers.getContractFactory("USDT");

    // locked tokens 
    const DBONContract = await ethers.getContractFactory("DBON");

    // usdt deposit bank
    const TetherBankAddress = await ethers.getContractFactory("UsdtDeposit");

    // nft
    const EmolumeNFTContract = await ethers.getContractFactory("EmolumeNFT")

    // deploy usdt
    const usdtContract = await USDTContract.deploy();
    console.log("set 01: usdtContract deployed:::", usdtContract.address)
    console.log("set 01: usdt address:::")
    // deploy lock emolume
    const ldbnContract = await DBONContract.deploy();
    console.log("set 02: ldbnContract deployed:::", ldbnContract.address)
    // nft here
    const emolumeNFTContract = await EmolumeNFTContract.deploy()
    console.log("set 03: emolumeNFTContract deployed:::", emolumeNFTContract.address)
    // deploy bank
    const tetherBankAddress = await TetherBankAddress.deploy(
      usdtContract.address,
      ldbnContract.address,
      emolumeNFTContract.address,
      '0x70997970c51812dc3a010c7d01b50e0d17dc79c8' ,// add manager address
    );
    console.log("set 04: tetherBankAddress deployed:::", tetherBankAddress.address)

    await ldbnContract.updateBank(tetherBankAddress.address)
    console.log("set 05: ldbnContract updateBank:::");

    await emolumeNFTContract.updateBank(tetherBankAddress.address)
    console.log("set 06: emolumeNFTContract updateBank:::\n \n");


    // end
    console.log("usdtAddress:'" + usdtContract.address + "',");//test net
    console.log("nftAddress:'" + emolumeNFTContract.address + "',");
    console.log("ldbnAddress:'" + ldbnContract.address + "',");
    console.log("tetherBankAddress:'" + tetherBankAddress.address + "',\n \n");
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







