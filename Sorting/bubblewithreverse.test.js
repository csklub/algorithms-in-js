const { expect } = require("chai");
const bubbleWithReverse = require("./bubblewithreverse");

describe("Reverse Arr with Bubble Sort method", () => {
  it('should be able to sort arr in descending order', () => {
    const firstArr = bubbleWithReverse([7, 5, 2, 4, 3, 9]);
    const secondArr = bubbleWithReverse([9, 7, 5, 4, 3, 1]);
    // make a deep comparison of an arr
    expect(firstArr).to.eql([ 9, 7, 5, 4, 3, 2 ]);
    expect(secondArr).to.eql([ 9, 7, 5, 4, 3, 1 ]);
  });
});
