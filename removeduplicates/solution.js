const removeDuplicates = function (nums) {
    let counts = 0;
    // make a temporary hash table to hold values
    const tempHashTable = {};

    for (let i = 0; i < nums.length; i++) {
        if (tempHashTable[nums[i]] == undefined) {
            nums[counts++] = nums[i];
        };
        tempHashTable[nums[i]] = nums[i];
    };

    return counts;
};

exports = module.exports = removeDuplicates;
