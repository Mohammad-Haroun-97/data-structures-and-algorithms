"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {    // Mohammad Haroun 
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  enqueue(value) {
    let newNode = new Node(value); // Mohammad Haroun 

    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
      this.length++;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.length++;
    }}
  dequeue(pref) {
    if (this.front == null) {
      console.log(`the queue is empty`);  // Mohammad Haroun 
    }
    if (pref !== `dog` && pref !== `cat`) {
      return null;
    } else {
      const temp = this.front;
      this.front.next = this.front;
      temp.next = null;

      return temp;    // Mohammad Haroun 
    }
  }
}

const test = new AnimalShelter();
test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
test.enqueue(`cat`);

test.dequeue(`dog`);

console.log("test", test.rear);

module.exports = AnimalShelter;
