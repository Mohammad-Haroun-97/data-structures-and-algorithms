# Merge Sort

This challenge relates to creating a method called mergeSort (int [] arr) that takes an int array as a parameter. The method divides the array into two parts and each part is also divided into two parts until breaking each element into a single part.

Then sort the elements from smallest to largest and merge the divided sorted array together. In the end, the array has been sorted.

# Pesudocode

```

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

 ```
# code 

 ```

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
  
  module.exports = mergeSort;

  ```

 # Trace
 
 ![mergeSort](code-challeng-27.png)


 # TEST 
 ![](sssssssss.PNG)