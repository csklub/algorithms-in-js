const reverseInteger = (num) => {
    let returnValue = 0;
    // before converting to string, get the string
    const numMathSign = Math.sign(num);
    // multiply num by sign to get +ve number
    let convertNumIntoStr = (num * numMathSign).toString();
    /**
     * when 123 is reversed we get 321 but its index are [0,1,2] for 123, 
     * for 321 it will be [2,1,0] thus we -1 from the length of convertNumIntoStr
    */
    // do reverse of string
    for (let i = convertNumIntoStr.length - 1; i >= 0; i--) {
        returnValue += convertNumIntoStr[i];
    };

    // make sure we get the sign back
    returnValue = returnValue * numMathSign;

    if (returnValue > Math.pow(2, 31) - 1 || returnValue < -Math.pow(2, 31)) {
        return 0;
    }

    return returnValue;
}

module.exports = reverseInteger;
