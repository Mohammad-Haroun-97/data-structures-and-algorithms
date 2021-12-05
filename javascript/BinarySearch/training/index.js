"use strict";

class Node {
  constructor(value) {
    this.value = value, 
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null, 
this.tail = null, 
    this.length = 0;
  }


  append(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode,
       this.tail = newNode;
    } else {
      this.tail.next = newNode,
       this.tail = newNode;
    }

    this.length++;
    
  }



  insert(value){

    let newNode=new Node(value)
    let current=this.head;

    if (this.head ===null) {
      this.head=newNode,
      this.tail=newNode
    }else{
      this.head=newNode
      this.head.next=current
    }
    this.length++;
// console.log('taail',this.tail);

  }

  include(num){
    let counter=0

    let flag=false
    let current=this.head;
    while (current !==null) {
      counter+=1
    
      if (current.value === num) {
       flag=true
      }
      current=current.next
    }


    return flag
  }


  toString(){
    let solution=``
    let current=this.head;


    while (current !==null) {

      solution =solution +`{${current.value}}->`

      current=current.next
      
    }
    solution=`${solution} Null`;
    console.log(solution);

  }


  insertBefore(value,newValue){
    let newNode=new Node(newValue)
    let current=this.head

    while(current !==null){

      if (current.next.value===value) {
        newNode.next=current.next
        current.next=newNode;
        // break;
      }
      current=current.next

    }
    length++;


  }

  insertAfter(value,newValue){
    let newNode=new Node(newValue)
    let current=this.head;

    while (current !==null) {
      if (current.value===value) {
        console.log(current.next);
        newNode.next=current.next
        current.next=newNode
        // break;
      }

      current=current.next 
    }
    length++;

  }

  kth(k){
   if (k===this.length-1) {
     return this.head.value
   }
   if (k >= this.length) {
     return `Exception`
   }
   if (k <0) {
    return `K should be a zero or a positive Number`
  }

  let current=this.head;
for (let i = 0; i < this.length -1- k; i++) {//i=0--current=2//i=1--current=3//i=2--current=3//i=3---current=tail//i=4
  current=current.next
  
}
return current.value


  }

  zipList(list1, list2) {
    let newHead = new Node(0);
    let currentNode = newHead;
    
    let l1 = list1.head;
    let l2 = list2.head;
    while (l1 !== null && l2 !== null) {
      currentNode.next = l1;
      l1 = l1.next;
      currentNode = currentNode.next;
      currentNode.next = l2;
      l2 = l2.next;
      currentNode = currentNode.next;
    }
    if (l1 !== null) {
      currentNode.next = l1;
    } else if (l2 !== null) {
      currentNode.next = l2;
    }
    list1 = newHead.next;
    
    list1.length = list1.length + list2.length;
    // console.log(list1.length);
    return list1;
  }


 
}







const list1=new LinkedList()
const list2=new LinkedList()
const list=new LinkedList();
const newZipList= new LinkedList();


list.append('head')
list.append('2')
list.append(3);
list.append('tail')


list1.append(1)
list1.append(2)
list1.append(3);
list1.append(4)


list2.append(11)
list2.append(22)
list2.append(33);
list2.append(44);

// console.log(list1);

// console.log(zipList(list1,list2));

// let list3=zipList(list1,list2)
console.log(newZipList.zipList(list1,list2));


// console.log(list3);

// console.log(list1);



// list.insert('head')
// list.insert('2')
// list.insert('3')
// list.insert('tail')
// console.log(list.kth(1));
// console.log();




// list.insertBefore(3,5)

// list.insertAfter(3,5)
// list.toString()

// console.log(list.include('3'));


// console.log('list',list);