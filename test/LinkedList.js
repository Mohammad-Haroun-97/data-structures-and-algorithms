'use strcit'

class Node{
    constructor(value=null, next=null){

        this.value=value,
        this.next=null

    }
}

class LinkedList{
    constructor(){
        this.head=null
    }


    insert(value){
        let newNode= new Node(value)

        if (this.head===null) {
            this.head=newNode
        }else{

            newNode.next=this.head
            this.head=newNode
        }
       
    }

    include(value){

        

    }
}

let test=new LinkedList()
test.insert(1)
test.insert(2)
console.log(test);