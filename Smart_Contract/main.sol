//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract PlaneTicket {
    address payable public ticketHolder;

    event NewTicketBooked(
        address indexed fromAdd,
        string PassengerName,
        string flightNumber,
        string DOJ,
        string class,
        string fromCity,
        string toCity
    );

    struct TicketDetail {
        address fromAdd;
        string PassengerName;
        string flightNumber;
        string DOJ;
        string class;
        string fromCity;
        string toCity;
    }

    TicketDetail[] ticketDetails;
    TicketDetail[] temp;
    
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function clearAllData() public onlyOwner(){
        delete ticketDetails;
    }

    function clearTempData() private {
        delete temp;
    }

    
    function setFlightDetails(
        string memory PassengerName,
        string memory flightNumber,
        string memory DOJ,
        string memory class,
        string memory fromCity,
        string memory toCity
    ) external{
        ticketDetails.push(TicketDetail(msg.sender, PassengerName,flightNumber,
        DOJ, class,fromCity, toCity));

        emit NewTicketBooked(msg.sender, PassengerName, flightNumber,
        DOJ, class,fromCity, toCity);
    }

    function getFlightDetails(address userAddress) public returns (TicketDetail[] memory){
        clearTempData();
        uint i;
        for(i=0;i<ticketDetails.length;i++){
            TicketDetail memory e = ticketDetails[i];
            if(e.fromAdd  == userAddress){
                temp.push(e);
         }
        }
        return temp;
    }

        modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
}