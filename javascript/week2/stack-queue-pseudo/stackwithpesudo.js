'use strict'
class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
    
}

class Stack{
    constructor(){
        this.top=null;
        this.length=0
    }


    push(value){
        const newNode= new Node(value)
if (this.top===null) {
    this.top=newNode;
    this.length++;
    
}else{
    this.top.next=newNode
    this.top=newNode;
    this.length++
    
}

    }

    pop(){
        if (this.top===null) {
            
            return console.log(`you cant delete the last element because it is empty`);
            
        }
        else{
            const temp= this.top;
            this.top=this.top.next;
            temp.next=null;

        }
    }

    peek(){
        if (this.top===null) {
            console.log(`the stack is empty`);
            
        }else{
            return this.top
        }
        
    }

   

    





}

class pesudoQueue{
    constructor() {
       
    this.stack1=new Stack();
    this.stack2=new Stack();
    this.length=0
             
        }

        enqueue(value){
            if (this.stack1===null && this.stack2===null) {
                console.log(`this queue is empty`);
            }else{
                this.stack1.push(value)

            }

        }

        dequeue(){
            // if (this.stack1.size===0) throw new Error('it is an empty Queue');
    if (this.stack2.size===0){
        while(this.stack1.size > 0 ){
          // console.log('stack', this.stack2);
          this.stack2.push(this.stack1.pop()) ;
          // console.log('pop', this.stack2.pop());
        }
  
      }
      // console.log('pop', this.stack2.pop());
      return this.stack2.pop();


    }
}

    module.exports = {
        queue: pesudoQueue,
        node: Node};

