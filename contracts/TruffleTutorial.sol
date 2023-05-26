pragma solidity >=0.4.22 < 0.9.0;

contract TruffleTutorial {
    
    constructor() public{

    }



    function setNums() public view returns (uint){
        uint _l = 44;
        uint _w = 89;
        return add(_l, _w);
    }

    function add(uint _l, uint _w) internal pure returns (uint){
        return _l + _w;
    }

    
}