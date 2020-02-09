/**
 * calculate the sum of all numbers from 1 to n
 * (including n)
 */

const firstApproach = require("./firstapproach");
const secondApproach = require("./secondapproach")

// first approach results
console.log(firstApproach(6));
console.log(firstApproach(3));
console.log(firstApproach(100));
console.log(firstApproach(1000000));

// second approach -> much faster
console.log(secondApproach(6));
console.log(secondApproach(3));
console.log(secondApproach(100));
console.log(secondApproach(1000000));
