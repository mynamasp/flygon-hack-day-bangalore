const fs = require("fs");




let TXNHASH = "sfds9jew9dj39jd";
let DEPCITY = "MAS";
let ARRCITY = "BLR";
let DEPTIME = '9:00';
let ARRTIME = '10:00';
let NAME = 'PRASANNA';
let CLASS = 'ECONOMY';
let SEAT = '12E';



let fileString = fs.readFileSync("../NFT_Source/NFT_Ticket.svg").toString();

fileString = fileString.replace('DEPCITY', DEPCITY);
fileString = fileString.replace('ARRCITY', ARRCITY);
fileString = fileString.replace('DEPTIME', DEPTIME);
fileString = fileString.replace('ARRTIME', ARRTIME);
fileString = fileString.replace('NAME', NAME);
fileString = fileString.replace('CLASS', CLASS);
fileString = fileString.replace('SEAT', SEAT);

fs.writeFileSync("../NFT_Output/"+ TXNHASH +".svg", fileString);
