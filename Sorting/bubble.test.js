const { expect } = require("chai");
const bubbleSort = require("./bubble");

describe("Bubble Sort", () => {
  it('should be able to sort', () => {
    const firstArr = bubbleSort([7, 5, 2, 4, 3, 9]);
    const secondArr = bubbleSort([9, 7, 5, 4, 3, 1]);
    // make a deep comparison of an arr
    expect(firstArr).to.eql([2, 3, 4, 5, 7, 9]);
    expect(secondArr).to.eql([1, 3, 4, 5, 7, 9]);
  });
});
