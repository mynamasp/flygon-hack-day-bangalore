const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZiMDg2NGM5LTU1Y2UtNGQ1Yi1hOWQ5LTE0MGVlMzdmZTZjNyIsImtleSI6ImdkcWxmemFpIiwiaWF0IjoxNjY3NzA3MzA0fQ.zxG6O2Lh31oq4VrPbYROVR0dHbPbrigkCXiS_oQBTnY"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});

export async function run(tokenId,imgpath,passName,depCity,arrCity,tClass,doj,fNo) {

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
run("https://revise-testing.fra1.digitaloceanspaces.com/sample-collection/1.jpg","TEST","4","I Test","80","maroon","90")