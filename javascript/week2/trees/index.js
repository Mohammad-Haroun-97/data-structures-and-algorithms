'use strict'


const BinaryTree=require("./lib/BinaryTree")
const BinarySearchTree=require('./lib/binarySearchTree')
const Node=require('./lib/Node')

const bt=new BinaryTree()


bt.root=new Node( 1 ,new Node( 2, new Node(3),new Node(4)),   new Node( 5, new Node(6),new Node(7)))

const BST=new BinarySearchTree()



// console.log(bt.postOrder());
// console.log(bt.inOrder());
// console.log(bt.preOrder());


BST.adding(30)
BST.adding(7)
BST.adding(12)
BST.adding(15)
BST.adding(6)
BST.adding(33)
BST.adding(1)

console.log(BST.root);

console.log(BST.contain(30));
console.log(BST.contain(4));
console.log(BST.contain(0));