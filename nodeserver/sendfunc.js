async function sendFeedToEventGames(eventId, result) {
  const accounts = await web3.eth.getAccounts();
  const tx = await contract.methods.sendFeed(eventId, result).send({
    from: accounts[0],
  });
  console.log(tx);
}

import React, { useState, useEffect } from "react";
import Web3 from "web3";

function App() {
  const [contractData, setContractData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545"); // Connect to a Web3 provider (MetaMask or local node)
      const contractAddress = "0x123456789..."; // Replace with your contract address
      const abi = [
        /* Paste your contract ABI here */
      ];

      const contract = new web3.eth.Contract(abi, contractAddress);

      const data = await contract.methods.getData().call(); // Replace with your contract method to call

      setContractData(data);
    }

    fetchData();
  }, []);

  return <div>{contractData && <p>Contract data: {contractData}</p>}</div>;
}

export default App;




import React, { useState, useEffect } from "react";
import Web3 from "web3";

function App() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function loadWeb3() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          setWeb3(web3);
          const accounts = await web3.eth.getAccounts();
          setAccounts(accounts);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log("Please install MetaMask");
      }
    }
    loadWeb3();
  }, []);

  if (!web3) {
    return <div>Loading Web3...</div>;
  }

  if (accounts.length === 0) {
    return <div>Please Log in to MetaMask</div>;
  }

  return <div>User is logged in with MetaMask account: {accounts[0]}</div>;
}

export default App;
