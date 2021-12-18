# Graphs

## Problem Domain
Create a graph. The graph should contains an `add node method` (which adds a node to the graph), an `add edge method` (which adds a new edge between two nodes in the graph), a `get nodes method` (which returns all the nodes in the graph as a set), a `get neighbors method` (which returns a collection of edges connected to the given node), a `size method` (which returns the total number of nodes in the graph), a `breadth first traversal method` (which returns a collection of nodes in the order they were visited), a `depth first traversal method` (which returns a collection of nodes in their pre-order depth-first traversal order). Includes extensive test suite.

## Inputs / Outputs

**Add Node**

Input: value
Output: added node

**Add Edge**

Input: 2 nodes to be connected by the edge, weight (optional)
Output: none

**Get Nodes**

Input: none
Output: all of the nodes in the graph as a set

**Get Neighbors**

Input: node
Output: collection of edges connected to the given node

**Size**

Input: node
Output: total number of nodes in the graph



## Efficiency

**Add Node**

Time complexity: O(1)  

**Add Edge**

Time complexity: O(1)  

**Get Nodes**

Time complexity: O(n)  

**Get Neighbors**

Time complexity: O(n)

**Size**

Time complexity: O(n)



## Solution Code

[index.js](./graph.js)

## Test 
[test.js](__test__/graph.test.js)


