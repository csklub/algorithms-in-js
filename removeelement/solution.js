const removeElement = (arr, val) => {
    // initialize count to zero
    let counts = 0;
    // loop through the arra
    for (let i = 0; i < arr.length; i++) {
        /**
         * check if num is not equal to val
         * then increment the number of counts
         * but assigining its num values
         */
        if (arr[i] != val) {
            arr[counts++] = arr[i]
        }
    }
    // return our counts
    return counts;
}

exports = module.exports = removeElement;
