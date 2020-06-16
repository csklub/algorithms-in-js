const { expect } = require("chai")
const solution = require("./solution");

describe("Puzzle Question", () => {
  it("should test puzzle question for oranges, apple", () => {
    /**
     * AO -> Apple Orange box
     * A -> Apple box
     * O -> Orange box
     */
    const result = solution(['AO', 'A', 'O']);
    expect(result).to.equal([]);
  });
});