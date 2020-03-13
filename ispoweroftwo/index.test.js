const { expect } = require("chai")
const isPowerOfTwo = require("./solution");

describe("Is Power of Two", () => {
    it("should return true", () => {
        const result = isPowerOfTwo(1);
        const result16 = isPowerOfTwo(16);
        expect(result).to.equal(true);
        expect(result16).to.equal(true);
    });
    it("should return false if negative or zero", () => {
        const result = isPowerOfTwo(0);
        const resultNeg = isPowerOfTwo(-16);
        expect(result).to.equal(false);
        expect(resultNeg).to.equal(false);
    });
    it("should return false", () => {
        const result = isPowerOfTwo(218);
        expect(result).to.equal(false);
    });
});
