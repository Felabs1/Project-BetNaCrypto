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
import { soccerData, myNiceBets, getTotalOdds } from "../utils/prototypeData";
import BasketBallComponent from "../components/SportsAndTeams/BasketBallComponent";
import { data } from "../utils/apidata";

function BasketBall() {
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

  const handleBetSelect = (e) => {
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
              navName="BasketBall"
              midLabel1="O210.5"
              midLabel2="U210.5"
              endLabel1="1/2"
              endLabel2="1/X"
            />
            {basketballData.map((niceTeam) => {
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

export default BasketBall;
