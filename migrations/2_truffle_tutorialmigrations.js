const Hello = artifacts.require("Operations");
// const MainBets = artifacts.require("MainBets");

module.exports = function (deployer) {
  deployer.deploy(Hello);
};
