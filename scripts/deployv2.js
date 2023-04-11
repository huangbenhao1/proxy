const {ethers,upgrades} = require("hardhat")

const PROXY = "0x59ca32362468613d7220a95392822c2a4029ce05";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");

/*     const box = await upgrades.deployProxy(Box, [11],{
        initializer:"initializer",
    });
 */

    await upgrades.upgradeProxy(PROXY,BoxV2 );

}

main();