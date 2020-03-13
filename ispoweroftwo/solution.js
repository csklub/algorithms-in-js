const isPowerOfTwo = n => {
  if (n <= 0) {
    return false;
  }
  const powTwoValue = Math.log2(n);
  // round and check with result
  if (Math.round(powTwoValue) === powTwoValue) {
    return true;
  }
  return false;
}

module.exports = isPowerOfTwo;
