class Node{
    constructor(value){

        this.value=value,
        this.next=null

    }}

    class Queue{
        constructor(){
            this.front=null;
            this.rear=null
        }

        enqueue(value){
            const newNode=new Node(value)

            if (this.front===null) {
                this.front=newNode;
                this.rear=newNode
                
            }else{
                this.rear.next=newNode;
                this.rear=newNode
                

            }

          
        }

        dequeue(){
            if (this.front===null) {
                return false
                
            }
            else{
                const temp=this.front;
                this.front=this.front.next;
                temp.next=null
                return temp 

                
            }

        }
    }

    let testQueue=new Queue()
    testQueue.enqueue(1)
    testQueue.enqueue(2)
    testQueue.enqueue(3)

    console.log('====',testQueue.dequeue());

    console.log(JSON.stringify(testQueue) );

