export const abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
    payable: true,
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "betId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "customer",
        type: "address",
      },
    ],
    name: "PlaceBet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "betId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "customer",
        type: "address",
      },
    ],
    name: "wonSpin",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
    payable: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "activeBets",
    outputs: [
      {
        internalType: "address",
        name: "accountId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "betId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "activeBetsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "arraySpins",
    outputs: [
      {
        internalType: "uint256",
        name: "betId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "betResult",
        type: "string",
      },
      {
        internalType: "string",
        name: "gamingOdds",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "possiblePayout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawn",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "betCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "customers",
    outputs: [
      {
        internalType: "address",
        name: "customerAccountId",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "eventGames",
    outputs: [
      {
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "homeTeam",
        type: "string",
      },
      {
        internalType: "string",
        name: "awayTeam",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "homeGoals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "awayGoals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dateTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "matchFinished",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "justTrackBets",
    outputs: [
      {
        internalType: "uint256",
        name: "betId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "betFinished",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "betWon",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "totalOdds",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "possiblePayout",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrawn",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "nextVirtualGame",
    outputs: [
      {
        internalType: "uint256",
        name: "eventId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "homeTeam",
        type: "string",
      },
      {
        internalType: "string",
        name: "awayTeam",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "homeGoals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "awayGoals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dateTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "matchFinished",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "normalbets",
    outputs: [
      {
        internalType: "uint256",
        name: "matchId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "teamNames",
        type: "string",
      },
      {
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        internalType: "string",
        name: "pick",
        type: "string",
      },
      {
        internalType: "string",
        name: "outcome",
        type: "string",
      },
      {
        internalType: "bool",
        name: "won",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "spinAndWinCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    stateMutability: "payable",
    type: "receive",
    payable: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_homeTeam",
        type: "string",
      },
      {
        internalType: "string",
        name: "_awayTeam",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_homeGoals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_awayGoals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_dateTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_matchFinished",
        type: "uint256",
      },
    ],
    name: "registerEventGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "eventId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "homeTeam",
            type: "string",
          },
          {
            internalType: "string",
            name: "awayTeam",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "homeGoals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "awayGoals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dateTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "matchFinished",
            type: "uint256",
          },
        ],
        internalType: "struct Operations.EventGame[]",
        name: "_eventGames",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "registerNextVirtualGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "eventId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "homeTeam",
            type: "string",
          },
          {
            internalType: "string",
            name: "awayTeam",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "homeGoals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "awayGoals",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dateTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "matchFinished",
            type: "uint256",
          },
        ],
        internalType: "struct Operations.EventGame[]",
        name: "_eventGames",
        type: "tuple[]",
      },
    ],
    name: "registerMultipleEventGames",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "registerCustomer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "matchId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "teamNames",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "pick",
            type: "string",
          },
          {
            internalType: "string",
            name: "outcome",
            type: "string",
          },
          {
            internalType: "bool",
            name: "won",
            type: "bool",
          },
        ],
        internalType: "struct Operations.miniBets[]",
        name: "minibet",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "_deposit",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_totalOdds",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_possiblePayout",
        type: "uint256",
      },
    ],
    name: "placeNormalBet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_accountId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_betId",
        type: "uint256",
      },
    ],
    name: "viewNormalBets",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "matchId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "teamNames",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "pick",
            type: "string",
          },
          {
            internalType: "string",
            name: "outcome",
            type: "string",
          },
          {
            internalType: "bool",
            name: "won",
            type: "bool",
          },
        ],
        internalType: "struct Operations.miniBets[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_accountId",
        type: "address",
      },
    ],
    name: "viewTrackedBets",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "betId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "betFinished",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "betWon",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "deposit",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "totalOdds",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "possiblePayout",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withdrawn",
            type: "bool",
          },
        ],
        internalType: "struct Operations.NormalBet[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "a",
        type: "string",
      },
      {
        internalType: "string",
        name: "b",
        type: "string",
      },
    ],
    name: "compareBets",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_accountId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_betId",
        type: "uint256",
      },
    ],
    name: "verifyWon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_betResult",
        type: "string",
      },
      {
        internalType: "string",
        name: "_gamingOdds",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_deposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_winnings",
        type: "uint256",
      },
    ],
    name: "stakeSpinAndWin",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_accountId",
        type: "address",
      },
    ],
    name: "getArraySpins",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "betId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "betResult",
            type: "string",
          },
          {
            internalType: "string",
            name: "gamingOdds",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "possiblePayout",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deposit",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "withdrawn",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct Operations.SpinAndWin[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_betId",
        type: "uint256",
      },
    ],
    name: "withdrawArraySpinFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_betId",
        type: "uint256",
      },
    ],
    name: "withdrawWinnings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "sendEther",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];
