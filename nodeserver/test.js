let teams = [
  "Manchester United",
  "New Castle",
  "Everton",
  "Chelsea",
  "Real Madrid",
  "Fenebahrce",
  "Grabba Bunich",
  "Liverpool",
  "Manchester City",
  "Tottenham Hotspur",
  "Gor Mahia",
  "Felabs Fc",
];

function createDraw() {
  for (let i = teams.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = teams[i];
    teams[i] = teams[j];
    teams[j] = k;
  }

  let obj = [];
  const startTime = new Date().getTime();

  for (let i = 0; i < teams.length; i += 2) {
    obj.push({
      eventId: i + 1,
      homeTeam: teams[i],
      awayTeam: teams[i + 1],
      homeGoals: 0,
      awayGoals: 0,
      dateTime: 123456,
      matchFinished: 0,
    });
  }

  obj.forEach(
    (
      { homeGoals, awayGoals, matchFinished, eventId, homeTeam, awayTeam },
      index,
      array
    ) => {
      if (matchFinished == 0) {
        const intervalId = setInterval(() => {
          const simulatedDuration = (new Date().getTime() - startTime) / 1000;
          let teamToScore = Math.floor(Math.random() * 100) + 1;
          teamToScore > 0 && teamToScore < 30
            ? (homeGoals += 1)
            : teamToScore > 30 && teamToScore < 60
            ? (awayGoals += 1)
            : "";
          array[index].homeGoals = homeGoals;
          array[index].awayGoals = awayGoals;
          console.log(
            homeTeam + " " + homeGoals + " - " + awayGoals + " " + awayTeam
          );
          console.log(simulatedDuration);
          if (simulatedDuration >= 120) {
            array[index].matchFinished = 1;
            homeGoals > awayGoals
              ? `${homeTeam} won`
              : awayGoals > homeGoals
              ? `${awayTeam} won`
              : "draw";
            clearInterval(intervalId);
          }
        }, Math.floor(Math.random() * 60000) + 10000);
      }
    }
  );
}

// setInterval(createDraw, 130000);
setTimeout(() => {
  createDraw();
  setInterval(createDraw, 170000);
}, 10000);
