import React, { useEffect, useState } from "react";
import Web3 from "web3";

const TransactionsTracker = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const initializeWeb3 = async () => {
      // Check if Web3 is available
      if (window.ethereum) {
        // Initialize Web3 with the current provider (Ganache)
        const web3 = new Web3(window.ethereum);
        try {
          // Request user permission to access their accounts
          await window.ethereum.enable();
          // Subscribe to new block headers
          web3.eth.subscribe("newBlockHeaders", (error, result) => {
            if (!error) {
              // Fetch transactions for the user's account
              fetchTransactions(web3);
            } else {
              console.error(error);
            }
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log("Please install MetaMask or use a compatible browser");
      }
    };

    initializeWeb3();
  }, []);

  const fetchTransactions = async (web3) => {
    // Get the user's accounts
    const accounts = await web3.eth.getAccounts();
    if (accounts.length > 0) {
      // Get the account's transaction history
      const account = accounts[0];
      const transactionCount = await web3.eth.getTransactionCount(account);
      const latestBlock = await web3.eth.getBlock("latest");
      const latestBlockNumber = latestBlock.number;

      const fetchedTransactions = [];

      // Fetch transactions for each block
      for (let i = latestBlockNumber; i > 0; i--) {
        const block = await web3.eth.getBlock(i, true);
        if (block && block.transactions) {
          const transactions = block.transactions.filter(
            (tx) => tx.from === account || tx.to === account
          );
          fetchedTransactions.push(...transactions);
        }
        if (fetchedTransactions.length >= transactionCount) {
          break;
        }
      }

      setTransactions(fetchedTransactions);
    }
  };

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map((tx) => (
          <li key={tx.hash}>{tx.hash}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsTracker;




import React, { useEffect, useState } from "react";
import Web3 from "web3";

const TransactionsTracker = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // ... Same code as before ...

    initializeWeb3();
  }, []);

  // ... Same code as before ...

  return (
    <div>
      <h1>Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Transaction Hash</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.hash}>
              <td>{tx.hash}</td>
              <td>{tx.from}</td>
              <td>{tx.to}</td>
              <td>{web3.utils.fromWei(tx.value, "ether")} ETH</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTracker;




import React, { useEffect, useState } from "react";
import Web3 from "web3";

const TransactionsTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [loggedInAccount, setLoggedInAccount] = useState("");

  useEffect(() => {
    // ... Same code as before ...

    initializeWeb3();
  }, []);

  const fetchTransactions = async (web3, account) => {
    const transactionCount = await web3.eth.getTransactionCount(account);
    const latestBlock = await web3.eth.getBlock("latest");
    const latestBlockNumber = latestBlock.number;

    const fetchedTransactions = [];

    // Fetch transactions for each block
    for (let i = latestBlockNumber; i > 0; i--) {
      const block = await web3.eth.getBlock(i, true);
      if (block && block.transactions) {
        const transactions = block.transactions.filter(
          (tx) => tx.from === account || tx.to === account
        );
        fetchedTransactions.push(...transactions);
      }
      if (fetchedTransactions.length >= transactionCount) {
        break;
      }
    }

    setTransactions(fetchedTransactions);
  };

  const handleLogin = async () => {
    try {
      // Request user permission to access their accounts
      await window.ethereum.enable();
      // Get the user's accounts
      const accounts = await web3.eth.getAccounts();
      if (accounts.length > 0) {
        const account = accounts[0];
        setLoggedInAccount(account);
        // Fetch transactions for the logged-in account
        fetchTransactions(web3, account);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    setLoggedInAccount("");
    setTransactions([]);
  };

  return (
    <div>
      <h1>Transactions</h1>
      {loggedInAccount ? (
        <>
          <p>Logged in as: {loggedInAccount}</p>
          <button onClick={handleLogout}>Logout</button>
          <table>
            <thead>
              <tr>
                <th>Transaction Hash</th>
                <th>From</th>
                <th>To</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.hash}>
                  <td>{tx.hash}</td>
                  <td>{tx.from}</td>
                  <td>{tx.to}</td>
                  <td>{web3.utils.fromWei(tx.value, "ether")} ETH</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <button onClick={handleLogin}>Login with MetaMask</button>
      )}
    </div>
  );
};

export default TransactionsTracker;
