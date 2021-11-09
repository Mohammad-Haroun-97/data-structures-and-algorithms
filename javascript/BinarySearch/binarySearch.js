'use strict';

function BinarySearch (sortedArray, value){
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === value) {

      return middle;
    } else if (sortedArray[middle] < value) {

      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
//Mohammad Haroun
console.log(BinarySearch ([1,2,3,4,5,6], 3)); 
module.exports=BinarySearch;