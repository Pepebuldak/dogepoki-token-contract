import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("[Deployer account address]: " + deployer.address);

  const TokenContract = await ethers.getContractFactory("DogePokiToken");
  const DogePokiToken = await TokenContract.deploy();

  await DogePokiToken.deployed();

  console.log("CustomToken deployed to:", DogePokiToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
