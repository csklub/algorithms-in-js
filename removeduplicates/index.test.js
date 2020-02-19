const { expect } = require("chai");
const removeDuplicates = require("./solution");

describe("Remove Duplicates", () => {
    it("should remove all duplicates in an array", () => {
        const result = removeDuplicates([1, 2, 2, 4, 5, 6, 6, 7]);
        // [1, 2, 4, 5, 6, 7] -> 6
        expect(result).to.equal(6);
        const result2 = removeDuplicates([-4, -2, -1, -1, 0, 1, 2, 3, 4, 5, 5])
        // [-4, -2, -1, 0, 1, 2, 3, 4, 5] -> 9
        expect(result2).to.equal(9);
    });
});
