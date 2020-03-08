const { expect } = require("chai");
const totalAge = require("./reduce");

describe("string return char counts", () => {
    it("should return true for testing", () => {
        const peopleInCommunity = [
            { age: 20, noOfPeople: 2 },
            { age: 21, noOfPeople: 4 },
            { age: 22, noOfPeople: 12 },
            { age: 23, noOfPeople: 1 },
            { age: 24, noOfPeople: 0 }
        ]
        const result = totalAge(peopleInCommunity);

        expect(result).to.equal(411);
    });
});
