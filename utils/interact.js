require('dotenv').config();
const alchemyKey = "https://polygon-mumbai.g.alchemy.com/v2/uGmpXFE_RAcQpm4Cgwsu857UkQQY7GrX";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey); 

const contractABI = require("./PlaneTicket.json")
const contractAddress = "0x0940C071eB69fb7892a1d49249Bd8f6AFcCceF21";

 export const ticketInfo = new web3.eth.Contract(
    contractABI,
    contractAddress
  );



export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "👆🏽 Write a message in the text-field above.",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  };

  export const addTicket =  async (price,passengerName1,passengerName2,passengerName3,passengerName4,flightNum,DOJ,Duration,planeClass,fromCity,toCity) => { 
    const transactionParameters = {
        to: "0x0940C071eB69fb7892a1d49249Bd8f6AFcCceF21", // Required except during contract publications.
        from: "0x6dA6bCcea736802a9b45c33A71B34aA4FAA43dD1", // must match user's active address.
        gas: 500000,
        data: ticketInfo.methods.setFlightDetails(int(price),passengerName1,passengerName2,passengerName3,passengerName4,flightNum,DOJ,Duration,planeClass,fromCity,toCity).encodeABI(),
      };
    
    const signature = await web3.eth.accounts.signTransaction(transactionParameters, "22e9856dcd3a034f4e68cbda3bbdafbda9513b9e5ed83b6bfbfc5768173599d9");

    //console.log(signature);
    web3.eth.sendSignedTransaction(signature.rawTransaction).on(
        "receipt",(receipt)=>{
            console.log(receipt);
        }
    )


};

export const loadCurrentMessage = async (address) => { 
    const message = await ticketInfo.methods.findTickets(address).call(); 
    return message;
};

/*************************************** FOR DEBUGGING PURPOSE ONLY "DO NOT TAMPER" ***************************************/

// const ticketInfo = new web3.eth.Contract(
//     contractABI,
//     contractAddress
//   );

// const loadCurrentMessage = async () => { 
//     const message = await ticketInfo.methods.findTickets("0x6dA6bCcea736802a9b45c33A71B34aA4FAA43dD1").call(); 
//     console.log(message);
//     return message;
// };

// const testAddTicket =  async () => { 
//     const transactionParameters = {
//         to: "0x0940C071eB69fb7892a1d49249Bd8f6AFcCceF21", // Required except during contract publications.
//         from: "0x6dA6bCcea736802a9b45c33A71B34aA4FAA43dD1", // must match user's active address.
//         gas: 500000,
//         data: ticketInfo.methods.setFlightDetails(0,"PRASANNA","NITHISH","AASHIQ","AJITH","6E 6969","12-12-2022",90,"ECONOMY","MAS","BOM").encodeABI(),
//       };
    
//     const signature = await web3.eth.accounts.signTransaction(transactionParameters, "22e9856dcd3a034f4e68cbda3bbdafbda9513b9e5ed83b6bfbfc5768173599d9");

//     console.log(signature);
//     web3.eth.sendSignedTransaction(signature.rawTransaction).on(
//         "receipt",(receipt)=>{
//             console.log(receipt);
//         }
//     )
// };

//testAddTicket();
//loadCurrentMessage();
