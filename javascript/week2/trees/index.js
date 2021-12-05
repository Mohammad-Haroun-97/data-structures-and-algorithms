'use strict'


const BinaryTree=require("./lib/BinaryTree")
const BinarySearchTree=require('./lib/binarySearchTree')
const Node=require('./lib/Node')
const fizzBuzz=require('./lib/fizzBuzz')
const graphiz=require('./lib/graphiz')




const bt=new BinaryTree()
const bt2=new BinaryTree()


bt.root=new Node( 1 , new Node( 2, new Node(3),new Node(4)),   new Node( 5, new Node(7),new Node(15)))

// bt.root=new Node( 'file' , new Node( "2", new Node("folder"),new Node("folder")),   new Node( "5", new Node('folder'),new Node("15")))

// bt2.root=new Node( 'folder' , new Node( "Folder", new Node("5"),new Node("4")),   new Node( "5", new Node('folder'),new Node("15")))

console.log(bt.sumOdd());
const BST=new BinarySearchTree()



// console.log(bt.comparingFiles(bt2));

// console.log(bt.inOrder());
// console.log(bt.preOrder());


// BST.adding(30)
// BST.adding(1)
// BST.adding(12)
// BST.adding(15)
// BST.adding(6)
// BST.adding(33)
// BST.adding(7)

// console.log(BST.root.left.right.left.right);
// console.log(bt.fizzBuzz()); 

// console.log('ffffffffffffffffff',fizzBuzz(bt.root)); 

// console.log(BST.contain(12));
// console.log(BST.contain(4));
// console.log(BST.contain(7));


// console.log(graphiz(BST.root,'./test1.dot'));