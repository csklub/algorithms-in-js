/**
 * This is an example of the use of .reduce() method in js
 * We will take the add ages of all people that exist in community between 20-24.
 * The people are grouped according to their ages
 */

const peopleInCommunity = [
    {
        age: 20,
        noOfPeople: 2
    },
    {
        age: 21,
        noOfPeople: 4
    },
    {
        age: 22,
        noOfPeople: 12
    },
    {
        age: 23,
        noOfPeople: 1
    },
    {
        age: 24,
        noOfPeople: 0
    }
]
/**
 * Write reduce method
 * The reducer function takes four arguments:
 * - Accumulator (acc)
 * - Current Value (cur)
 * - Current Index (idx) - Optional
 * - Source Array (src) - Optional
 * - Initial value - Optional
 *  Read more on: 
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */
/**
 * write this as a function before writing testing
 */
const totalAgeValue = peopleInCommunity.reduce(
    // Destructure age and noOfPeople from peopleInCommunity array
    (accumulator, { age, noOfPeople }) =>
        //  Multiply the age and noOfPeople and add to accumulator
        accumulator + (age * noOfPeople)
    , 0)

module.exports = totalAgeValue;
