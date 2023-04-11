const {ethers,upgrades} = require("hardhat")

async function main() {
    const Box = await ethers.getContractFactory("Box");

    const box = await upgrades.deployProxy(Box, [11],{
        initializer:"initializer",
    });


}

main();