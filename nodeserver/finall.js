require("dotenv").config();
const API_URL =
  "https://eth-sepolia.g.alchemy.com/v2/jV8fi5SzfPTd82x7yYcq4T3TIH04Y_pv";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
const { abi } = require("./abi.js");
const { PUBLIC_KEY, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;
const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

async function balance() {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); // get latest nonce
  const gasEstimate = await contract.methods
    .stakeSpinAndWin("0.2", "0.2x", "1000000", "2000000")
    .estimateGas(); // estimate gas

  const tx = {
    from: PUBLIC_KEY,
    to: CONTRACT_ADDRESS,
    nonce: nonce,
    gas: gasEstimate,
    data: contract.methods
      .stakeSpinAndWin("0.2", "0.2x", "1000000", "2000000")
      .encodeABI(),
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\n Check Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log("Promise failed:", err);
    });
}

balance();
