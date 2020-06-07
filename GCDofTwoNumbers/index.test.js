const { expect } = require("chai")
const { iterativeSolution, recursiveSolution } = require("./solution");

describe("GCD of two numbers", () => {
  it("should test recursive fx", () => {
    const result = recursiveSolution(80, 8);
    const result2 = recursiveSolution(10, 6);
    expect(result).to.equal(8);
    expect(result2).to.equal(2);
  });

  it("should test iterative solution", () => {
    const result = iterativeSolution(80, 8);
    const result2 = iterativeSolution(10, 6);
    expect(result).to.equal(8);
    expect(result2).to.equal(2);
  });
});