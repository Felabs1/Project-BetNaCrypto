import Web3 from "web3";
import { abi } from "./abi.js";
import express from "express";
const app = express();

const web3 = new Web3("HTTP://127.0.0.1:7545");
const contract = new web3.eth.Contract(
  abi,
  // "05B29C33685b1EED9743763c935bd2Ba1DE155940"
  // "0x97DDea20A7588473B1a77e7401fd15414FB27Cb2"
  // "0xEE786Ba1530801E1615AAc42db0Fa7dFC9Cea7b3"
  // "0xba6d8571657ADA04d73400956A6E7D8705C6F32c"
  // "0x6d2980Af077860068EdAc345B27D6A502E158b4C"
  // "0x9fb255d194E3798e9174542d5E3431C1bF3c6e26"
  "0x36aE1D04CAB06c657447b6538C8BE19b5A51a278"
);
const contractOwner = "0x7d888EEDf07917cF5689690CDDAF402b06DB6872";
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

  const enterTeams = await contract.methods
    .registerMultipleEventGames(teamNames)
    .send({ from: contractOwner, gasLimit: "1000000" });
  console.log(enterTeams);
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
        const verify = contract.methods
          .registerEventGame(
            eventId,
            homeTeam,
            awayTeam,
            homeGoals,
            awayGoals,
            dateTime,
            "1"
          )
          .send({ from: contractOwner, gasLimit: "1000000" })
          .then(verifyBets());
      } else {
        console.log("match started");
        console.log(timestampInSeconds, dateTimeString);
      }
    }
  );
}

// Interval 1: Run twice a day
const interval1 = setInterval(() => {
  updateData();
}, 12 * 60 * 60 * 1000); // Run every 12 hours (twice a day)

// Interval 2: Run 96 times per day
const interval2 = setInterval(() => {
  // Code to execute for Interval 2
  dealWithWon();
}, (24 * 60 * 60 * 1000) / 96); // Run every 15 minutes (96 times per day)

// Clear the intervals after a specific duration (e.g., 24 hours)
setTimeout(() => {
  clearInterval(interval1);
  clearInterval(interval2);
}, 24 * 60 * 60 * 1000);
