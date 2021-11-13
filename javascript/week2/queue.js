const Node = require("./Node");

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      this.length += 1;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.length += 1;
      return this.front;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "The queue is Empty";
    }

    const temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    this.length -= 1;
    return temp.value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}
const queueTest=new Queue()


queueTest.enqueue(1)
queueTest.enqueue(2)
queueTest.enqueue(3)
// console.log(queueTest.front);

queueTest.dequeue()

console.log(queueTest.front);

module.exports = Queue;
