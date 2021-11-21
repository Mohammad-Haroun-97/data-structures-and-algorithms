'use strict';
const BinarySearchTree=require('./binarySearchTree')
const BinaryTree=require('./BinaryTree')
const Node = require('./Node')


it('Can successfully instantiate an empty BSt', () => {
  let BT = new BinaryTree();
  expect(BT).toBeDefined();
});

it('Can successfully instantiate a BinaryTree with a single root node', () => {
  let BT = new BinaryTree();
  BT.root = new Node(1)
  expect(BT).toBeDefined();
  expect(BT.root.value).toBe(1);
});

it('Can successfully add a left child and right child to a single root node', () => {
  let BT = new BinaryTree();
  BT.root = new Node(1,new Node(2))
  expect(BT).toBeDefined();
  expect(BT.root.left.value).toBe(2);
});

it('Can successfully return a collection from a preorder traversal', () => {
  let BT = new BinaryTree();
  BT.root = new Node(1, new Node(4, new Node(7), new Node(2)), new Node(3, new Node(9), new Node(6)));
  expect(BT).toBeDefined();
  expect(BT.root.left.value).toBe(4);  [1, 4, 7, 2,3, 9, 6]
  expect(BT.preOrder()).toStrictEqual([1, 4, 7, 2, 3, 9, 6]);
});

it('Can successfully return a collection from an inorder traversal', () => {
  let BT = new BinaryTree();
  BT.root = new Node(1, new Node(4, new Node(7), new Node(2)), new Node(3, new Node(9), new Node(6)));
  expect(BT).toBeDefined();
  expect(BT.root.left.value).toBe(4);
  expect(BT.inOrder()).toStrictEqual([7, 4, 2, 1,9, 3, 6]);
});

it('Can successfully return a collection from a postorder traversal', () => {
  let BT = new BinaryTree();
  BT.root = new Node(1, new Node(4, new Node(7), new Node(2)), new Node(3, new Node(9), new Node(6)));
  expect(BT).toBeDefined();
  expect(BT.root.left.value).toBe(4);
  expect(BT.postOrder()).toStrictEqual([7, 2, 4, 9,6, 3, 1]);
});
it('Can successfully return the Maximum value in the BinaryTree', () => {
  let BT = new BinarySearchTree();
  BT.root = new Node(2, new Node(7, new Node(2), new Node(6,new Node(5,new Node(11)))), new Node(5, new Node(9), new Node(4)));
  expect(BT).toBeDefined();
  expect(BT.root.left.value).toBe(7);
  expect(BT.getMaximum()).toBe(11);
});
it('Can unsuccessfully return the Maximum value in the BinaryTree', () => {
  let BT = new BinarySearchTree();
  BT.root = new Node(2, new Node(7, new Node(2), new Node(6,new Node(5,new Node(11)))), new Node(5, new Node(9), new Node(4)));
  expect(BT.getMaximum()).not.toBe(5);
});
it('test the is empty', () => {
  let BT = new BinaryTree();
  expect(BT.root).toBeFalsy();
});
it('Can successfully instantiate an empty BSt', () => {
  let bst = new BinarySearchTree();
  expect(bst).toBeDefined();
});

it('Can successfully add to BST with a single root node', () => {
  let bst = new BinarySearchTree();
  bst.adding(1)
  expect(bst.root.value).toBe(1);
});

it('Can successfully push onto a bst', () => {
    let bst = new BinarySearchTree();
    bst.adding(1)
    bst.adding(2)
    expect(bst).toBeDefined();
    expect(bst.root.value).toBe(1);
    expect(bst.root.right.value).toBe(2);
  });
  
  it('Can successfully push onto a bst', () => {
    let bst = new BinarySearchTree();
    bst.adding(23)
    bst.adding(8)
    bst.adding(4)
    bst.adding(42)
    bst.adding(85)
    bst.adding(105)
    expect(bst.contain(4)).toBeTruthy()
  });
  it('Can successfully push onto a bst', () => {
    let bst = new BinarySearchTree();
    bst.adding(23)
    bst.adding(8)
    bst.adding(4)
    bst.adding(42)
    bst.adding(85)
    bst.adding(105)
    expect(bst.getMaximum()).toBe(105)
  });
  


