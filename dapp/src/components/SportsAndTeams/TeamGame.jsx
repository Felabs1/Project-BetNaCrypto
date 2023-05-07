import React from "react";

const TeamGame = ({
  buttonClasses,
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
  oneHomeWinOddClick,
  onAwayWinOddClick,
  onDrawOddClick,
  onOver25OddClick,
  onUnder25OddClick,
  onIdontKnowOddClick,
  onGGOddClick,
  onNgOddClick,
}) => {
  return (
    <div
      className="w3-container w3-text-white w3-padding"
      style={{ backgroundColor: "#1b1b1b" }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flex: 5, display: "flex", alignItems: "center" }}>
          <div className="w3-padding">
            <span className="w3-large">{time}</span>
            <br />
            <span>
              {/* 7<sup>th</sup> April */}
              {date}
            </span>
          </div>
          <div>
            <h6>{homeTeam}</h6>
            <h6>{awayTeam}</h6>
          </div>
        </div>
        <div
          className="w3-small"
          style={{ flex: 3, display: "flex", alignSelf: "center" }}
        >
          <button
            onClick={oneHomeWinOddClick}
            value={JSON.stringify({
              homeTeam,
              awayTeam,
              gameOdd: homeWinOdd,
              selectValue: "1",
              selectCategory: "1X2",
              gameId,
              teamNames: homeTeam + " - " + awayTeam,
            })}
            className={buttonClasses}
          >
            {homeWinOdd}
          </button>
          &nbsp;
          <button
            value={JSON.stringify({
              homeTeam,
              awayTeam,
              gameOdd: drawOdd,
              selectValue: "X",
              selectCategory: "1X2",

              gameId,
              teamNames: homeTeam + " - " + awayTeam,
            })}
            onClick={onDrawOddClick}
            className={buttonClasses}
          >
            {drawOdd}
          </button>
          &nbsp;
          <button
            onClick={onAwayWinOddClick}
            value={JSON.stringify({
              homeTeam,
              awayTeam,
              gameOdd: awayWinOdd,
              selectValue: "2",
              selectCategory: "1X2",

              gameId,
              teamNames: homeTeam + " - " + awayTeam,
            })}
            className={buttonClasses}
          >
            {awayWinOdd}
          </button>
          &nbsp;
        </div>
        <div
          className="w3-small"
          style={{ flex: 3, display: "flex", alignSelf: "center" }}
        >
          <button
            value={JSON.stringify({
              homeTeam,
              awayTeam,
              gameOdd: GGOdd,
              selectValue: "GG",
              selectCategory: "GG/NG",

              gameId,
              teamNames: homeTeam + " - " + awayTeam,
            })}
            onClick={onGGOddClick}
            className={buttonClasses}
          >
            {GGOdd}
          </button>
          &nbsp;
          <button
            value={JSON.stringify({
              homeTeam,
              awayTeam,
              gameOdd: NGOdd,
              selectValue: "NG",
              selectCategory: "GG/NG",

              gameId,
              teamNames: homeTeam + " - " + awayTeam,
            })}
            onClick={onNgOddClick}
            className={buttonClasses}
          >
            {NGOdd}
          </button>
          &nbsp;
        </div>
        <div
          className="w3-small"
          style={{ flex: 3, display: "flex", alignSelf: "center" }}
        >
          <button
            value={JSON.stringify({
              homeTeam,
              awayTeam,
              gameOdd: over25Odd,
              selectValue: "OV25",
              selectCategory: "OV/UN",

              gameId,
              teamNames: homeTeam + " - " + awayTeam,
            })}
            onClick={onOver25OddClick}
            className={buttonClasses}
          >
            {over25Odd}
          </button>
          &nbsp;
          <button
            onClick={onUnder25OddClick}
            value={JSON.stringify({
              homeTeam,
              awayTeam,
              gameOdd: under25Odd,
              selectValue: "UN25",
              selectCategory: "OV/UN",

              gameId,
              teamNames: homeTeam + " - " + awayTeam,
            })}
            className={buttonClasses}
          >
            {under25Odd}
          </button>
          &nbsp;
          <button className="w3-button w3-padding-small w3-border w3-round">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamGame;
