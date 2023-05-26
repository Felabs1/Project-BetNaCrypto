// Get a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Loop through each match in the football array and simulate the match
for (let i = 0; i < football.length; i++) {
  // Check if the match has already finished
  if (football[i].matchFinished === 1) {
    console.log(
      `${football[i].homeTeam} ${football[i].homeGoals} - ${football[i].awayGoals} ${football[i].awayTeam} (Match already finished)`
    );
  } else {
    // Simulate the match
    let homeGoals = 0;
    let awayGoals = 0;
    let timeElapsed = 0;
    const matchDuration = 120; // Match duration in seconds

    // Display the initial score
    console.log(
      `${football[i].homeTeam} ${homeGoals} - ${awayGoals} ${football[i].awayTeam}`
    );

    // Simulate the match and increment the goals scored in real time
    const intervalId = setInterval(() => {
      homeGoals += getRandomNumber(0, 2);
      awayGoals += getRandomNumber(0, 2);
      timeElapsed += 3; // Update time elapsed

      // Update the match object with the simulation results
      football[i].homeGoals = homeGoals;
      football[i].awayGoals = awayGoals;

      // Print the updated score
      console.log(
        `${football[i].homeTeam} ${homeGoals} - ${awayGoals} ${football[i].awayTeam}`
      );

      // Check if the match has finished
      if (timeElapsed >= matchDuration || homeGoals >= 3 || awayGoals >= 3) {
        clearInterval(intervalId);
        football[i].matchFinished = 1;

        // Print the final score and match result
        console.log(
          `${football[i].homeTeam} ${homeGoals} - ${awayGoals} ${football[i].awayTeam}`
        );
        if (homeGoals > awayGoals) {
          console.log(`${football[i].homeTeam} win!`);
        } else if (homeGoals < awayGoals) {
          console.log(`${football[i].awayTeam} win!`);
        } else {
          console.log(`Draw!`);
        }
      }
    }, 3000); // Update the score every 3 seconds
  }
}
