"use strict";
let arr = [1, 2, 3, 4, 5, 6];

function binarySearch(arr, value) {
  let valueIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      valueIndex = i;
    }
  }
  console.log(valueIndex);
  return valueIndex;
}
binarySearch(arr, 50);
