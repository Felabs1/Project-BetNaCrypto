import Web3 from "web3";
import { abi } from "../assets/abi";
export let web3 = new Web3(window.ethereum);

export async function connect() {
  await window.web3.currentProvider.enable();
  window.web3 = new Web3(window.web3.currentProvider);
}
console.log(abi);
export async function connectMetamask() {
  let accountsLength;
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  console.log(account);
}

export var contract = new web3.eth.Contract(
  abi,
  // "0x97DDea20A7588473B1a77e7401fd15414FB27Cb2"
  // "0xEE786Ba1530801E1615AAc42db0Fa7dFC9Cea7b3"
  // "0xba6d8571657ADA04d73400956A6E7D8705C6F32c"
  // "0x6d2980Af077860068EdAc345B27D6A502E158b4C"
  // "0x9fb255d194E3798e9174542d5E3431C1bF3c6e26"
  // "0x36aE1D04CAB06c657447b6538C8BE19b5A51a278"
  "0x5C86947a6766f87aAb2E4F27B7d2f7686e224D6F"
);

export async function SpinDatTing(betResult, gamingOdds, deposit) {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  const amount = web3.utils.toWei(deposit.toString(), "ether");
  const possiblePayout = (gamingOdds * amount).toString();

  console.log({ account, amount, possiblePayout, gamingOdds, betResult });
  await contract.methods
    .stakeSpinAndWin(
      betResult.toString(),
      gamingOdds.toString(),
      amount,
      possiblePayout.toString()
    )
    .send({
      from: account,
      value: web3.utils.toWei(deposit.toString(), "ether"),
      gasLimit: "1000000",
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function verifyAccount(_name) {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  await contract.methods
    .registerCustomer(_name)
    .send({ from: account, gasLimit: "1000000" })
    .then((data) => {
      console.log(data);
      alert("successfull");
    });
}

export function setArea(len, wid) {
  web3.eth
    .getAccounts()
    .then(function (account) {
      return contract.methods.addNums(len, wid).send({ from: account[0] });
    })
    .then(function (tmp) {
      console.log("success");
    })
    .catch(function (err) {
      console.log(err);
    });
}

export async function getAccountDetails() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  const balance = web3.eth.getBalance(account);
  const formattedBalance = web3.utils.fromWei(
    (await balance).toString(),
    "ether"
  );
  const username = await contract.methods
    .customers(account)
    .call()
    .then(function (data) {
      return data.name;
    });
  const obj = {
    accountAddress: account,
    username: username,
    balance: formattedBalance,
  };
  return obj;
}

export async function getAccountSpins() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  const accountSpins = [];
  contract.methods
    .getArraySpins(account)
    .call()
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        accountSpins.push({
          betId: data[i]["betId"],
          betResult: data[i]["betResult"],
          deposit: data[i]["deposit"],
          gamingOdds: data[i]["gamingOdds"],
          possiblePayout: data[i]["possiblePayout"],
          timeStamp: data[i]["timestamp"],
        });
      }
    });
  // console.log(accountSpins);
  return accountSpins;
}

// getAccountSpins();
export function getArea() {
  contract.methods
    .getArea()
    .call()
    .then(function (area) {
      console.log(area);
    });
}
