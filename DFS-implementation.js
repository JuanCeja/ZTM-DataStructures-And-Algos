// Depth-First Search (DFS) is an algorithm used in computer science and graph theory to traverse or search through a data structure, typically a tree or a graph. It explores as far down a branch of the data structure as possible before backtracking.

// In a DFS, the algorithm starts at a specific node (or vertex) and explores as deeply as possible along each branch, visiting all the children of a node before moving on to the next sibling node. This exploration continues recursively until there are no unvisited nodes left. Once it reaches a leaf node or a node with no unvisited neighbors, it backtracks to the previous node and explores any unvisited branches from that point. This process continues until all nodes in the data structure have been visited.

// DFS is commonly used in various applications, such as graph traversal, finding connected components, solving puzzles like mazes, and determining paths between nodes in a graph. There are two primary variations of DFS: recursive DFS and iterative DFS, each with its own advantages and use cases.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    };

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) this.root = newNode;

        let current = this.root;
        while (current) {
            if (value === current.value) {
                return "node already exists";
            }
            else if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            };
        };
    };

    lookup(value) {
        if (!this.root) return false;
        if (this.root.value === value) return true;

        let current = this.root;

        while (current) {
            if (current.value === value) return true;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    };

    depthFirstSearchInOrder() {
        
    };

    depthFirstSearchPostOrder() {

    };

    depthFirstSearchPreOrder() {

    };


    // Helper function for tree traversal
    inOrderTraversal(node, depth, prefix, isLeft, callback) {
        if (node === null) return;

        const marker = isLeft ? '├── ' : '└── ';
        callback(`${depth ? '│   '.repeat(depth - 1) + marker : ''}${node.value}`);

        this.inOrderTraversal(node.left, depth + 1, prefix, true, callback);
        this.inOrderTraversal(node.right, depth + 1, prefix, false, callback);
    };

    // Display the BST nicely
    display() {
        const lines = [];
        const printNode = (node) => lines.push(node);

        this.inOrderTraversal(this.root, 0, '', false, printNode);
        lines.forEach((line) => {
            console.log(line);
        });
    };
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
tree.display();