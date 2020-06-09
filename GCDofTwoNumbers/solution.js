/**
 * iterative solution
 */
const iterativeSolution = (a, b) => {
    let remainder = a % b
    if(remainder == 0) return b
    
    while(remainder != 0) {
        a = b
        b = remainder
        remainder = a % b
    }

    return b;
}

 /**
  * recursive solution
  */
const recursiveSolution = (a, b) => {
    let remainder = a % b
    if(remainder == 0) return b
    a = b
    b = remainder
    return recursiveSolution(a, b)
}

// accessible outside for testing
module.exports = {
    iterativeSolution,
    recursiveSolution
}
