import React from "react";

const GameBetDetails = ({
  time,
  date,
  homeTeam,
  awayTeam,
  gameId,
  homeWinOdd,
  awayWinOdd,
  drawOdd,
  over25Odd,
  under25Odd,
  idontKnowOdd,
  GGOdd,
  NGOdd,
  selectValue,
  selectCategory,
  gameOdd,
  onRemoveBet,
}) => {
  return (
    <div
      className="w3-padding"
      style={{ backgroundColor: "#333333", margin: "3px" }}
    >
      <div className="w3-center w3-text-white">
        <small>
          <b>
            {homeTeam} vs {awayTeam}
          </b>
        </small>
        <div className="w3-right">
          <button className="w3-button" value={gameId} onClick={onRemoveBet}>
            &times;
          </button>
        </div>
      </div>
      <div
        className="w3-text-white"
        style={{ display: "flex", justifyContents: "space-between" }}
      >
        <div>
          <b>{selectValue}</b>
          <br />
          <small>{selectCategory}</small>
        </div>
        <div className="w3-right">
          <h4>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {gameOdd}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GameBetDetails;
