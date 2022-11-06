const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZiMDg2NGM5LTU1Y2UtNGQ1Yi1hOWQ5LTE0MGVlMzdmZTZjNyIsImtleSI6ImdkcWxmemFpIiwiaWF0IjoxNjY3NzA3MzA0fQ.zxG6O2Lh31oq4VrPbYROVR0dHbPbrigkCXiS_oQBTnY"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});

export async function run(tokenNo,imageLocation,Passengername,depCity,arrCity,travelClass,DOJ,Flight_Number,des) {

    const nft = await revise.addNFT(
      {
        image: imageLocation,
        Name: Passengername,
        tokenId : tokenNo,
        description: des,
      },
      [{ DepatureCity:  depCity}, { ArrivalCity: arrCity }, { Class: travelClass}, { Date_of_Journey: DOJ}, { Flight_Number: Flight_Number}]);
  
    console.log(nft);
}


run("4","df","PRasanna","MAS","BLR","ECONOMY","22/12/2022","6E 3243","df");