const Node = require("./Node");

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    if (this.isEmpty()) {
      const newNode = new Node(value);
      this.top = newNode;
    } else {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log("No Nodes are left in your stack");
      return false;
    }

    const temp = this.top; // keep a reference of our top node for removal later
    this.top = this.top.next;
    temp.next = null; // removal of the last added node in the stack
    return temp.value;
  }

  peek() {
    if (this.isEmpty()) {
      return " no Nodes in the stack";
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

module.exports = Stack;
