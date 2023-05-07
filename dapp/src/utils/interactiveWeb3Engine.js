import Web3 from "web3";
import { abi } from "../assets/abi";
export let web3 = new Web3(window.ethereum);
export var contract = new web3.eth.Contract(
  abi,
  "0x5B29C33685b1EED9743763c935bd2Ba1DE155940"
);

export async function claimWonTokens(_betId) {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  // console.log(_betId);
  await contract.methods
    .withdrawArraySpinFunds(Number(_betId))
    .send({ from: account, gasLimit: "1000000" })
    .then((data) => {
      console.log(data);
    });
}

export async function placeNormalBet(betArray, deposit, odds, possiblePayout) {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  // const formattedDeposit = web3.utils.toWei(deposit.toString(), "ether");
  // const formattedPayout = formattedDeposit * odds;
  // console.log(formattedDeposit);
  // console.log(formattedPayout);
  console.log(betArray);
  let formattedBetArray = [];
  for (let i = 0; i < betArray.length; i++) {
    formattedBetArray.push({
      matchId: betArray[i].gameId,
      teamNames: betArray[i].teamNames,
      category: betArray[i].selectCategory,
      pick: betArray[i].selectValue,
      outcome: "pending",
      won: false,
    });
  }
  // console.log(formattedBetArray);
  await contract.methods
    .placeNormalBet(
      formattedBetArray,
      web3.utils.toWei(deposit.toString(), "ether"),
      odds,
      web3.utils.toWei(Math.floor(possiblePayout).toString(), "ether")
    )
    .send({ from: account, gasLimit: "1000000" })
    .then((data) => {
      console.log(data);
    });
}
