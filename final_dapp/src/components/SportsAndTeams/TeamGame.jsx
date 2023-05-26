import React, { useState } from "react";

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
  homeGoals,
  awayGoals,
  gameDuration,
  _1_or_2_odd,
  _1_or_x_odd,
  _x_or_2_odd,
  _over_05_odd,
  _over_15_odd,
  _over_25_odd,
  _over_35_odd,
  _over_45_odd,
  _over_55_odd,
  _under_05_odd,
  _under_15_odd,
  _under_25_odd,
  _under_35_odd,
  _under_45_odd,
  _under_55_odd,
  _0_0_odd,
  _0_1_odd,
  _0_2_odd,
  _0_3_odd,
  _0_4_odd,
  _1_0_odd,
  _1_1_odd,
  _1_2_odd,
  _1_3_odd,
  _1_4_odd,
  _2_0_odd,
  _2_1_odd,
  _2_2_odd,
  _2_3_odd,
  _2_4_odd,
  _3_0_odd,
  _3_1_odd,
  _3_2_odd,
  _3_3_odd,
  _3_4_odd,
  _4_0_odd,
  _4_1_odd,
  _4_2_odd,
  _4_3_odd,
  _4_4_odd,
  _other_odd,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleGameModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className="w3-container w3-text-white w3-padding"
      style={{ backgroundColor: "#1b1b1b" }}
    >
      {modalOpen && (
        <div
          id="id01"
          className="w3-modal"
          style={{
            display: "block",
          }}
        >
          <div
            className="w3-modal-content"
            style={{
              height: "100%",
              width: "100%",
              margin: "0px",
              padding: "0px",
              overflowY: "auto",
              backgroundColor: "#1b1b1b",
            }}
          >
            <div className="w3-container w3-text-white">
              <span
                onClick={handleCloseModal}
                class="w3-btn w3-display-topright"
              >
                &times;
              </span>
              <br />
              <br />
              <div className="w3-padding" style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>{homeTeam}</div>
                <div
                  className="w3-center"
                  style={{ flex: 1, alignSelf: "center" }}
                >
                  vs
                  <br />
                  16/06/22
                  <br />
                  #17535
                  <br />
                </div>
                <div style={{ flex: 1, textAlign: "right" }}>{awayTeam}</div>
              </div>
              <div className="w3-padding">
                {homeGoals}:{awayGoals} scoreboard
              </div>
              <br />
              <div className="w3-padding">
                <h5>1x2</h5>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <button
                      onClick={oneHomeWinOddClick}
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: homeWinOdd,
                        selectValue: "1",
                        selectCategory: "1X2",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">1</span>{" "}
                      <span className="w3-right">{homeWinOdd}</span>
                    </button>
                  </div>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: drawOdd,
                        selectValue: "X",
                        selectCategory: "1X2",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">x</span>{" "}
                      <span className="w3-right">{drawOdd}</span>
                    </button>
                  </div>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: awayWinOdd,
                        selectValue: "2",
                        selectCategory: "1X2",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">2</span>{" "}
                      <span className="w3-right">{awayWinOdd}</span>
                    </button>
                  </div>
                </div>
                <h5>Both teams to score (gg/ng)</h5>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: GGOdd,
                        selectValue: "GG",
                        selectCategory: "GG/NG",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Yes</span>{" "}
                      <span className="w3-right">{GGOdd}</span>
                    </button>
                  </div>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: NGOdd,
                        selectValue: "NG",
                        selectCategory: "GG/NG",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">No</span>{" "}
                      <span className="w3-right">{NGOdd}</span>
                    </button>
                  </div>
                </div>
                <h5>Total</h5>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: NGOdd,
                        selectValue: "OV25",
                        selectCategory: "OV/UN",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Over 2.5</span>{" "}
                      <span className="w3-right">{over25Odd}</span>
                    </button>
                  </div>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: NGOdd,
                        selectValue: "UN25",
                        selectCategory: "OV/UN",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Under 2.5</span>{" "}
                      <span className="w3-right">{under25Odd}</span>
                    </button>
                  </div>
                </div>

                {/* <h5>Double chance</h5>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _1_or_x_odd,
                        selectValue: "1/X",
                        selectCategory: "Double Chance",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">1/X</span>{" "}
                      <span className="w3-right">{_1_or_x_odd}</span>
                    </button>
                  </div>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _x_or_2_odd,
                        selectValue: "X/2",
                        selectCategory: "Double Chance",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">X/2</span>{" "}
                      <span className="w3-right">{_x_or_2_odd}</span>
                    </button>
                  </div>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _1_or_2_odd,
                        selectValue: "1/2",
                        selectCategory: "Double Chance",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">1/2</span>{" "}
                      <span className="w3-right">{_1_or_2_odd}</span>
                    </button>
                  </div>
                </div>
                <h5>Total</h5>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _over_05_odd,
                        selectValue: "Over 0.5",
                        selectCategory: "Total",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Over 0.5</span>{" "}
                      <span className="w3-right">{_over_05_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _over_15_odd,
                        selectValue: "Over 1.5",
                        selectCategory: "Total",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Over 1.5</span>{" "}
                      <span className="w3-right">{_over_15_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _over_25_odd,
                        selectValue: "Over 2.5",
                        selectCategory: "Total",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Over 2.5</span>{" "}
                      <span className="w3-right">{_over_25_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _over_35_odd,
                        selectValue: "Over 3.5",
                        selectCategory: "Total",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Over 3.5</span>{" "}
                      <span className="w3-right">{_over_35_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _over_45_odd,
                        selectValue: "Over 4.5",
                        selectCategory: "Total",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Over 4.5</span>{" "}
                      <span className="w3-right">{_over_45_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _over_55_odd,
                        selectValue: "Over 5.5",
                        selectCategory: "Total",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Over 5.5</span>{" "}
                      <span className="w3-right">{_over_55_odd}</span>
                    </button>
                  </div>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _under_05_odd,
                        selectValue: "Under 0.5",
                        selectCategory: "Total",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Under 0.5</span>{" "}
                      <span className="w3-right">{_under_05_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _under_15_odd,
                        selectValue: "Under 1.5",
                        selectCategory: "Total",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Under 1.5</span>{" "}
                      <span className="w3-right">{_under_15_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _under_25_odd,
                        selectValue: "Under 2.5",
                        selectCategory: "Total",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">UNder 2.5</span>{" "}
                      <span className="w3-right">{_under_25_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _under_35_odd,
                        selectValue: "Under 3.5",
                        selectCategory: "Total",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Under 3.5</span>{" "}
                      <span className="w3-right">{_under_35_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _under_45_odd,
                        selectValue: "Under 4.5",
                        selectCategory: "Total",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Under 4.5</span>{" "}
                      <span className="w3-right">{_under_45_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _under_55_odd,
                        selectValue: "Under 5.5",
                        selectCategory: "Total",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Under 5.5</span>{" "}
                      <span className="w3-right">{_under_55_odd}</span>
                    </button>
                  </div>
                </div> */}
                {/* <h5>Correct Score</h5>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _0_0_odd,
                        selectValue: "0:0",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">0:0</span>{" "}
                      <span className="w3-right">{_0_0_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _0_3_odd,
                        selectValue: "0:3",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">0:3</span>{" "}
                      <span className="w3-right">{_0_3_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _1_1_odd,
                        selectValue: "1:1",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">1:1</span>{" "}
                      <span className="w3-right">{_1_1_odd}</span>
                    </button>{" "}
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _1_4_odd,
                        selectValue: "1:4",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">1:4</span>{" "}
                      <span className="w3-right">{_1_4_odd}</span>
                    </button>{" "}
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _2_2_odd,
                        selectValue: "2:2",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">2:2</span>{" "}
                      <span className="w3-right">{_2_2_odd}</span>
                    </button>{" "}
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _3_0_odd,
                        selectValue: "3:0",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">3:0</span>{" "}
                      <span className="w3-right">{_3_0_odd}</span>
                    </button>{" "}
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _3_3_odd,
                        selectValue: "3:3",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">3:3</span>{" "}
                      <span className="w3-right">{_3_3_odd}</span>
                    </button>{" "}
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _4_1_odd,
                        selectValue: "4:1",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">4:1</span>{" "}
                      <span className="w3-right">{_4_1_odd}</span>
                    </button>{" "}
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _4_4_odd,
                        selectValue: "4:4",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">4:4</span>{" "}
                      <span className="w3-right">{_4_4_odd}</span>
                    </button>
                  </div>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _0_1_odd,
                        selectValue: "0:1",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">0:1</span>{" "}
                      <span className="w3-right">{_0_1_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _0_4_odd,
                        selectValue: "0:4",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">0:4</span>{" "}
                      <span className="w3-right">{_0_4_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _1_2_odd,
                        selectValue: "1:2",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">1:2</span>{" "}
                      <span className="w3-right">{_1_2_odd}</span>
                    </button>
                    <button
                      onClick={oneHomeWinOddClick}
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _2_0_odd,
                        selectValue: "2:0",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">2:0</span>{" "}
                      <span className="w3-right">{_2_0_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _2_3_odd,
                        selectValue: "2:3",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">2:3</span>{" "}
                      <span className="w3-right">{_2_3_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _3_1_odd,
                        selectValue: "3:1",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">3:1</span>{" "}
                      <span className="w3-right">{_3_1_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _3_4_odd,
                        selectValue: "3:4",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">3:4</span>{" "}
                      <span className="w3-right">{_3_4_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _4_2_odd,
                        selectValue: "4:2",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">4:2</span>{" "}
                      <span className="w3-right">{_4_2_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _other_odd,
                        selectValue: "Other",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">Other</span>{" "}
                      <span className="w3-right">{_other_odd}</span>
                    </button>
                  </div>
                  <div style={{ flex: 1 }}>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _0_2_odd,
                        selectValue: "0:2",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">0:2</span>{" "}
                      <span className="w3-right">{_0_2_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _1_0_odd,
                        selectValue: "1:0",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">1:0</span>{" "}
                      <span className="w3-right">{_1_0_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _1_3_odd,
                        selectValue: "1:3",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">1:3</span>{" "}
                      <span className="w3-right">{_1_3_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _2_1_odd,
                        selectValue: "2:1",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">2:1</span>{" "}
                      <span className="w3-right">{_2_1_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _2_4_odd,
                        selectValue: "2:4",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">2:4</span>{" "}
                      <span className="w3-right">{_2_4_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _3_2_odd,
                        selectValue: "3:2",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">3:2</span>{" "}
                      <span className="w3-right">{_3_2_odd}</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _4_0_odd,
                        selectValue: "4:0",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">4:0</span>{" "}
                      <span className="w3-right">2.18</span>
                    </button>
                    <button
                      value={JSON.stringify({
                        homeTeam,
                        awayTeam,
                        gameOdd: _4_3_odd,
                        selectValue: "4:3",
                        selectCategory: "Correct Score",
                        gameDuration,
                        gameId,
                        teamNames: homeTeam + " - " + awayTeam,
                      })}
                      onClick={oneHomeWinOddClick}
                      className={buttonClasses + " w3-block"}
                    >
                      <span className="w3-left">4:3</span>{" "}
                      <span className="w3-right">{_4_3_odd}</span>
                    </button>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w3-hide-medium w3-hide-large" style={{ display: "flex" }}>
        <small style={{ flex: 1 }}>
          {time} {date}
        </small>
        <small style={{ flex: 1, textAlign: "right" }}>
          <button
            className="w3-btn w3-small w3-border w3-border-yellow w3-round-xxlarge"
            onClick={handleGameModal}
          >
            +
          </button>
        </small>
      </div>

      <div style={{ display: "flex" }}>
        <div style={{ flex: 5, display: "flex", alignItems: "center" }}>
          <div className="w3-padding w3-hide-small">
            <span className="w3-large">{time}</span>
            <br />
            <span>
              {/* 7<sup>th</sup> April */}
              {date}
            </span>
          </div>
          <div>
            <span className="w3-large">{homeTeam}</span>&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span className="w3-small w3-text-green">{homeGoals}</span>
            <br />
            <span className="w3-large">{awayTeam}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="w3-small w3-text-green">{awayGoals}</span>
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
              gameDuration,
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
              gameDuration,
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
              gameDuration,
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
          className="w3-small w3-hide-small"
          style={{ flex: 3, display: "flex", alignSelf: "center" }}
        >
          <button
            value={JSON.stringify({
              homeTeam,
              awayTeam,
              gameOdd: GGOdd,
              selectValue: "GG",
              selectCategory: "GG/NG",
              gameDuration,
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
              gameDuration,
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
          className="w3-small w3-hide-small"
          style={{ flex: 3, display: "flex", alignSelf: "center" }}
        >
          <button
            value={JSON.stringify({
              homeTeam,
              awayTeam,
              gameOdd: over25Odd,
              selectValue: "OV25",
              selectCategory: "OV/UN",
              gameDuration,
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
              gameDuration,
              gameId,
              teamNames: homeTeam + " - " + awayTeam,
            })}
            className={buttonClasses}
          >
            {under25Odd}
          </button>
          &nbsp;
          {/* <button
            className="w3-button w3-hide-small w3-padding-small w3-border w3-round"
            onClick={handleGameModal}
          >
            +
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default TeamGame;
