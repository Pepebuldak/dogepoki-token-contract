import { ethers } from "hardhat";

async function main() {
  // 컨트랙트 가져오기
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