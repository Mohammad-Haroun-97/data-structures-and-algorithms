# Trees
## verfication: 
![](Verfication.PNG)


* A tree data structure can be defined recursively as a collection of nodes, where each node is a data structure consisting of a value and a list of references to nodes. The start of the tree is the "root node" and the reference nodes are the "children". No reference is duplicated and none points to the root.

# Challenge
New Implementation

# Approach & Efficiency
* Node
* Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

# Binary Tree
* Create a Binary Tree class Define a method for each of the depth first traversals:

* pre order
* in order
post order which returns an array of the values, ordered appropriately. Any exceptions or errors that come from your code should be semantic, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
# Binary Search Tree
* Create a Binary Search Tree class This class should be a sub-class (or your languages equivalent) of the Binary Tree * Class, with the following additional methods:

## Add
* Arguments: value
* Return: nothing Adds a new node with that value in the correct location in the binary search tree.
## Contains
* Argument: value
* Returns: boolean indicating whether or not the value is in the tree at least once.
* API
* Binary Tree
* DFSPreOrder
* DFSInOrder
* DFSPostOrder
# Binary Search Tree
* insert
* find