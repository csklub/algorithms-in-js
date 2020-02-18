const { assert, expect } = require("chai");
const { firstApproach, secondApproach } = require(".");

describe("sum of numbers upto n", () => {
    it("should test first approach to be mathematically true", () => {
        const result = firstApproach(3);
        expect(result).to.equal(6);
    });
    it("should test second approach to be mathematically true", () => {
        const result = secondApproach(3);
        expect(result).to.equal(6);
    })
    it("should test if result from the two approaches are the same", () => {
        const firstApproachResult = firstApproach(1000000);
        const secondApproachResult = secondApproach(1000000);
        assert(firstApproachResult, secondApproachResult);
    });
});
