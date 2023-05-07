// import "truffle/Assert.sol";
// import "../contracts/Opeations.sol";

const Operations = artifacts.require("Operations");
console.clear();
contract("Operations", (accounts) => {
  let a;

  beforeEach(async () => {
    a = await Operations.new();
  });

  it("should display wordcount", async () => {
    const tr1 = await a.spinAndWinCount();
    console.log(tr1);
  });

  it("should be able to take in bet", async () => {
    await a.stakeSpinAndWin("won", "2.0", "1000000000000", "1000000000000", {
      from: accounts[0],
      value: "1000000000000",
    });
    await a.stakeSpinAndWin("lost", "0.0", "1000000000000", "0", {
      from: accounts[0],
      value: "1000000000000",
    });
    await a.stakeSpinAndWin("lost", "0.0", "1000000000000", "0", {
      from: accounts[1],
      value: "1000000000000",
    });

    const tr2 = await a.withdrawArraySpinFunds("1", { from: accounts[0] });
    const tr3 = await a.withdrawArraySpinFunds("2", { from: accounts[0] });
    // const tr5 = await a.spins(accounts[0], 1);
    const tr6 = await a.getArraySpins(accounts[0]);
    assert.equal(tr6.length, 2);
  });

  it("should be able to take in multiple bets and store them", async () => {
    const bet = await a.placeNormalBet(
      [
        {
          matchId: 90,
          teamNames: "Man U - Ars",
          category: "1 X 2",
          pick: "x",
          outcome: "x",
          won: false,
        },
        {
          matchId: 91,
          teamNames: "Che - Liv",
          category: "1 X 2",
          pick: "x",
          outcome: "x",
          won: false,
        },
      ],
      100000,
      "2.0",
      200000,
      { from: accounts[0] }
    );
    const view = await a.viewNormalBets(accounts[0], 1);
    const viewTrackingBets = await a.viewTrackedBets(accounts[0]);
    assert.equal(view.length, 2);
    assert.equal(viewTrackingBets.length, 1);
  });

  it("should register event games and store them", async () => {
    const eventGames = [
      {
        eventId: "1",
        homeTeam: "Man U",
        awayTeam: "Chelsea",
        homeGoals: 2,
        awayGoals: 1,
        dateTime: 123456,
        matchFinished: 0,
      },
      {
        eventId: "2",
        homeTeam: "Man U",
        awayTeam: "Chelsea",
        homeGoals: 0,
        awayGoals: 1,
        dateTime: 123456,
        matchFinished: 0,
      },
      {
        eventId: "3",
        homeTeam: "Man U",
        awayTeam: "Chelsea",
        homeGoals: 0,
        awayGoals: 1,
        dateTime: 123456,
        matchFinished: 0,
      },
      {
        eventId: "4",
        homeTeam: "Man U",
        awayTeam: "Chelsea",
        homeGoals: 0,
        awayGoals: 1,
        dateTime: 123456,
        matchFinished: 0,
      },
    ];

    for ({
      eventId,
      homeTeam,
      awayTeam,
      homeGoals,
      awayGoals,
      dateTime,
      matchFinished,
    } of eventGames) {
      await a.registerEventGame(
        eventId,
        homeTeam,
        awayTeam,
        homeGoals,
        awayGoals,
        dateTime,
        matchFinished
      );
    }

    const see = await a.eventGames(4);
    assert.equal(see.homeGoals, 0);
  });

  it("should be able to verify bet if bet won or lost", async () => {
    const eventGames = [
      {
        eventId: "1",
        homeTeam: "Man U",
        awayTeam: "Chelsea",
        homeGoals: 0,
        awayGoals: 1,
        dateTime: 123456,
        matchFinished: 0,
      },
      {
        eventId: "2",
        homeTeam: "Man U",
        awayTeam: "Chelsea",
        homeGoals: 1,
        awayGoals: 1,
        dateTime: 123456,
        matchFinished: 0,
      },
      {
        eventId: "3",
        homeTeam: "Man U",
        awayTeam: "Chelsea",
        homeGoals: 1,
        awayGoals: 1,
        dateTime: 123456,
        matchFinished: 0,
      },
      {
        eventId: "4",
        homeTeam: "Man U",
        awayTeam: "Chelsea",
        homeGoals: 1,
        awayGoals: 1,
        dateTime: 123456,
        matchFinished: 0,
      },
    ];

    for ({
      eventId,
      homeTeam,
      awayTeam,
      homeGoals,
      awayGoals,
      dateTime,
      matchFinished,
    } of eventGames) {
      await a.registerEventGame(
        eventId,
        homeTeam,
        awayTeam,
        homeGoals,
        awayGoals,
        dateTime,
        matchFinished
      );
    }

    await a.placeNormalBet(
      [
        {
          matchId: 1,
          teamNames: "Man U - Ars",
          category: "1X2",
          pick: "X",
          outcome: "",
          won: false,
        },
        {
          matchId: 2,
          teamNames: "Che - Liv",
          category: "1X2",
          pick: "X",
          outcome: "",
          won: false,
        },
      ],
      100000,
      "2.0",
      200000,
      { from: accounts[0] }
    );
    let view = await a.viewNormalBets(accounts[0], 1);
    const verify = await a.verifyWon(accounts[0], 1);
    // view = await a.viewNormalBets(accounts[0], 1);
    view = await a.viewTrackedBets(accounts[0]);
    assert.equal(view[0].betWon, false);
  });
});