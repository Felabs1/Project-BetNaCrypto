import Web3 from "web3";
import { abi } from "../assets/abi";
export let web3 = new Web3("HTTP://127.0.0.1:7545");

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
  "0x5B29C33685b1EED9743763c935bd2Ba1DE155940"
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
      alert(betResult);
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
