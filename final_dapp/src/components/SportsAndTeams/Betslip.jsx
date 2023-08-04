import { useState, useEffect } from "react";
import { FaCog } from "react-icons/fa";
import GameBetDetails from "./GameBetDetails";
import { myNiceBets } from "../../utils/prototypeData";
import { placeNormalBet } from "../../utils/interactiveWeb3Engine";
import AlertModal from "../Main/AlertModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Betslip = ({ myBets, onRemoveBet }) => {
  const [betAmount, setBetAmount] = useState("");
  const [possibleWin, setPossibleWin] = useState("");
  const [heading, setHeading] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(false);

  myNiceBets[myBets.gameId] = myBets;
  delete myNiceBets.undefined;

  function placeBet(e) {
    const data = myNiceBets;

    if (Object.values(data).length < 1) {
      alert("no bet in bet slip");

      return;
    }
    let total;
    let sum = 0;
    for (let i of Object.values(myNiceBets)) {
      sum = sum + Number(i.gameOdd);
    }
    total = betAmount * sum;
    let betArray = Object.values(data);
    console.log(sum);
    console.log(betAmount);
    console.log(total);
    // placeNormalBet(betArray, betAmount, sum, total);
    // .then((data) => {
    //   // console.log(data);
    //   setMessage("Bet Placed succcessfully");
    //   setHeading("Bet Success");
    //   setNotification(true);
    // })
    // .catch((e) => {
    //   if (e.message.includes("ethereum is not defined")) {
    //     setMessage("you must install a wallet to continue");
    //     setHeading("Wallet Error");
    //     setNotification(true);
    //   }
    // });

    toast.promise(placeNormalBet(betArray, betAmount, sum, total), {
      pending: {
        render() {
          return "placing...";
        },
        icon: false,
      },
      success: {
        render({ data }) {
          return `Bet successful`;
        },
        // other options
        icon: "🟢",
      },
      error: {
        render({ data }) {
          // When the promise reject, data will contains the error
          console.log(data);
        },
      },
    });
  }

  function getTotalOdds() {
    const currentBets = Object.values(myNiceBets);
    let sum = 0;
    let total = 0;
    if (currentBets.length == 0) {
      return 0;
    }
    for (const num of currentBets) {
      sum = sum + Number(num.gameOdd);
    }
    total = betAmount * sum;
    return { sum, total };
  }

  function getTotalAmount(e) {
    setBetAmount(e.target.value);
  }

  return (
    <>
      <ToastContainer />
      {notification && (
        <AlertModal
          message={message}
          heading={heading}
          onHandleCloseAlert={() => {
            setNotification(false);
          }}
        />
      )}
      <div className="w3-card" style={{ backgroundColor: "#0f0f0f" }}>
        <div className="w3-text-white w3-center w3-padding">BET SLIP</div>
        <div
          className="w3-container w3-padding w3-text-white"
          style={{ backgroundColor: "#222222" }}
        >
          <FaCog />
        </div>
        {Object.values(myNiceBets).map((mySuperBet) => {
          return (
            <GameBetDetails
              key={mySuperBet.gameId}
              time={mySuperBet.time}
              date={mySuperBet.date}
              homeTeam={mySuperBet.homeTeam}
              awayTeam={mySuperBet.awayTeam}
              gameId={mySuperBet.gameId}
              homeWinOdd={mySuperBet.homeWinOdd}
              awayWinOdd={mySuperBet.awayWinOdd}
              drawOdd={mySuperBet.drawOdd}
              over25Odd={mySuperBet.over25Odd}
              under25Odd={mySuperBet.under25Odd}
              idontKnowOdd={mySuperBet.idontKnowOdd}
              GGOdd={mySuperBet.GGOdd}
              NGOdd={mySuperBet.NGOdd}
              selectValue={mySuperBet.selectValue}
              selectCategory={mySuperBet.selectCategory}
              gameOdd={mySuperBet.gameOdd}
              onRemoveBet={onRemoveBet}
            />
          );
        })}
        <div className="w3-padding" style={{ backgroundColor: "#252525" }}>
          <div className="w3-left w3-text-white w3-small">Total Odds</div>
          <div className="w3-right w3-text-white">{getTotalOdds().sum}</div>
          <br />
        </div>
        <div className="w3-padding" style={{ backgroundColor: "#1a1a1a" }}>
          <div className="w3-left w3-text-white w3-small">Bet Amount</div>
          <div className="w3-right w3-text-white w3-small">Possible Win</div>
          <br />
        </div>
        <div
          className="w3-padding"
          style={{ backgroundColor: "#252525", display: "flex" }}
        >
          <div className="w3-text-white w3-small">
            <input
              style={{
                backgroundColor: "transparent",
                width: "95%",
                outline: "none",
              }}
              onChange={getTotalAmount}
              value={betAmount}
              className="w3-input w3-border w3-round"
            />
          </div>
          <div className="w3-text-white w3-small">
            <input
              value={getTotalOdds().total}
              readOnly
              style={{ backgroundColor: "transparent", outline: "none" }}
              className="w3-input w3-border w3-round"
            />
          </div>
          <br />
        </div>
        <div>
          <button
            onClick={placeBet}
            className="w3-button w3-block"
            style={{ backgroundColor: "#f8ff12", margin: "4px" }}
          >
            Place Bet
          </button>
        </div>
      </div>
    </>
  );
};

export default Betslip;
