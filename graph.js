// A graph data structure is a mathematical and computational representation of a set of objects, called nodes (or vertices), connected by a collection of links (or edges). Graphs are used to model and analyze relationships between various entities or elements. They are composed of two fundamental components:

// 1. Nodes (Vertices): Nodes represent the entities or elements within the graph. Each node can store data associated with the entity it represents.

// 2. Edges (Links): Edges define the connections or relationships between nodes. They can be directional (directed) or undirectional (undirected) and may or may not have associated weights or values.

// Graphs are versatile and find applications in various domains, including computer science, mathematics, social networks, transportation networks, and more. They come in different types, such as directed graphs (digraphs), undirected graphs, weighted graphs, and more, each serving specific purposes in modeling and solving real-world problems.

// ==== GRAPH ====
//      2 ------- 0
//     / \
//    /   \
//   1 --- 3

// Edge List - an edge list can be an array that holds arrays itself. The child arrays simply state the connections. An edge list simply shows the connection. 
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List - In the adjacent list the index is the node and the values in the array at its index is the nodes it is connected to.  
const graph1 = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix - in a adjacent matrix the array displays if the node has a connection to that node. For example, node 0 has no connection to 0, 1, or 3 but does have a connection to node 2 hence why it has a 1.
const graph2 = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacencyList = {};
    }

    addVertex(node) {

    }

    addEdge(node1, node2) {

    }

    showConnections() {
        
    }
}