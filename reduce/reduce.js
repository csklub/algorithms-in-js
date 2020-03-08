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

const totalAge = arr => {
    let totalAgeValue
    // Destructure age and noOfPeople from peopleInCommunity array
    totalAgeValue = arr.reduce((accumulator, { age, noOfPeople }) => (
        // Multiply the age and noOfPeople and add to accumulator
        accumulator + (age * noOfPeople)
    ), 0)

    return totalAgeValue;
}

module.exports = totalAge;
