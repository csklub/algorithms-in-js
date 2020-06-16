/**
 * bubble sort (n^2)
 * 1. compare the first two items
 * 2. if the second item is larger than the first items, swap them else don't
 * 3. continue with the second and the third item, then the next two until the end
 * 4. the last one will be to check if all the items are sorted
 */
const bubbleSort = (arrItems) => {
  let arrLength = arrItems.length;

  for(let i = 0; i < arrLength; i++) {
    for(let j = i + 1; j < arrLength; j++) {
      if(arrItems[j] < arrItems[i]) {
        // es6 swap items
        [arrItems[i], arrItems[j]] = [arrItems[j], arrItems[i]]
      }
    }
  }

  return arrItems;
}

module.exports = bubbleSort;
