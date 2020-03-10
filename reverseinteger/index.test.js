const { expect } = require("chai");
const reverseInteger = require("./solution");

describe("Reverse Integer", () => {
    it('should reverse integers successfully', () => {
        const result1 = reverseInteger(134);
        expect(result1).to.equal(431);
        const result2 = reverseInteger(-5690);
        expect(result2).to.equal(-0965);
    });
    it('should return 0 since it is beyond limit', () => {
        const result1 = reverseInteger(-2147483648);
        expect(result1).to.equal(0);
        const result2 = reverseInteger(2147483648);
        expect(result2).to.equal(0);
    });
});
