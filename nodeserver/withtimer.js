const simulateFootballMatches = (matches, duration) => {
  const updatedMatches = [];

  const intervalId = setInterval(() => {
    matches.forEach((match) => {
      if (match.matchFinished === 0) {
        match.homeGoals += Math.floor(Math.random() * 3);
        match.awayGoals += Math.floor(Math.random() * 3);

        console.log(
          `${match.homeTeam} ${match.homeGoals} - ${match.awayGoals} ${match.awayTeam}`
        );

        if (
          match.homeGoals !== 0 &&
          match.awayGoals !== 0 &&
          match.homeGoals === match.awayGoals
        ) {
          console.log(
            `Penalty shootout between ${match.homeTeam} and ${match.awayTeam}`
          );
          const penaltyHome = Math.floor(Math.random() * 3);
          const penaltyAway = Math.floor(Math.random() * 3);
          if (penaltyHome > penaltyAway) {
            console.log(`${match.homeTeam} win on penalties!`);
            match.homeGoals++;
          } else if (penaltyAway > penaltyHome) {
            console.log(`${match.awayTeam} win on penalties!`);
            match.awayGoals++;
          } else {
            console.log(`Penalty shootout ends in a draw!`);
          }

          match.matchFinished = 1;
          updatedMatches.push(match);
        } else if (
          match.homeGoals !== 0 &&
          match.awayGoals !== 0 &&
          match.homeGoals !== match.awayGoals
        ) {
          console.log(`${match.homeTeam} win!`);
          match.matchFinished = 1;
          updatedMatches.push(match);
        }
      } else {
        updatedMatches.push(match);
      }
    });

    const simulatedDuration = (new Date().getTime() - startTime) / 1000;
    if (simulatedDuration >= duration) {
      clearInterval(intervalId);
      console.log("Simulation has ended due to time limit.");
      console.log(updatedMatches);
    }
  }, 2000);
};

const footballMatches = [
  {
    eventId: "002",
    homeTeam: "ManChester City",
    awayTeam: "Internazionale",
    homeGoals: 0,
    awayGoals: 0,
    dateTime: 123456,
    matchFinished: 1,
  },
  {
    eventId: "3",
    homeTeam: "Sevilla",
    awayTeam: "Anderlecht",
    homeGoals: 0,
    awayGoals: 0,
    dateTime: 123456,
    matchFinished: 0,
  },
  {
    eventId: "4",
    homeTeam: "PSG",
    awayTeam: "Liverpool",
    homeGoals: 0,
    awayGoals: 0,
    dateTime: 123456,
    matchFinished: 0,
  },
  {
    eventId: "5",
    homeTeam: "Manchester United",
    awayTeam: "Arsenal",
    homeGoals: 0,
    awayGoals: 0,
    dateTime: 123456,
    matchFinished: 0,
  },
];

const startTime = new Date().getTime();
simulateFootballMatches(footballMatches, 120);
