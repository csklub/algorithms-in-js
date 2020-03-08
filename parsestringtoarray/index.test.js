const { expect } = require("chai");
const main = require("./parseStringtoarray");

describe("Parse String to Array", () => {
    it('should parse to Array', () => {
        const data = "{name:Ezrqn Kemboi,regNumb:1,startedAt:2018/06/04,fellow:true,totalPriceGiven:$88.08},{name:Gitau Moses,regNumb:2,startedAt:2018/09/23,fellow:true,totalPriceGiven:$100.10}";
        const result = main(data);
        expect(result).to.have.length(2);
        expect(result).to.be.an('array');
    })
})