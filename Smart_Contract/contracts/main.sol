//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract PlaneTicket {
    address payable public ticketHolder;


    struct TicketDetail {
        address fromAdd;
        string PassengerName1;
        string PassengerName2;
        string PassengerName3;
        string PassengerName4;
        string flightNumber;
        string DOJ;
        uint Duration;
        string class;
        string fromCity;
        string toCity;
    }
    mapping(uint => TicketDetail) ticketDetails;
    uint ticketCount=0;


    
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }


    
    function setFlightDetails(
        uint amount,
        string memory PassengerName1,
        string memory PassengerName2,
        string memory PassengerName3,
        string memory PassengerName4,
        string memory flightNumber,
        string memory DOJ,
        uint Duration,
        string memory class,
        string memory fromCity,
        string memory toCity
    ) 
    public payable returns (bool success) {
        require(msg.value == amount);
        ticketDetails[ticketCount] = TicketDetail({
        fromAdd: msg.sender,
        PassengerName1:PassengerName1,
        PassengerName2:PassengerName2,
        PassengerName3:PassengerName3,
        PassengerName4:PassengerName4,
        flightNumber:flightNumber,
        DOJ:DOJ,
        Duration:Duration,
        class:class,
        fromCity:fromCity,
        toCity: toCity
        
        });

        ticketCount += 1;

        success = true;

    }

    function getFlightDetails(address userAddress) view public returns (TicketDetail memory){
        uint i;
        for(i=0;i<ticketCount;i++){
            TicketDetail memory e = ticketDetails[i];
            if(e.fromAdd  == userAddress){
                return e;
         }
        }
        revert("No Data Found");
    }

    function findTickets(address userAddress) public view returns(TicketDetail[] memory filteredTickets){
        TicketDetail[] memory ticketsTemp = new TicketDetail[](ticketCount);
        uint count;
        for(uint i = 0; i<ticketCount; i++){
        if (ticketDetails[i].fromAdd == userAddress) {
        ticketsTemp[count] = ticketDetails[i];
        count += 1;
      }
        filteredTickets = new TicketDetail[](count);
        for(uint j = 0; j<count; j++){
        filteredTickets[j] = ticketsTemp[j];
    }
    }
    }

    function withdraw (uint _amount) public onlyOwner { 
        owner.transfer(_amount); 
    }

    function transfer(address payable _to, uint _amount) public onlyOwner { 
        _to.transfer(_amount);
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    } 

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}