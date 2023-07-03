import { ethers, network, } from "hardhat";
// whitelist addresses

const devTeamAddressed = [
  // dev
  '0x06b59327E05d6B288d149E9D16042c4405F00881',
  "0xEdCF463ad9820c8F308E68632b929CCE31592343",
  "0xf2d730a475a62dD59924e44B0a44E89cb352De92",
  //  founder
  "0xD9d7aa768Af964f0F27aa0E163e87F188A4743E5",
  "0x488e67d0f8995A4F850c417c40627305bf9F8274",
  "0x485A0254f1ba80251D12530D397C3e9f420056F5",
  "0x4374a0B9d6a9B79F50B3DCb16a1d5E7250a226F0",
  "0x502aA841DEb1077B75aB1ed12F1A20596eB79997",
  "0x6ECC45e5bA8A3Ba4CD610257Ff9dd88ED3b5eE23",
  "0x4f0cB8111c39dd95EFf1dF565C992E99E1B0e00b",
]


async function main() {

  console.log("<<<<<Welcome>>>>>\n Going to deploy on:", network.name)

  if (network.name == "localhost") {
    // usdt token
    const USDTContract = await ethers.getContractFactory("USDT");

    // locked tokens 
    const DBNContract = await ethers.getContractFactory("DBN");

    // usdt deposit bank
    const TetherBankAddress = await ethers.getContractFactory("DboneIssuer");

    // deploy usdt
    const usdtContract = await USDTContract.deploy();
    console.log("set 01: usdtContract deployed:::", usdtContract.address)
    // console.log("set 01: usdt address:::", '0x6D82808CfccD7df68b373D9c27a63c9aAB781ea2')
    // deploy lock emolume
    const dbonContract = await DBNContract.deploy();
    console.log("set 02: dbonContract deployed:::", dbonContract.address)
    // deploy bank
    const emolumeIssuerAddress = await TetherBankAddress.deploy(
      usdtContract.address,
      dbonContract.address,
      dbonContract.address,
      devTeamAddressed
    );
    console.log("set 04: emolumeIssuerAddress deployed:::", emolumeIssuerAddress.address)

    await dbonContract.updateManager(emolumeIssuerAddress.address)
    console.log("set 05: dbonContract updateBank:::");

    // end
    console.log("usdtAddress:'" + usdtContract.address + "',");//test net
    // console.log("usdtAddress:'" + "0x6D82808CfccD7df68b373D9c27a63c9aAB781ea2" + "',");//test net
    console.log("dbonAddress:'" + dbonContract.address + "',");
    console.log("emolumeIssuerAddress:'" + emolumeIssuerAddress.address + "',\n \n");
  }
  if (network.name == "bscTestnet") {
    // const USDTContract = await ethers.getContractFactory("USDT");

    const DBNContract = await ethers.getContractFactory("DBN");
    // deploy usdt
    // const usdtContract = await USDTContract.deploy();
    // console.log("set 01: usdtContract deployed:::", usdtContract.address)
    console.log("set 01: usdtContract deployed:::", "0x58a810f0353d32fc09544d8E1be1042fa274Fad5")
    // usdt deposit bank
    const TetherBankAddress = await ethers.getContractFactory("DboneIssuer");

    // lock emolume
    // const dbonContract = await DBNContract.deploy();
    // console.log("set 02: dbonContract deployed:::", dbonContract.address)
    // console.log("set 02: dbonContract deployed:::", "0x57cE7CB87294f0B9A118BAD1270dAA53DB3aF3aC")
    // deploy bank
    const emolumeIssuerAddress = await TetherBankAddress.deploy(
      "0x58a810f0353d32fc09544d8E1be1042fa274Fad5",// dollar
      "0x57cE7CB87294f0B9A118BAD1270dAA53DB3aF3aC",// dbn
      "0x63D6bdc7DBd9F18CBcC2945C62e7e22a5Bb5d8D5",// ldbn
      devTeamAddressed
    );
    console.log("set 04: emolumeIssuerAddress deployed:::", emolumeIssuerAddress.address)

    // await dbonContract.updateManager(emolumeIssuerAddress.address)
    console.log("set 05: dbonContract updateBank:::");

    // end
    console.log("usdtAddress:'" + "0x58a810f0353d32fc09544d8E1be1042fa274Fad5" + "',");//test net
    console.log("dbonAddress:'" + "0x57cE7CB87294f0B9A118BAD1270dAA53DB3aF3aC" + "',");
    // console.log("dbonAddress:'" + dbonContract.address + "',");
    console.log("emolumeIssuerAddress:'" + emolumeIssuerAddress.address + "',\n \n");
    // tokens 
    // const DBNContract = await ethers.getContractFactory("DBN");

    // // usdt deposit bank
    // const TetherBankAddress = await ethers.getContractFactory("DboneIssuer");

    // // lock emolume
    // // const dbonContract = await DBNContract.deploy();
    // // console.log("set 02: dbonContract deployed:::", dbonContract.address)
    // console.log("set 02: dbonContract deployed:::", "0x57cE7CB87294f0B9A118BAD1270dAA53DB3aF3aC")
    // // deploy bank
    // const emolumeIssuerAddress = await TetherBankAddress.deploy(
    //   '0x58a810f0353d32fc09544d8E1be1042fa274Fad5',// dollar
    //   "0x57cE7CB87294f0B9A118BAD1270dAA53DB3aF3aC",// dbn
    //   "0x63D6bdc7DBd9F18CBcC2945C62e7e22a5Bb5d8D5",// ldbn
    //   devTeamAddressed
    // );
    // console.log("set 04: emolumeIssuerAddress deployed:::", emolumeIssuerAddress.address)

    // // await dbonContract.updateManager(emolumeIssuerAddress.address)
    // console.log("set 05: dbonContract updateBank:::");

    // // end
    // console.log("usdtAddress:'" + "0x58a810f0353d32fc09544d8E1be1042fa274Fad5" + "',");//test net
    // console.log("dbonAddress:'" + "0x57cE7CB87294f0B9A118BAD1270dAA53DB3aF3aC" + "',");
    // // console.log("dbonAddress:'" + dbonContract.address + "',");
    // console.log("emolumeIssuerAddress:'" + emolumeIssuerAddress.address + "',\n \n");
  }
  if (network.name == "bsc") {

    console.log("set 01: use usdt address:::", "0x55d398326f99059fF775485246999027B3197955")
    // locked tokens 01
    // const DBNContract = await ethers.getContractFactory("DBN");
    // usdt deposit bank 02
    const TetherBankAddress = await ethers.getContractFactory("DboneIssuer");
    // deploy lock emolume

    // const dbonContract = await DBNContract.deploy();
    // console.log("set 02: dbonContract deployed:::", dbonContract.address)
    console.log("set 02: dbonContract deployed:::", "0x2A597cDe5f37d4CF2BBD9F902444f7085A977379")

    // const dbonContract = { address: "0x442Dfd3d35fD7801FEBca0A94Ca0aDCd168106e8" }

    // deploy bank
    const emolumeIssuerAddress = await TetherBankAddress.deploy(
      "0x55d398326f99059fF775485246999027B3197955", //dollar address
      "0x2A597cDe5f37d4CF2BBD9F902444f7085A977379",//dbonContract.address, //dbon address
      "0xb878932ebE45Cc7948360e8EeD8Cf58dA7F12CA7", //leml address
      devTeamAddressed //dev team address
    );
    console.log("set 04: emolumeIssuerAddress deployed:::", emolumeIssuerAddress.address)

    // await dbonContract.updateManager(emolumeIssuerAddress.address)
    console.log("set 05: dbonContract updateBank:::");

    // end
    console.log("usdtAddress:'" + "0x55d398326f99059fF775485246999027B3197955" + "',");
    // console.log("dbonAddress:'" + dbonContract.address + "',");
    console.log("dbonAddress:'" + "0x2A597cDe5f37d4CF2BBD9F902444f7085A977379" + "',");
    console.log("emolumeIssuerAddress:'" + emolumeIssuerAddress.address + "',\n \n");
  }
  if (network.name == "Mainnet") {
    console.log("got it")
    // locked tokens 
    const DBNContract = await ethers.getContractFactory("DBN");

    // usdt deposit bank
    const TetherBankAddress = await ethers.getContractFactory("DboneIssuer");

    console.log("set 01: use usdt address:::", "0x55d398326f99059fF775485246999027B3197955")
    // deploy lock emolume
    const dbonContract = await DBNContract.deploy();
    console.log("set 02: dbonContract deployed:::", dbonContract.address)
    // deploy bank
    const emolumeIssuerAddress = await TetherBankAddress.deploy(
      "0x55d398326f99059fF775485246999027B3197955",
      dbonContract.address,
      dbonContract.address,
      devTeamAddressed
    );
    console.log("set 04: emolumeIssuerAddress deployed:::", emolumeIssuerAddress.address)

    await dbonContract.updateManager(emolumeIssuerAddress.address)
    console.log("set 05: dbonContract updateBank:::");

    // end
    console.log("usdtAddress:'" + "0x55d398326f99059fF775485246999027B3197955" + "',");
    console.log("dbonAddress:'" + dbonContract.address + "',");
    console.log("emolumeIssuerAddress:'" + emolumeIssuerAddress.address + "',\n \n");
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});







