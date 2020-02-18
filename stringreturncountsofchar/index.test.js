const { expect, assert } = require("chai");
const charCounts = require("./solution");
const charCountsForOf = require("./solutionforof");

describe("string return char counts", () => {
    it("should return counts", () => {
        const str = "string to Count. Here we are + me S3456.!"
        const counts = charCounts(str);
        const countsForOf = charCountsForOf(str);
        // Need to add more test cases ->
        expect(counts.e).to.equal(5);
        assert(counts.c, countsForOf.c);
    });
});
