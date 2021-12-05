'use strict'

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack{

    constructor(props){
        this.top=null;
        this.length=0
    }

    push(value){
        let newNode=new Node(value)
        if (this.top!==null) {

        newNode.next=this.top;
        this.top=newNode
        this.length++

        }else{

            this.top=newNode
            this.length++

        }

    }

    pop(){
        if (this.isEmpty()) {
            return `It is empty Stack`
            
        }else{
            const temp=this.top;
            this.top=this.top.next

            temp.next=null
            this.length--

            return temp /// it should have a vlue of 3 ???? 
        }
    }

    peek(){
        if (this.isEmpty()) { // do not forget this
            return `it is a empty stack`
            
        }
        return this.top.value 
    }


    isEmpty(){
        if (this.top===null) {
            return true
            
        }
        else{
            return false 
        }
    }
}

class Queue{
    constructor(){
        this.front=null;
        this.rear=null;
        this.length=0
    }
enqueue(value){
    let newNode=new Node(value)
if (this.front===null) {

    this.front=newNode;
    this.rear=newNode;
    this.length++;
    
}else{
this.rear.next=newNode ///addinig the node
this.rear=newNode  // moving the cursor 
this.length++;
}

}



dequeue(){

    if (this.front===null) {
        return `there is nothing to remove`
    }else{
        const temp =this.front;
        this.front=this.front.next

        temp.next=null;
        this.length--;

        // return temp
    }
}

peek(){
    if (this.front===null) {
        return `this queue is empty`
        
    }else{
        return this.front.value
    }
}

isEmpty(){
    if (this.front===null) {
        return true 
        
    }else{
        return false 
    }
}

}

















const stackTest=new Stack();

stackTest.push(1)
stackTest.push(2)
stackTest.push(3)
stackTest.pop()
// console.log(stackTest.peek());


// console.log(stackTest);
// console.log(stackTest.pop());
// console.log(stackTest);
