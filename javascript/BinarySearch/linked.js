'use strict'

class Node {
    constructor(val) {
        this.data = val;
        
        this.next = null;
    }
}

// Mohammad Haroun
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    };
    reverse(node) {
        let previous= null;
        let current = node.head;
        let next = null;
        let head = node.head; 
        while (current) {
          next = current.next;
          current.next = previous;
          previous = current;
          current = next;
        }
        node.head = previous;
        node.tail = head;
        return node;
    }
}
const linkedList = new LinkedList();
  linkedList.appendNode(1);
  linkedList.appendNode(2);
  linkedList.appendNode(3);


  reverse(linkedList);
//   Mohammad Haroun


 



  