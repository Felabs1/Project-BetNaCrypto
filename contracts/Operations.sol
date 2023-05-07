// SPDX-License-Identifier: MIT

pragma solidity >=0.5.0 < 0.9.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Operations {

    using SafeMath for uint256;
    struct EventGame {
        uint eventId;
        string homeTeam;
        string awayTeam;
        uint homeGoals;
        uint awayGoals;
        uint dateTime;
        uint matchFinished;
    }

    struct miniBets {
        uint matchId;
        string teamNames;
        string category;
        string pick;
        string outcome;
        bool won;
    }

    struct NormalBet{
        uint betId;
        bool betFinished;
        bool betWon;
        uint deposit;
        string totalOdds;
        uint possiblePayout;
        uint timestamp;        
    }

    struct SpinAndWin{
        uint betId;
        string betResult;
        string gamingOdds;
        uint possiblePayout;
        uint deposit;
        bool withdrawn;
        uint timestamp;
    }
    
    struct Customer {
        address customerAccountId;
        string name;
        // SpinAndWin[] spins2;
    }

     constructor() public payable{
        
    }

    uint public spinAndWinCount;
    uint public betCount;

    mapping(address => Customer) public customers;
    mapping(address => SpinAndWin[]) public arraySpins;
    mapping(address => mapping(uint => miniBets[])) public normalbets;
    mapping(address => NormalBet[]) public justTrackBets;
    mapping(uint => EventGame) public eventGames;

    function registerEventGame(uint _eventId, string memory _homeTeam, string memory _awayTeam, uint _homeGoals, uint _awayGoals, uint _dateTime, uint _matchFinished) public{
        eventGames[_eventId] = (EventGame(_eventId, _homeTeam, _awayTeam, _homeGoals, _awayGoals, _dateTime, _matchFinished));
    }

    // mapping(address => NormalBet)

    function registerCustomer(string memory _name) public{
        address _customerAccountId = msg.sender;
        customers[_customerAccountId] = Customer(_customerAccountId, _name);        
    }

    function placeNormalBet(miniBets[] memory minibet, uint _deposit, string memory _totalOdds, uint _possiblePayout) public payable returns(string memory){
        betCount++;
string memory outcome = "pending";
        address accountId = msg.sender;
        // address payable contractAddress = payable(address(this));
        // (bool sent, bytes memory data) = contractAddress.call{value: _deposit}("");
        for(uint i = 0; i < minibet.length; i++){
            normalbets[accountId][betCount].push(miniBets(minibet[i].matchId,minibet[i].teamNames,minibet[i].category, minibet[i].pick, outcome , false));     
        }     
        justTrackBets[accountId].push(NormalBet(betCount, false, false, _deposit, _totalOdds, _possiblePayout, block.timestamp));
        return "bet successfully";


    }

    function viewNormalBets(address _accountId,uint _betId) public view returns(miniBets[] memory){
        return normalbets[_accountId][_betId];
    }

    function viewTrackedBets(address _accountId) public view returns(NormalBet[] memory){
        return justTrackBets[_accountId];
    }


    function compareBets(string memory a, string memory b) public pure returns (bool) {
            return keccak256(bytes(a)) == keccak256(bytes(b));
    }
    function verifyWon(address _accountId, uint _betId) public returns(uint) {
        uint l = normalbets[_accountId][_betId].length;
        uint counterLosses;
    // mapping(uint => EventGame) => public eventGames;

        for(uint i = 0; i < l; i++){
            uint gameId = eventGames[normalbets[_accountId][_betId][i].matchId].eventId;
            uint homeGoals = eventGames[normalbets[_accountId][_betId][i].matchId].homeGoals;
            uint awayGoals = eventGames[normalbets[_accountId][_betId][i].matchId].awayGoals;
            string memory FTresult;
            string memory category = normalbets[_accountId][_betId][i].category;
            

            if(compareBets(category, "1X2") == true ){
                if(homeGoals > awayGoals){
                FTresult = "1";
                }else if(awayGoals > homeGoals){
                    FTresult = "2";
                }else{
                    FTresult = "X";
                }
            }else if(compareBets(category, "GG/NG") == true){
                if(homeGoals > 0 && awayGoals > 0){
                    FTresult = "GG";
                }else if(homeGoals > 0 && awayGoals == 0){
                    FTresult = "NG";
                }else if(homeGoals == 0 && awayGoals > 0){
                    FTresult = "NG";
                }else if(homeGoals == 0 && awayGoals == 0){
                    FTresult = "NG";
                }
            }else{
                uint totalGoals = homeGoals + awayGoals;
                if(totalGoals >= 3 ){
                    FTresult = "OV25";
                }else{
                    FTresult = "UN25";
                }
            }

            normalbets[_accountId][_betId][i].outcome = FTresult;
            
            if(compareBets(normalbets[_accountId][_betId][i].outcome, normalbets[_accountId][_betId][i].pick) == true){
            normalbets[_accountId][_betId][i].won = true;
            }else{
                normalbets[_accountId][_betId][i].won = false;
                counterLosses++;
            }
            
            
            
        }

        // for(uint i = 0; i < l; i++){
        //     if(normalbets[_accountId][_betId][i].won == false){
        //         counterLosses++;
        //     }
        // }
            
            uint trackedBetsLength = viewTrackedBets(_accountId).length;
            for(uint i = 0; i < trackedBetsLength; i++){
                if(justTrackBets[_accountId][i].betId == _betId){
                  if(counterLosses  < 1){
            
                        justTrackBets[_accountId][i].betFinished = true;
                        justTrackBets[_accountId][i].betWon = true;
                    }else{
                        justTrackBets[_accountId][i].betFinished = true;
                        justTrackBets[_accountId][i].betWon = false;
                    }
                }
            }
            
            
            
        

        return counterLosses;
    }

    function claimWinnings(uint _betId){
        address payable accountId = payable(msg.sender);
    }
    

    // this function allows you to stake and stores your stake data regardless of a win or a lose
    function stakeSpinAndWin(string memory _betResult, string memory _gamingOdds, uint256 _deposit, uint _winnings) public payable returns(string memory){
         spinAndWinCount++;
        address payable contractAddress = payable(address(this));
        (bool sent, bytes memory data) = contractAddress.call{value: _deposit}("");
        require(sent, "failed to send ether");
        uint256 possible_payout = _winnings;
        arraySpins[msg.sender].push(SpinAndWin({betId: spinAndWinCount, betResult: _betResult, gamingOdds: _gamingOdds, possiblePayout: _winnings, deposit: _deposit, withdrawn: false, timestamp: block.timestamp}));
        if(_winnings > 0){
            return "bet won";
        }else{
            return "bet lost";
        }

        // emit NewSpin(msg.sender, _betResult, _gamingOdds, _deposit, _winnings);
    }

    // this function allows you to get your array spins according your account
    function getArraySpins(address _accountId)public view returns(SpinAndWin[] memory){
        return arraySpins[_accountId];
    }

    // this function allows you to witdraw your funds provided you have won
    function withdrawArraySpinFunds(uint _betId) external {
         address payable accountId = payable(msg.sender);
         SpinAndWin memory spin = arraySpins[accountId][_betId - 1];
         require(spin.withdrawn == false, "allready withdrew funds");
         accountId.transfer(spin.possiblePayout);
         arraySpins[msg.sender][_betId - 1].withdrawn = true;
    }



    
   

    

    function sendEther(address payable _recipient) external {
        _recipient.transfer(1 ether);
    }

    receive() external payable{}
    fallback() external payable{}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

