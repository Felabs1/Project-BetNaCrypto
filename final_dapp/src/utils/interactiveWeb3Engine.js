import Web3 from "web3";
import { abi } from "../assets/abi";
export let web3 = new Web3(window.ethereum);
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

export async function claimWonTokens(_betId) {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  console.log(_betId);
  await contract.methods
    .withdrawArraySpinFunds(_betId)
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
  console.log(formattedBetArray);
  await contract.methods
    .placeNormalBet(
      formattedBetArray,
      web3.utils.toWei(deposit.toString(), "ether"),
      odds,
      web3.utils.toWei(possiblePayout.toFixed(8), "ether")
    )
    .send({
      from: account,
      gasLimit: "1000000",
      value: web3.utils.toWei(deposit.toString(), "ether"),
    })
    .then((data) => {
      console.log(data);
    });
}

export function isLoggedIn() {
  // Check if MetaMask is installed
  if (typeof window.ethereum !== "undefined") {
    // Check if the user is logged in to MetaMask
    if (window.ethereum.selectedAddress === null) {
      console.log("User is not logged in to MetaMask.");
      return false;
    } else {
      console.log("User is logged in to MetaMask.");
      console.log("Selected address:", window.ethereum.selectedAddress);
      return true;
    }
  } else {
    console.log("MetaMask is not installed.");
    return "not_installed";
  }
}
