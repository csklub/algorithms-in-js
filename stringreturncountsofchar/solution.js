/**
 * The problem to this question is found inside
 * question.txt
 */
const charCounts = (str) => {
    let result = {};
    for (let i = 0; i < str.length; i++) {
        // have regex to check for only alphanumeric
        const regexAlphaNumeric = /^[a-z0-9]+$/i;
        // assign character and make sure we lower case them
        const character = str[i].toLowerCase();
        if (regexAlphaNumeric.test(character)) {
            if (result[character] > 0) {
                // if result is greater than 0, we should add one
                result[character]++;
            } else {
                result[character] = 1;
            }
        }
    }
    return result;
};

exports = module.exports = charCounts;
