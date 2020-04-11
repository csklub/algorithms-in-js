/**
 * bubble sort (n^2)
 * 1. compare the first two items
 * 2. if the second item is larger than the first items, swap them else don't
 * 3. continue with the second and the third item, then the next two until the end
 * 4. the last one will be to check if all the items are sorted
 */
const bubbleSort = (arrItems) => {
  for (let i = 0; i < arrItems.length; i++) {
    for (let j = 0; j < arrItems.length; j++) {
      if (arrItems[j] > arrItems[j + 1]) {
        let temp = arrItems[j];
        arrItems[j] = arrItems[j + 1];
        arrItems[j + 1] = temp;
      }
    }
  }

  return arrItems;
}

module.exports = bubbleSort;
