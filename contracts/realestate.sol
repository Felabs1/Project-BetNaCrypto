pragma solidity ^0.8.0;

contract RealEstate {
    
    struct Property {
        string location;
        uint256 price;
        address owner;
        bool isForSale;
    }
    
    mapping (uint256 => Property) public properties;
    uint256 public propertyCounter;
    
    event NewProperty(uint256 propertyId, string location, uint256 price, address owner);
    event TransferProperty(uint256 propertyId, address previousOwner, address newOwner);
    
    function addProperty(string memory _location, uint256 _price) public {
        propertyCounter++;
        properties[propertyCounter] = Property(_location, _price, msg.sender, true);
        emit NewProperty(propertyCounter, _location, _price, msg.sender);
    }
    
    function buyProperty(uint256 _propertyId) public payable {
        Property memory property = properties[_propertyId];
        require(property.isForSale == true, "This property is not for sale.");
        require(msg.value == property.price, "You need to pay the full price of the property.");
        address payable previousOwner = payable(property.owner);
        property.owner = msg.sender;
        property.isForSale = false;
        properties[_propertyId] = property;
        previousOwner.transfer(msg.value);
        emit TransferProperty(_propertyId, previousOwner, msg.sender);
    }
    
}
