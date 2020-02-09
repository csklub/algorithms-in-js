
const firstApproach = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }  // Big O(n)
    return sum;
}

exports = module.exports = firstApproach;
