"use strict ";

let testArr=[2,4,6,-8];
let testValue=5;

function challenge02(arr, value) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === Math.ceil(arr.length / 2)) {
      newArr.push(value);
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

challenge02(testArr,testValue)


