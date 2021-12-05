'use strict';

class Node {
  constructor(value,next) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.last = null;
    this.length = 0;
  }

  

  insert(value) {
    try {

      let node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.last = node;
      } 
      
      else {
        node.next = this.head;
        this.head = node;
      }
    } catch {
      console.log('Please enter a valid input');
    }
    this.length++;
  }

  includes(value) {
    try {

      let pointer = this.head;
      if (!this.head) {
        return false;
      } else {

        while (pointer.next) {
          if (pointer.value == value) {
            return true;
          }
          pointer = pointer.next;

          if (pointer.next == null && value == pointer.value) {
            return true;
          }
        }
        return false;
      }
    } catch {
      console.log('Please enter a valid input');
    }
  }

  toString() {
    try {

      let string = '';
      let pointer = this.head;

      while (pointer.next) {
        if (pointer.value == null || pointer.value == undefined) {
          string = string + `NULL -> `;
        } else {

          string = string + `{${pointer.value}} -> `
        }
        pointer = pointer.next;
        if (pointer.next == null) {
          string = string + `{${pointer.value}}`
        }
      }

      return string;
    } catch {
      console.log('An error occured');
    }

  }


  
 

  

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.last = node;
    } else {
      let pointer = this.head;
      while (pointer.next) {
        pointer = pointer.next;
      }
      pointer.next = node;
      this.last = node;
    }
    this.length++;
  }

  insertBefore(newValue, value) {
    const node = new Node(newValue);
    let pointer = this.head;

    if (value == this.head.value) {
      node.next = this.head;
      this.head = node;
    } else {

      while (pointer) {
        if (pointer.next.value == value) {
          node.next = pointer.next;
          pointer.next = node;
          break;
        }
        pointer = pointer.next;
      }
    }
  }


  insertAfter(newValue, value) {
    let node = new Node(newValue);
    let pointer = this.head;

    while (pointer) {

      if (pointer.value == value) {
        if(pointer.next == null){
          this.last = node;
        }
        node.next = pointer.next;
        pointer.next = node;
        break;
      }
      pointer = pointer.next;
    }
  }

 
  kth(num) {
    console.log('===========',num);
    console.log('this.length',this.length);
    // num = Math.abs(num);
    if (num >= this.length) return "Exception";
    if (num === this.length - 1) return this.head.value;
    if (num === 0) return this.tail.value;
    let current = this.head;
    console.log('current',current);

    for (let i = 1; i < this.length - num; i++) {
      current = current;
    }
    return current.value;
  }

  zip(list1, list2) {
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
    list1.lenght = list1.lenght + list2.lenght;
    return list1;
  }



 



}  

module.exports = LinkedList;
