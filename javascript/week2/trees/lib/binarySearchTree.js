"use strict";
const BinaryTree = require("./BinaryTree");
const Node = require("./Node");


class BinarySearchTree extends BinaryTree {
  constructor(value) {
    super(value);
  }

  adding(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this.root;
    }

    function recursionAdding(node) {
      if (value < node.value) {
        if (node.left) {
          //     هل ما زالت موجودة ال node.left ?

          recursionAdding(node.left);
        } else {
          node.left = newNode;
        }
      }  if (value > node.value) {
        if (node.right) {
          recursionAdding(node.right);
        } else {
          node.right = newNode;
        }
      }
    }
    recursionAdding(this.root);
  }

  contain(value) {

    function recursionCoontain(node) {
      if (node.value === value) {
        return true;
      }

      if (value < node.value) {
        if (node.left) {
          return recursionCoontain(node.left);
        }else{
          return false 
        }
      }
      else{
        if (node.right) {
          return recursionCoontain(node.right);
          }else{
             return false
          }
      }
    }
    

    return recursionCoontain(this.root);
  }

  getMaximum() {
    if (this.isEmpty()) {
        return 'The tree is empty '
    }
    let maximum = this.root.value;
    let _recourse = (node) => {
        if (node.value > maximum) {
            maximum = node.value;
        }
        if (node.left) {
            _recourse(node.left);
        }
        if (node.right) {
            _recourse(node.right);
        }
    }
    _recourse(this.root);
    return maximum
}

isEmpty(){
  return this.root===null 
    
}




}

module.exports = BinarySearchTree;
