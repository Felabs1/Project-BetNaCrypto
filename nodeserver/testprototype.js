const express = require("express");

require("dotenv").config();
const API_URL =
  "https://eth-sepolia.g.alchemy.com/v2/jV8fi5SzfPTd82x7yYcq4T3TIH04Y_pv";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);
const { abi } = require("./abi.js");
const {
  addDataToFile,
  updateDataInFile,
  fetchDataFromFile,
  confirmVerifiedInBlockchain,
  reduceSpace,
} = require("./FileAddition");
const { PUBLIC_KEY, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;
const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);
const cors = require("cors");
const app = express();

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  next();
});

function generateUniqueRandomNumber(min, max) {
  const usedNumbers = new Set();

  while (true) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (!usedNumbers.has(randomNumber)) {
      usedNumbers.add(randomNumber);
      return randomNumber;
    }
  }
}
let teams = [
  "Manchester United",
  "New Castle",
  "Everton",
  "Chelsea",
  "Real Madrid",
  "Fenebahrce",
  "Grabba Bunich",
  "Liverpool",
  "Manchester City",
  "Tottenham Hotspur",
  "Gor Mahia",
  "Felabs Fc",
  "Aston Villa",
  "Arsenal",
  "Leicester",
  "WestHam",
];

let serveTeams = [];
let finishedMatches = [];

const contractOwner = "0xB384a0f96D14C293974a9818f45936A0b0dcEB14";
async function createDraw() {
  for (let i = teams.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = teams[i];
    teams[i] = teams[j];
    teams[j] = k;
  }

  let obj = [];
  serveTeams = [];
  const startTime = new Date().getTime();
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const time = hours + ":" + minutes;

  for (let i = 0; i < teams.length; i += 2) {
    const randomNumber = generateUniqueRandomNumber(1, 999999999);
    obj.push({
      eventId: randomNumber,
      homeTeam: teams[i],
      awayTeam: teams[i + 1],
      homeGoals: 0,
      awayGoals: 0,
      dateTime: 123456,
      matchFinished: 0,
    });
    serveTeams.push({
      eventId: randomNumber,
      homeTeam: teams[i],
      awayTeam: teams[i + 1],
      homeGoals: 0,
      awayGoals: 0,
      dateTime: time,
      duration: 0,
      matchFinished: 0,
    });
    addDataToFile(randomNumber, {
      eventId: randomNumber,
      homeTeam: teams[i],
      awayTeam: teams[i + 1],
      homeGoals: 0,
      awayGoals: 0,
      dateTime: time,
      duration: 0,
      matchFinished: 0,
      verifiedInBlockChain: false,
    });
  }

  obj.forEach(
    (
      {
        homeGoals,
        awayGoals,
        dateTime,
        matchFinished,
        eventId,
        homeTeam,
        awayTeam,
      },
      index,
      array
    ) => {
      if (matchFinished == 0) {
        const intervalId = setInterval(async () => {
          const simulatedDuration = (new Date().getTime() - startTime) / 1000;
          let teamToScore = Math.floor(Math.random() * 100) + 1;
          teamToScore > 0 && teamToScore < 30
            ? (homeGoals += 1)
            : teamToScore > 30 && teamToScore < 60
            ? (awayGoals += 1)
            : "";

          array[index].homeGoals = homeGoals;
          array[index].awayGoals = awayGoals;
          console.log(
            homeTeam + " " + homeGoals + " - " + awayGoals + " " + awayTeam
          );
          serveTeams[index].homeGoals = array[index].homeGoals;
          serveTeams[index].awayGoals = array[index].awayGoals;
          serveTeams[index].duration = simulatedDuration;

          console.log(simulatedDuration);
          if (simulatedDuration >= 120) {
            array[index].matchFinished = 1;
            finishedMatches.push(array[index]);
            updateDataInFile(array[index].eventId, array[index]);

            clearInterval(intervalId);
          }
        }, Math.floor(Math.random() * 60000) + 10000);
      }
    }
  );

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

async function dealWithFinishedMatches() {
  const finishedMatches = await fetchDataFromFile(1);
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest");
  const gasEstimate = await contract.methods
    .registerMultipleEventGames(finishedMatches)
    .estimateGas();

  const tx = {
    from: PUBLIC_KEY,
    to: CONTRACT_ADDRESS,
    nonce: nonce,
    gas: "10000000",
    data: contract.methods
      .registerMultipleEventGames(finishedMatches)
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

            confirmVerifiedInBlockchain(finishedMatches);
            // verifyBets();
            // was supposed to verify bets
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

async function fetchSimulatedApiData() {
  const sendData = await contract.methods
    .registerMultipleEventGames(football)
    .send({ from: contractOwner, gasLimit: "10000000" })
    .then(verifyBets());
  // console.log(sendData);
}

async function verifyBets() {
  const noOfActiveBets = await contract.methods.activeBetsCount().call();
  let activeBets = [];

  for (let i = 1; i <= noOfActiveBets; i++) {
    await contract.methods
      .activeBets(i)
      .call()
      .then(({ accountId, betId }) => {
        if (betId !== "0") {
          activeBets.push({ accountId, betId });
        }
      });
  }

  console.log(activeBets);

  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "pending");

  for (let j = 0; j < activeBets.length; j++) {
    const { accountId, betId } = activeBets[j];
    const gasEstimate = await contract.methods
      .verifyWon(accountId, betId)
      .estimateGas();
    const gasPrice = await web3.eth.getGasPrice();

    const tx = {
      from: PUBLIC_KEY,
      to: CONTRACT_ADDRESS,
      nonce: nonce + j, // Increment nonce for each transaction
      gas: gasEstimate,
      gasPrice: (Number(gasPrice) + j * 1000000000).toString(), // Increase gas price by 1 Gwei for each transaction
      data: contract.methods.verifyWon(accountId, betId).encodeABI(),
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);

    try {
      const { rawTransaction } = signedTx;
      const receipt = await web3.eth.sendSignedTransaction(rawTransaction);
      console.log("bet verification was this was successful");
      console.log(
        "The hash of your transaction is:",
        receipt.transactionHash,
        "\nCheck Alchemy's Mempool to view the status of your transaction!"
      );
    } catch (err) {
      console.log("verification error", err);
    }
  }
}

let teamNames = [];
async function fetchApiData() {
  // const teamNames = [];

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const fromDate = today.toISOString().split("T")[0];
  const toDate = tomorrow.toISOString().split("T")[0];
  const url = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=a40e5c3ae99a5914d3cef7bb90fd1c595975285c15d2ebf4ed0a41d1cf71184e&from=${fromDate}&to=2023-05-28`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();

  // console.log(data);
  const result = data.result ? data.result : [];

  // console.log(result);
  return result;
}

function separateGoals(str) {
  const [first, second] = str.split(" - ").map(Number);
  return Number.isInteger(first) && Number.isInteger(second)
    ? [first, second]
    : [0, 0];
}

async function updateData() {
  const data = await fetchApiData();
  data.forEach(
    ({
      event_key,
      event_home_team,
      event_away_team,
      event_final_result,
      event_date,
      event_time,
      event_live,
    }) => {
      const [homeGoals, awayGoals] = separateGoals(event_final_result);
      const dateTimeString = `${event_date} ${event_time}`;

      // Create a new Date object using the combined date and time string
      const dateObject = new Date(dateTimeString);

      // Get the Unix timestamp (in milliseconds)
      const timestamp = dateObject.getTime();

      // Convert the timestamp to seconds by dividing it by 1000
      const timestampInSeconds = Math.floor(timestamp / 1000);

      console.log(timestampInSeconds);
      teamNames.push({
        eventId: event_key,
        homeTeam: event_home_team,
        homeGoals,
        awayGoals,
        awayTeam: event_away_team,
        event_live,
        dateTime: timestampInSeconds,
        matchFinished: "0",
      });
    }
  );

  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest");
  const gasEstimate = await contract.methods
    .registerMultipleEventGames(teamNames)
    .estimateGas();

  const tx = {
    from: PUBLIC_KEY,
    to: CONTRACT_ADDRESS,
    nonce: nonce,
    gas: "10000000",
    data: contract.methods.registerMultipleEventGames(teamNames).encodeABI(),
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

async function dealWithWon() {
  teamNames.forEach(
    (
      {
        homeGoals,
        awayGoals,
        dateTime,
        matchFinished,
        eventId,
        homeTeam,
        awayTeam,
        event_live,
      },
      index,
      array
    ) => {
      // Combine the date and time strings into a single string
      const startTime = new Date().getTime();
      const timestampInSeconds = Math.floor(startTime / 1000);
      const dateTimeString = dateTime;

      if (timestampInSeconds > dateTime && event_live == "0") {
        console.log("match finished");

        const nonce = web3.eth.getTransactionCount(PUBLIC_KEY, "latest");
        const gasEstimate = contract.methods
          .registerEventGame(
            eventId,
            homeTeam,
            awayTeam,
            homeGoals,
            awayGoals,
            dateTime,
            "1"
          )
          .estimateGas();

        const tx = {
          from: PUBLIC_KEY,
          to: CONTRACT_ADDRESS,
          nonce: nonce,
          gas: "10000000",
          data: contract.methods
            .registerEventGame(
              eventId,
              homeTeam,
              awayTeam,
              homeGoals,
              awayGoals,
              dateTime,
              "1"
            )
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
                  // verifyBets();
                  // trying to stop the failures
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
      } else {
        console.log("match started");
        console.log(timestampInSeconds, dateTimeString);
      }
    }
  );
}

// Interval 1: Run twice a day
updateData();
const interval1 = setInterval(() => {
  updateData();
}, (12 * 60 * 60 * 1000) / 48); // Run every 12 hours (twice a day)

// Interval 2: Run 96 times per day
const interval2 = setInterval(() => {
  // Code to execute for Interval 2
  dealWithWon();
}, (24 * 60 * 60 * 1000) / 96); // Run every 15 minutes (96 times per day)

// Clear the intervals after a specific duration (e.g., 24 hours)
setTimeout(() => {
  clearInterval(interval1);
  clearInterval(interval2);
}, (24 * 60 * 60 * 1000) / 24);

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const intervalId = setInterval(() => {
    // res.send(serveTeams);
    res.write(`data: ${JSON.stringify(serveTeams)}\n\n`);
  }, 5000);

  req.on("close", () => {
    clearInterval(intervalId);
    res.end;
  });
});

// setInterval(createDraw, 130000);

setTimeout(() => {
  createDraw();
  setInterval(createDraw, 170000);
}, 20000);

setInterval(dealWithFinishedMatches, 134578);
setInterval(verifyBets, 234567);
setInterval(reduceSpace, 345678);

module.exports = app;
