const { ethers, run, network } = require("hardhat")
async function main() {
    const ManageServeTimeFactory = await ethers.getContractFactory("ManageServeTime")

    console.log("Deploying contract...")
    const manageServeTime = await ManageServeTimeFactory.deploy()

    await manageServeTime.deployed()
    console.log(`Deployed contract to: ${manageServeTime.address}`)
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...")
        await manageServeTime.deployTransaction.wait(6)
        await verify(manageServeTime.address, [])
    }
}

const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            // constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

//main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
