



// generateNft(<User Wallet Address>)





/************************************************************************************************************************************** */
require('dotenv').config();

const fs = require("fs");

const countapi = require('countapi-js');


const alchemyKey = "https://polygon-mumbai.g.alchemy.com/v2/uGmpXFE_RAcQpm4Cgwsu857UkQQY7GrX";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey); 

const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3ZjdlY2MxLWU0NTgtNGUxMy1hYTlkLTkyMzBkNGQyOTFhNiIsImtleSI6ImZjNTJzNmJnIiwiaWF0IjoxNjY3NzE1MzQ1fQ.tAB1qeKl15sGHBNhiZvsq2lDz58pbnVSCEb8Zjb4TcQ"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});

const contractABI = require("./PlaneTicket.json")
const contractAddress = "0x0940C071eB69fb7892a1d49249Bd8f6AFcCceF21";

const NFTcontract = require("./FLYgonTicket.json")
const NFTcontractAddress = "0x8Bf0eDc0a88975e4E15A4F4B9c2751d7082AaF7B"
const nftContract = new web3.eth.Contract(NFTcontract.abi, NFTcontractAddress);

const pinataSDK = require('@pinata/sdk');
const { stringify } = require('querystring');
const pinata = new pinataSDK('f6cad2b19d2145e53a31', '940f26ba2d71e68ff684a3bdadf51930c1431d78a4719e208da6d5e4adc0fba9');



let passengerAddress = "";

let imageLocation = "";
let Passengername = "";
let tokenID = "";
let depCity="";
let arrCity="";
let travelClass = "";
let DOJ = "";
let Flight_Number = "";

let cidHash = ""


const ticketInfo = new web3.eth.Contract(contractABI,contractAddress);




function randomUniqueNum(range, outputCount) {

    let arr = []
    for (let i = 1; i <= range; i++) {
      arr.push(i)
    }
  
    let result = [];
  
    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }
  
    return result;
  }

async function mintNFT(toAddress,tokenId) {
    const nonce = await web3.eth.getTransactionCount("0x6dA6bCcea736802a9b45c33A71B34aA4FAA43dD1", "latest") //get latest nonce
  
    //the transaction
    const tx = {
      from: "0x6dA6bCcea736802a9b45c33A71B34aA4FAA43dD1",
      to: "0x8Bf0eDc0a88975e4E15A4F4B9c2751d7082AaF7B",
      nonce: nonce,
      gas: 3000000,
      data: nftContract.methods.mint(toAddress, tokenId).encodeABI(),
    }
  
    const signPromise = web3.eth.accounts.signTransaction(tx, "22e9856dcd3a034f4e68cbda3bbdafbda9513b9e5ed83b6bfbfc5768173599d9")
    signPromise
      .then((signedTx) => {
        web3.eth.sendSignedTransaction(
          signedTx.rawTransaction,
          function (err, hash) {
            if (!err) {
            //   console.log(
            //     "The hash of your transaction is: ",
            //     hash,
            //     "\nCheck Alchemy's Mempool to view the status of your transaction!"
            //   )
            } else {
            //   console.log(
            //     "Something went wrong when submitting your transaction:",
            //     err
            //   )
            }
          }
        )
      })
      .catch((err) => {
        //console.log(" Promise failed:", err)
      })
  }

async function run(tokenId,imgpath,passName,depCity,arrCity,tClass,doj,fNo) {
    console.log(tokenId);
    console.log(imgpath);
    console.log(passName);
    console.log(depCity);
    console.log(arrCity);
    console.log(tClass);
    console.log(doj);
    console.log(fNo);

      const nft = await revise.addNFT(
        {
          image:imgpath,
          name: passName,
          tokenId: tokenId,
          description: 'An NFT',
        },
        [{ DepCity: depCity }, { ArrCity: arrCity }, { PClass: tClass },{DOJ: doj},{FlightNo: fNo}]);
    
      console.log(nft);

}

 export const generateNFT = async (address) => { 
    const message = await ticketInfo.methods.findTickets(address).call(); 

    console.log(message);
    try {
        
    
    passengerAddress = message[0][0]

    Passengername = message[0][1];
    depCity=message[0][9];
    arrCity=message[0][10];
    travelClass = message[0][8];
    DOJ = message[0][6];
    Flight_Number = message[0][5];
    

    //Incrementing Global tokenID for NFT
    tokenID = randomUniqueNum(1000,1);
    tokenID = tokenID[0];

    let fileString = fs.readFileSync("NFT_Source/NFT_Ticket.svg").toString();

    fileString = fileString.replace('DEPCITY', depCity);
    fileString = fileString.replace('ARRCITY', arrCity);
    fileString = fileString.replace('DEPTIME', "10:00");
    fileString = fileString.replace('ARRTIME', "11:30");
    fileString = fileString.replace('NAME', Passengername);
    fileString = fileString.replace('CLASS', travelClass);
    fileString = fileString.replace('SEAT', "12A");

    imageLocation = "NFT_Output/"+ tokenID +".svg"

    fs.writeFileSync(imageLocation, fileString);

    let readableStreamForFile = fs.createReadStream(imageLocation);

    const options = {
        pinataMetadata: {
            name: "MyTicket",
        }
    };

    pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
        //handle results here
        console.log(result.IpfsHash);
        cidHash = result.IpfsHash;

    }).catch((err) => {
        //handle error here
        console.log(err);
    });

    let URI = "ipfs://" + String(cidHash);

    console.log(tokenID);


//    await run("https://revise-testing.fra1.digitaloceanspaces.com/sample-collection/1.jpg","TEST","4","I Test","80","maroon","90");
    const NftId = await run(String(tokenID),String(imageLocation),String(Passengername),String(depCity),String(arrCity),String(travelClass),String(DOJ),String(Flight_Number));
   //await run("9","NFT_Output/9.svg","Prasanna","MAS","BLR","ECONOMY","12/11/2022","6E 4342");
    const Nft = mintNFT(passengerAddress, tokenID);
    console.log(Nft);
    console.log(NftId);

const nft = await revise.fetchNFT(NftId.createdNftId);
const result = await revise.nft(nft).setImage(URI)
console.log(result);

} catch (error) {
        console.log("No Contract found")
        return 0;
}
};





