async function regToBlockChain(obj) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest");
  const gasEstimate = await contract.methods
    .registerMultipleEventGames(obj)
    .estimateGas();

  const tx = {
    from: PUBLIC_KEY,
    to: CONTRACT_ADDRESS,
    nonce: nonce,
    gas: "10000000",
    data: contract.methods.registerMultipleEventGames(obj).encodeABI(),
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

module.exports = { regToBlockChain };
