// Mohammad Haroun
function mergeSort(arr){
    const n = arr.length;
  
    if(n > 1){
      const mid = Math.floor(n/2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
      return merge(mergeSort(left), mergeSort(right));
    } else {
      return arr;
    }
  }
  // Mohammad Haroun
  function merge(left, right){
    let i = 0;
    let j = 0;
    let k = [];
  
    while(i < left.length && j < right.length){
      if(left[i] <= right[j]){
        k.push(left[i]);
        i++;
      } else {
        k.push(right[j]);
        j++;
      }
    }
  
    return k.concat(left.slice(i)).concat(right.slice(j));
  }
  
  module.exports = {mergeSort,merge};