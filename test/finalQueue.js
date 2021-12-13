'use strict'

const Node=require('./Node')

class Queue{
    constructor(){
        this.front=null;
        this.rear=null
    }


    enqueue(value){
        const newNode=new Node(value)

        if (this.isEmpty()) { // use ! much better
            this.front=newNode;
            this.rear=newNode
        }else{

            this.rear.next=newNode;
            this.rear=newNode
        }

    }

    dequeue(){
if (this.isEmpty()) {
    return null
    
}else{
    const temp =this.front;
    this.front=this.front.next
    temp.next=null;
    return temp
}
    }

    peek(){
        if (this.isEmpty()) {
            return false
            
        }
        return this.front.value
    }

    isEmpty(){
        return this.front===null
    }

}

const finalQueue=new Queue()

finalQueue.enqueue(1)
finalQueue.enqueue(2)
finalQueue.enqueue(3)

console.log('finalQueue',JSON.stringify(finalQueue.dequeue()) );
console.log('=============',JSON.stringify(finalQueue) );