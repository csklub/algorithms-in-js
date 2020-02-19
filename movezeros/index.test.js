const { expect } = require("chai")
const moveZeros = require("./firstapproach");

describe("move zeros to the end of an array", () => {
    it("should move zeros to the end", () => {
        const result = moveZeros([0, 9, 7, 8, 9, 2, 4, 0, 3, 0]);
        // Make use of .to.eql to make a deep comparison
        expect(result).to.eql([9, 7, 8, 9, 2, 4, 3, 0, 0, 0]);
    });
});
