const { expect } = require("chai")
const isPowerOfFour = require("./solution");

describe("Is Power of Four", () => {
  it("should return true", () => {
    const result = isPowerOfFour(1);
    const result16 = isPowerOfFour(16);
    expect(result).to.equal(true);
    expect(result16).to.equal(true);
  });
  it("should return false if negative or zero", () => {
    const result = isPowerOfFour(0);
    const resultNeg = isPowerOfFour(-16);
    expect(result).to.equal(false);
    expect(resultNeg).to.equal(false);
  });
  it("should return false", () => {
    const result = isPowerOfFour(8);
    expect(result).to.equal(false);
  });
});