const { expect } = require("chai")
const removeElement = require("./solution");

describe("remove element", () => {
    it("should remove an element and return its length", () => {
        const result = removeElement([3, 2, 1, 3], 3);
        expect(result).to.equal(2);
    });

    it("returns 4 when val is not in an arr below", () => {
        const result = removeElement([3, 2, 1, 3], 5);
        expect(result).to.equal(4);
    });

    it("should return 0 when arr is empty", () => {
        const result = removeElement([], 3);
        expect(result).to.equal(0);
    });
});
