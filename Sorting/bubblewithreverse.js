/**
 * In this case, we are demonstrating 
 * bubble sorting but in a reverse manner/descending
 */

 function bubbleWithReverse(arr) {
   let arrLength = arr.length;

   for(let i = 0; i < arrLength; i++) {
     for(let j = i + 1; j < arrLength; j++) {
       if(arr[j] > arr[i]) {
         // swap using es6 method
         [arr[i], arr[j]] = [arr[j], arr[i]]
       }
     }
   }

   return arr;
 }

 module.exports = bubbleWithReverse;
 