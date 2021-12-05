"use strict";

class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    let output = [];

    function traverse(node) {
      output.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return output;
  }

  inOrder() {
    let output = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      output.push(node.value);

      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return output;
  }

  postOrder() {
    let output = [];
    function traverse(node) {
      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
      output.push(node.value);
    }
    traverse(this.root);
    return output;
  }

  breadthFirstSearch() {
    if (!this.root) {
      return "empty";
    }
    let queue = [this.root];

    console.log("queue", queue);

    let result = [];
    while (queue.length > 0) {
      let item = queue.shift();
      console.log("item", item);
      let value = item.value;
      console.log(value);
      result.push(value);

      if (item.left) {
        queue.push(item.left);
      }

      if (item.right) {
        queue.push(item.right);
      }
    }
    return result;
  }

  sumOdd() {
    let sum = 0;
    let output = [];
    if (!this.root) {
      return null;
    }

    function traverse(node) {
      if (parseInt(node.value) % 2 !== 0) {
        output.push(node.value);
      }
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    for (let index = 0; index < output.length; index++) {
      sum = sum + output[index];
    }

    return sum;
  }

  comparingFiles(tree2) {
    let array1 = this.preOrder();
    let array2 = tree2.preOrder();

    let numberOfFiles1 = 0;
    let numberOfFiles2 = 0;

    for (let index = 0; index < array1.length; index++) {
      if (array1[index].toLowerCase() !== "folder") {
        numberOfFiles1 = numberOfFiles1 + 1;
      }
    }

    for (let index = 0; index < array2.length; index++) {
      if (array2[index].toLowerCase() !== "folder") {
        numberOfFiles2 = numberOfFiles2 + 1;
      }
    }

    return numberOfFiles1 === numberOfFiles2;
  }
}

module.exports = BinaryTree;
