'use strict';

// our data object
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

// our connection from one Vertex tothe other
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.vertices = new Set();
  }

  // adding a value to our adjency list
  addVertex(value) {
    let payload = new Vertex(value);
    this.adjacencyList.set(payload, []);
    this.vertices.add(payload);
    // not typical to return a vertex when you add a vertex, but need to reference vertex later.
    return payload;
  }

  // add method should specify direct vs undirected, adding a connection between vertices
  addDirectEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('Vertex Error');
    }
    // get adjacency list
    let neighbors = this.adjacencyList.get(startVertex);
    let newEdge = new Edge(endVertex, weight);
    neighbors.push(newEdge);
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('getNeighbor error: invalid vertex');
    }
    // I don't want to mutate this array
    return [...this.adjacencyList.get(vertex)];

  }

  

  getNodes() {
    let nodes = [];
    this.adjacencyList.forEach((value, key) => {
      nodes.push(key);
    });

    if(nodes.length === 0) return null;

    return nodes;
  }

  size() {
    return this.vertices.size;
  }
}

module.exports = Graph;