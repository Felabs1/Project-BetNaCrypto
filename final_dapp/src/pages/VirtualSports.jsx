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
import { FaCog, FaFutbol, FaSpinner, FaUser } from "react-icons/fa";
// import { navDataAfterWallpaper } from "../utils/prototypeData";
import {
  soccerData,
  myNiceBets,
  getTotalOdds,
  basketballData,
} from "../utils/prototypeData";
import { data } from "../utils/apidata";
import BasketBallComponent from "../components/SportsAndTeams/BasketBallComponent";
import AlertModal from "../components/Main/AlertModal";

function VirtualSports() {
  const [myBets, setMyBets] = useState({});
  const [dataFromApi, setDataFromApi] = useState([]);
  const [basketballData, setBasketBallData] = useState([]);
  const [buttonClasses, setButtonClasses] = useState(
    "w3-button w3-dark-grey w3-padding-small w3-round"
  );

  useEffect(() => {
    const eventSource = new EventSource("https://bnkfelabs11.onrender.com/");
    eventSource.addEventListener("message", (event) => {
      const newData = JSON.parse(event.data);
      setDataFromApi(newData);
      // console.log(newData);
    });

    return () => {
      eventSource.close();
    };
  }, []);

  const handleBetSelect = (e) => {
    // console.log(e.target.value);
    const d = e.target.value;
    const data = d !== undefined ? JSON.parse(d) : alert("error in selection");
    if (data.gameDuration > 0) {
      alert("the game has allready started");
      return;
    }
    e.target.classList.add("w3-yellow");
    // console.log(e.target.className);
    setMyBets((previousState) => {
      return { ...previousState, ...data };
    });
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    const text = e.target.value.toLowerCase();
    const filteredData = dataFromApi.filter(({ homeTeam, awayTeam }) => {
      return (
        homeTeam.toLowerCase().includes(text) ||
        awayTeam.toLowerCase().includes(text)
      );
    });
    setDataFromApi(filteredData);
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
      <SecondNav onSearch={handleSearch} />
      <SideNav />
      <Main>
        <div className="w3-row-padding">
          <div className="w3-col l9">
            {/* <Wallpaper /> */}
            <BarAfterWallpaper />
            <PanelAfterBarAfterWallpaper />
            <SportsNav
              navName="Soccer"
              midLabel1="GG"
              midLabel2="NG"
              endLabel1="OV2.5"
              endLabel2="UN2.5"
            />

            {dataFromApi &&
              dataFromApi.map((niceTeam) => {
                return (
                  <TeamGame
                    buttonClasses={buttonClasses}
                    key={niceTeam.eventId}
                    time={niceTeam.dateTime}
                    date={niceTeam.duration.toFixed(0) + "`"}
                    homeTeam={niceTeam.homeTeam}
                    awayTeam={niceTeam.awayTeam}
                    gameId={niceTeam.eventId}
                    homeGoals={niceTeam.homeGoals}
                    gameDuration={niceTeam.duration}
                    awayGoals={niceTeam.awayGoals}
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
                    _1_or_2_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _1_or_x_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _x_or_2_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _over_05_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _over_15_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _over_25_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _over_35_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _over_45_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _over_55_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _under_05_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _under_15_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _under_25_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _under_35_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _under_45_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _under_55_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _0_0_odd={`${(Math.random() * 5 + 5).toFixed(2)}`}
                    _0_1_odd={`${(Math.random() * 5 + 5).toFixed(2)}`}
                    _0_2_odd={`${(Math.random() * 5 + 5).toFixed(2)}`}
                    _0_3_odd={`${(Math.random() * 5 + 5).toFixed(2)}`}
                    _0_4_odd={`${(Math.random() * 5 + 5).toFixed(2)}`}
                    _1_0_odd={`${(Math.random() * 5 + 5).toFixed(2)}`}
                    _1_1_odd={`${(Math.random() * 5 + 5).toFixed(2)}`}
                    _1_2_odd={`${(Math.random() * 5 + 5).toFixed(2)}`}
                    _1_3_odd={`${(Math.random() * 5 + 5).toFixed(2)}`}
                    _1_4_odd={`${(Math.random() * 5 + 5).toFixed(2)}`}
                    _2_0_odd={`${(Math.random() * 5 + 5).toFixed(2)}`}
                    _2_1_odd={`${(Math.random() * 5 + 5).toFixed(2)}`}
                    _2_2_odd={`${(Math.random() * 5 + 5).toFixed(2)}`}
                    _2_3_odd={`${(Math.random() * 2 + 5).toFixed(2)}`}
                    _2_4_odd={`${(Math.random() * 2 + 5).toFixed(2)}`}
                    _3_0_odd={`${(Math.random() * 2 + 5).toFixed(2)}`}
                    _3_1_odd={`${(Math.random() * 2 + 5).toFixed(2)}`}
                    _3_2_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _3_3_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _3_4_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _4_0_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _4_1_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _4_2_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _4_3_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _4_4_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                    _other_odd={`${(Math.random() * 2 + 1).toFixed(2)}`}
                  />
                );
              })}
          </div>

          <div className="w3-col l3 w3-hide-small">
            <br />
            <Betslip onRemoveBet={handleRemoveBet} myBets={myBets} />
          </div>
        </div>
      </Main>
    </>
  );
}

export default VirtualSports;
