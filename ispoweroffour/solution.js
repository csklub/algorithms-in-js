const isPowerOfFour = num => {
  if (num <= 0) {
    return false;
  }
  while (num !== 1) {
    if (num % 4 > 0) {
      return false;
    }
    num = Math.floor(num / 4);
  }
  return true;
}

module.exports = isPowerOfFour;
