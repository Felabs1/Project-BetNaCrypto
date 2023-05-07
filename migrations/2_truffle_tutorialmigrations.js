const Hello = artifacts.require("Operations");
const sendingEther = artifacts.require("sendingEther");

module.exports = function (deployer) {
  deployer.deploy(Hello);

  // deployer.deploy(sendingEther);
  // const a = await Operations.deployed()
};
