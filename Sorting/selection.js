/**
 * Selection Sort (n^2)
 * 1. find the index of the smallest element
 * 2. swap the lowest with the first element
 * 3. go through the rest items except the first element,
 * find the smallest element and do swap as mentioned above
 * 4. repeat the steps until it is sorted
 */

const selectionSort = (arrItems) => {
  for (let i = 0; i < arrItems.length; i++) {
    let minInd = i;
    // always leave sorted list with -> j = i + 1
    for (j = i + 1; j < arrItems.length; j++) {
      if (arrItems[j] < arrItems[minInd]) {
        minInd = j;
      }
    }
    let temp = arrItems[i];
    arrItems[i] = arrItems[minInd];
    arrItems[minInd] = temp;
  }
  return arrItems;
}

module.exports = selectionSort;
