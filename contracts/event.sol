pragma solidity ^0.8.0;

// Define a contract for the ticketing system
contract TicketingSystem {
    
    // Define a struct to hold ticket information
    struct Ticket {
        address payable owner;
        uint256 price;
        bool isAvailable;
    }
    
    // Define a mapping of ticket IDs to ticket information
    mapping (uint256 => Ticket) public tickets;
    
    // Define an event to track ticket purchases
    event TicketPurchased(uint256 ticketId, address buyer);
    
    // Define a function to create new tickets
    function createTicket(uint256 _ticketId, uint256 _price) public {
        tickets[_ticketId] = Ticket(payable(msg.sender), _price, true);
    }
    
    // Define a function to purchase a ticket
    function purchaseTicket(uint256 _ticketId) public payable {
        Ticket storage ticket = tickets[_ticketId];
        require(msg.value == ticket.price, "Incorrect payment amount");
        require(ticket.isAvailable, "Ticket is not available");
        ticket.owner.transfer(msg.value);
        ticket.isAvailable = false;
        emit TicketPurchased(_ticketId, msg.sender);
    }
    
    // Define a function to check ticket ownership
    function checkTicketOwner(uint256 _ticketId) public view returns (bool) {
        Ticket storage ticket = tickets[_ticketId];
        return (msg.sender == ticket.owner);
    }
    
    // Define a function to transfer ticket ownership
    function transferTicket(uint256 _ticketId, address _newOwner) public {
        Ticket storage ticket = tickets[_ticketId];
        require(msg.sender == ticket.owner, "Only the owner can transfer the ticket");
        require(ticket.isAvailable, "Ticket is not available");
        ticket.owner = payable(_newOwner);
    }
}
