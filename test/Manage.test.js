const { assert, expect } = require("chai")
const { network, getNamedAccounts, deployments, ethers } = require("hardhat")
const { developmentChains, networkConfig } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Manage Unit Test", function () {
          let manageServeTime
          const chainId = network.config.chainId

          beforeEach(async function () {
              const ManageServeTimeFactory = await ethers.getContractFactory("ManageServeTime")
              deployer = (await getNamedAccounts()).deployer
              await deployments.fixture(["all"])
              manageServeTime = await ethers.getContract("ManageServeTime", deployer)
          })

          describe("callDepartureTime", function () {
              it("Informs the departure time", async function () {
                  const departureTime = await ethers.getContractFactory("callDepartureTime")
              })
              it("Emits an event if the departure time is greater than the stipulated and pays with token", async function () {
                  // const departureTime = await
              })
          })
      })
