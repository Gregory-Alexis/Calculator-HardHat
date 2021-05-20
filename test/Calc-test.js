const { expect } = require("chai")
const { artifacts } = require("hardhat")

describe("Calculator add", function () {
	it("Should return the addition between nb1 + nb2", async function () {
		const Calculator = await ethers.getContractFactory("Calculator")
		const calculator = await Calculator.deploy("ADD")

		await calculator.deployed()
		expect(await calculator.add()).to.equal(nb1 + nb2)
	})
})

describe("Calculator sum", function () {
	it("Should return the sum between nb1 - nb2", async function () {
		const Calculator = await ethers.getContractFactory("Calculator")
		const calculator = await Calculator.deploy("SUM")

		await calculator.deployed()
		expect(await calculator.sum()).to.equal(nb1 - nb2)
	})
})

describe("Calculator mul", function () {
	it("Should return the multiplication between nb1 * nb2", async function () {
		const Calculator = await ethers.getContractFactory("Calculator")
		const calculator = await Calculator.deploy("MUL")

		await calculator.deployed()
		expect(await calculator.mul()).to.equal(nb1 * nb2)
	})
})

describe("Calculator div", function () {
	it("Should return the divition between nb1 / nb2", async function () {
		const Calculator = await ethers.getContractFactory("Calculator")
		const calculator = await Calculator.deploy("DIV")

		await calculator.deployed()
		expect(await calculator.div()).to.equal(nb1 / nb2)
	})
})

describe("Calculator mod", function () {
	it("Should return the modulo between nb1 % nb2", async function () {
		const Calculator = await ethers.getContractFactory("Calculator")
		const calculator = await Calculator.deploy("MOD")

		await calculator.deployed()
		expect(await calculator.mod()).to.equal(nb1 % nb2)
	})
})
