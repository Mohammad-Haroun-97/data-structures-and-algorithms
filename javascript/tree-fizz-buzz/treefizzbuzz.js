"use strict";



const fizzBuzz = (kAryTree) => {
  if (kAryTree === null) {
    return console.log(`the tree is empty`);
  }

  const queue = [kAryTree];
  const result = [];
  while (queue.length > 0) {
    let item = queue.shift();
    let value = item.value;
    

if (value % 3===0 &&value % 5!==0) {
    result.push('Fizz')
    
}


if (value % 5===0 && 3!==0) {
    result.push('Buzz')
    
}


if (value % 3===0 && value % 5===0) {
    result.push('FizzBuzz')
    
}


if (value % 3===0) {
    result.push('Fizz')
    
}
else{
    result.push(`${value}`)
}




    if (item.left) {
        queue.push(item.left)
        
    }
    if (item.right) {
        queue.push(item.right)
        
    }



  }
};

module.exports={fizzBuzz}