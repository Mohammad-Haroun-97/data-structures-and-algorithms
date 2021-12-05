'use strict'


function insertionSort(array){
  for(let i=0; i<array.length; i++){
    let currentValue = array[i];
    for(let j=i-1; j>=0; j--){
      if(currentValue < array[j]){
        array[i] = array[j];
        array[j] = currentValue;
        i = j;
      }
    }
  }
  return array;
}

console.log(insertionSort([5,1,2,4,3,6]));

