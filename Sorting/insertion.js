/**
 * insertion sorting n^2
 * 1. start with the first one
 * 2. take the second item and put into proper sorted order
 * 3. Repeat until it is finished
 */

const insertionSort = arrItems => {
  for (let i = 1; i < arrItems.length; i++) {
    let temp = arrItems[i];
    let j = i - 1;
    while (j >= 0 && arrItems[j] > temp) {
      arrItems[j + 1] = arrItems[j];
      j = j - 1;
    }
    arrItems[j + 1] = temp;
  }
  return arrItems;
}

module.exports = insertionSort;
