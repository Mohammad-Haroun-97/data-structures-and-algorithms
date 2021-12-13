'use strict'

const Node = require('./Node')

class Stack{
    constructor(){
        this.top=null
    }

    push(value){
        const newNode= new Node(value)
        if (this.isEmpty()) {
            this.top=newNode
            
        }

        else{
            newNode.next=this.top;
            this.top=newNode
        }

    }

    pop(){
        if (this.isEmpty()) {
            return false
            
        }else{
            const temp=this.top;
            this.top=this.top.next;
            temp.next=null
            return temp
        }

    }

    peek(){
        return this.top.value
    }

    isEmpty(){
        return this.top===null
    }
}

let testFinal=new Stack()

testFinal.push(1)
testFinal.push(2)
testFinal.push(3)
testFinal.push(4)

console.log('testFinal',JSON.stringify(testFinal) );
console.log('testFinal',JSON.stringify(testFinal.pop()) );
