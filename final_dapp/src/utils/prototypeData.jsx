import {
  FaBaseballBall,
  FaBasketballBall,
  FaBowlingBall,
  FaFutbol,
  FaSkiing,
  FaTableTennis,
  FaVolleyballBall,
} from "react-icons/fa";

export const topNavData = [
  "SPORTS",
  "CASINO",
  // "CYBER SPORTS",
  // "TV BETS",
  "VIRTUAL",
  // "PROMOTIONS",
];

export const updateSecondBarData = () => {
  const d = new Date();
  let secondBarData = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  secondBarData[d.getDay()] = "today";
  return secondBarData;
};

export const getSecondBarData = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  const today = currentDate.getDay();

  const secondBarData = daysOfWeek.map((day, index) => {
    if (index === today) {
      return {
        day: "today",
        date: currentDate.toISOString().split("T")[0],
      };
    } else {
      const date = new Date();
      date.setDate(currentDate.getDate() + ((index + 7 - today) % 7));

      return {
        day,
        date: date.toISOString().split("T")[0],
      };
    }
  });

  return secondBarData;
};

export const wallPaperData = [
  {
    headingDate: "April 8",
    headingTime: "18:00",
    homeTeam: "PSG",
    awayTeam: "Liverpool",
    homeOdd: 2.99,
    awayOdd: 3.22,
    drawOdd: 4.44,
  },
];

export const navDataAfterWallpaper = [
  { name: "FootBall", icon: <FaFutbol /> },
  // { name: "Basketball", icon: <FaBasketballBall /> },
  // { name: "Baseball", icon: <FaBaseballBall /> },

  // { name: "skiing", icon: <FaSkiing /> },
  // { name: "Volley Ball", icon: <FaVolleyballBall /> },
  // { name: "Table Tennis", icon: <FaTableTennis /> },
  // { name: "Bowling Ball", icon: <FaBowlingBall /> },
];

// const odds = Math.random()*6 +1.toFixed(2);

export const soccerData = [
  {
    time: "18:00",
    date: "7th April",
    homeTeam: "ManChester City",
    awayTeam: "Internazionale",
    gameId: "002",
    homeWinOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    awayWinOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    drawOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    over25Odd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    under25Odd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    idontKnowOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    NGOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    GGOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
  },
  {
    time: "18:00",
    date: "7th April",
    homeTeam: "Sevilla",
    awayTeam: "Anderlecht",
    gameId: "003",
    homeWinOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    awayWinOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    drawOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    over25Odd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    under25Odd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    idontKnowOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    NGOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    GGOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
  },
  {
    time: "18:00",
    date: "7th April",
    homeTeam: "PSG",
    awayTeam: "Liverpool",
    gameId: "004",
    homeWinOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    awayWinOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    drawOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    over25Odd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    under25Odd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    idontKnowOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    NGOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    GGOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
  },
  {
    time: "18:00",
    date: "7th April",
    homeTeam: "Manchester United",
    awayTeam: "Arsenal",
    gameId: "005",
    homeWinOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    awayWinOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    drawOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    over25Odd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    under25Odd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    idontKnowOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    NGOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    GGOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
  },
];

export const basketballData = [
  {
    time: "18:00",
    date: "7th April",
    homeTeam: "Brooklyn",
    awayTeam: "Philadelphia",
    gameId: "0056",
    homeWinOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    awayWinOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    drawOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    over210_5Odd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    under210_5Odd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    idontKnowOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    NGOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
    GGOdd: `${(Math.random() * 6 + 1).toFixed(2)}`,
  },
];

export var myNiceBets = {};

export function getTotalOdds() {
  const currentBets = Object.values(myNiceBets);
  let sum = 0;
  if (currentBets.length == 0) {
    return 0;
  }
  for (const num of currentBets) {
    sum = sum + Number(num.gameOdd);
  }
  return sum;
}

// FaBasketballBall,
// FaBaseballBall,
// FaSkiing,
// FaVolleyballBall,
// FaTableTennis,
// FaBowlingBall,
