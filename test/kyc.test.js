var Kyc = artifacts.require("./Kyc.sol");

require("chai")
  .use(require("chai-as-promised"))
  .should()

  contract("Kyc",(accounts)=>{
      let kyc
      before(async()=>{
          kyc=await Kyc.new();
               });
        describe("customer registration", async () => {
            let result
            before(async()=>{
              result=await kyc.signup("vimal",78569,575585,"tvm",{from:accounts[0]})
            })
            it("check details", async () => {
                let data=await kyc.registration(accounts[0]);
                assert.equal(data.name,"vimal");
                });
        })

  })