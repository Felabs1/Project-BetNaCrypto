import { useState, useEffect } from "react";
import TopNav from "../components/Navigations/TopNav";
import SecondNav from "../components/Navigations/SecondNav";
import SideNav from "../components/Navigations/SideNav";
import Main from "../components/Main/Main";
import Wallpaper from "../components/Main/Wallpaper";
import BarAfterWallpaper from "../components/Main/BarAfterWallpaper";
import PanelAfterBarAfterWallpaper from "../components/Main/PanelAfterBarAfterWallpaper";
import SportsNav from "../components/SportsAndTeams/SportsNav";
import TeamGame from "../components/SportsAndTeams/TeamGame";
import Betslip from "../components/SportsAndTeams/Betslip";
import { FaCog } from "react-icons/fa";
import {
  soccerData,
  myNiceBets,
  getTotalOdds,
  basketballData,
} from "../utils/prototypeData";
import { data } from "../utils/apidata";
import BasketBallComponent from "../components/SportsAndTeams/BasketBallComponent";

function DefaultPage() {
  const [myBets, setMyBets] = useState({});
  const [dataFromApi, setDataFromApi] = useState([]);
  const [basketballData, setBasketBallData] = useState([]);
  const [buttonClasses, setButtonClasses] = useState(
    "w3-button w3-dark-grey w3-padding-small w3-round"
  );

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/basketball/?met=Fixtures&APIkey=a40e5c3ae99a5914d3cef7bb90fd1c595975285c15d2ebf4ed0a41d1cf71184e&from=2023-04-15&to=2023-04-16",
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((text) => {
        console.log(text);
        setBasketBallData([...text.result]);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=a40e5c3ae99a5914d3cef7bb90fd1c595975285c15d2ebf4ed0a41d1cf71184e&from=2023-04-12&to=2023-04-15",
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((text) => setDataFromApi([...text.result]));
  }, []);

  const handleBetSelect = (e) => {
    // console.log(JSON.parse(e.target.value));
    const data = JSON.parse(e.target.value);
    e.target.classList.add("w3-yellow");
    console.log(e.target.className);
    setMyBets((previousState) => {
      return { ...previousState, ...data };
    });
  };

  const handleRemoveBet = (e) => {
    delete myNiceBets[e.target.value];
    setMyBets((previousState) => {
      return { previousState, ...myNiceBets };
    });
  };

  return (
    <>
      <TopNav />
      <br />
      <br />
      <SecondNav />
      <SideNav />
      <Main>
        <div className="w3-row-padding">
          <div className="w3-col l9">
            <Wallpaper />
            <BarAfterWallpaper />
            <PanelAfterBarAfterWallpaper />
            <SportsNav
              navName="Soccer"
              midLabel1="GG"
              midLabel2="NG"
              endLabel1="OV2.5"
              endLabel2="UN2.5"
            />
            {navigator.onLine &&
              soccerData.map((niceTeam) => {
                return (
                  <TeamGame
                    buttonClasses={buttonClasses}
                    key={niceTeam.gameId}
                    time={niceTeam.time}
                    date={niceTeam.date}
                    homeTeam={niceTeam.homeTeam}
                    awayTeam={niceTeam.awayTeam}
                    gameId={niceTeam.gameId}
                    homeWinOdd={niceTeam.homeWinOdd}
                    awayWinOdd={niceTeam.awayWinOdd}
                    drawOdd={niceTeam.drawOdd}
                    over25Odd={niceTeam.over25Odd}
                    under25Odd={niceTeam.under25Odd}
                    GGOdd={niceTeam.GGOdd}
                    NGOdd={niceTeam.NGOdd}
                    onAwayWinOddClick={handleBetSelect}
                    oneHomeWinOddClick={handleBetSelect}
                    onDrawOddClick={handleBetSelect}
                    onUnder25OddClick={handleBetSelect}
                    onOver25OddClick={handleBetSelect}
                    onNgOddClick={handleBetSelect}
                    onGGOddClick={handleBetSelect}
                    onIdontKnowOddClick={handleBetSelect}
                  />
                );
              })}

            {!navigator.onLine &&
              dataFromApi.slice(0, 5).map((niceTeam) => {
                return (
                  <TeamGame
                    buttonClasses={buttonClasses}
                    key={niceTeam.event_key}
                    time={niceTeam.event_time}
                    date={niceTeam.event_date}
                    homeTeam={niceTeam.event_home_team}
                    awayTeam={niceTeam.event_away_team}
                    gameId={niceTeam.event_key}
                    homeWinOdd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    awayWinOdd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    drawOdd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    over25Odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    under25Odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    idontKnowOdd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    GGOdd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    NGOdd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    onAwayWinOddClick={handleBetSelect}
                    oneHomeWinOddClick={handleBetSelect}
                    onDrawOddClick={handleBetSelect}
                    onUnder25OddClick={handleBetSelect}
                    onOver25OddClick={handleBetSelect}
                    onNgOddClick={handleBetSelect}
                    onGGOddClick={handleBetSelect}
                    onIdontKnowOddClick={handleBetSelect}
                  />
                );
              })}
            <SportsNav
              navName="BasketBall"
              midLabel1="O210.5"
              midLabel2="U210.5"
              endLabel1="1/2"
              endLabel2="1/X"
            />
            {basketballData.slice(0, 5).map((niceTeam) => {
              return (
                <BasketBallComponent
                  buttonClasses={buttonClasses}
                  key={niceTeam.gameId || niceTeam.event_key}
                  time={niceTeam.time || niceTeam.event_time}
                  date={niceTeam.date || niceTeam.event_date}
                  homeTeam={niceTeam.homeTeam || niceTeam.event_home_team}
                  awayTeam={niceTeam.awayTeam || niceTeam.event_away_team}
                  gameId={niceTeam.gameId || niceTeam.event_key}
                  homeWinOdd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                  awayWinOdd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                  drawOdd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                  over25Odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                  under25Odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                  idontKnowOdd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                  GGOdd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                  NGOdd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                  onAwayWinOddClick={handleBetSelect}
                  oneHomeWinOddClick={handleBetSelect}
                  onDrawOddClick={handleBetSelect}
                  onUnder25OddClick={handleBetSelect}
                  onOver25OddClick={handleBetSelect}
                  onNgOddClick={handleBetSelect}
                  onGGOddClick={handleBetSelect}
                  onIdontKnowOddClick={handleBetSelect}
                />
              );
            })}
          </div>

          <div className="w3-col l3">
            <br />
            <Betslip onRemoveBet={handleRemoveBet} myBets={myBets} />
          </div>
        </div>
      </Main>
    </>
  );
}

export default DefaultPage;
