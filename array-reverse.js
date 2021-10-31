
let test=[1,2,3,4,5]
function reverse(arr){
    let newArr=[];
    for (let i = arr.length-1; i > -1; i--) {
        
        newArr.push(arr[i])
        
    }
    console.log(newArr);
    return newArr;
}
reverse(test)



