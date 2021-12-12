'use strcit'
class Node{
    constructor(value,index){
        this.value=value;
        this.index=index
        this.next=null
        
    }
}

class Stack{
    constructor(){
        this.top=null
        this.length=7
}

push(value){
    let newNode=new Node(value,this.length)
    if (!this.top) {

        this.top=newNode
        
    }else{
        newNode.next=this.top
        this.top=newNode


        
    }

    this.length--


    
}
pop(){

    if (this.top===null) {
        return false 
        
    }

    else{
        const temp=this.top;
        this.top=this.top.next
        temp.next=null
        return temp
    }
}

minimum(){

    if (this.top===null) {
        return false
        
    }
    else{
        let current=this.top
        let min=current.value;
        while(current){

            if (current.value<min) {
                min=current.value
                
            }
            current=current.next


        }
        return min
    }

}

tempreture(arr){
    let results=[];

    
    let reverseArr=arr.reverse()
    // console.log('reverseArr',reverseArr);

    reverseArr.forEach((value )=> {
        tempretureStack.push(value)
    });

    let current=tempretureStack.top

    while (current) {

        if (current.next===null) {
            results.push(0)
            break;
        }

        for (let i =1; i < arr.length; i++) {

           if (current.value < arr[i]) {

             results.push(i-current.index)
             break;
               
           }
            
        }
        current=current.next
        
    }

    
return results


}


}

let tempretureStack= new Stack()

let testStack=new Stack()

testStack.push(5)
testStack.push(2)
testStack.push(3)
testStack.push(4)


// console.log(testStack.pop());

// console.log('testStack',JSON.stringify(testStack) );
// console.log('minimum',testStack.minimum());

// tempretureStack.tempreture([73,74,75,71,69,72,76,73])

// console.log('======',JSON.stringify(tempretureStack) );

// console.log('++++++++++++++++++++++++',tempretureStack.top.value);

console.log(tempretureStack.tempreture([73,74,75,71,69,72,76,73]));