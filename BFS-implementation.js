// Breadth-First Search (BFS) is a graph traversal algorithm used in computer science to explore and analyze the structure of a graph or tree. It starts at a specified node (or vertex) and systematically explores all its neighboring nodes at the current level before moving on to the next level. BFS operates in a breadth-first manner, meaning it explores nodes level by level, ensuring that all nodes at a given level are visited before moving deeper into the graph. This algorithm is often used for tasks like finding the shortest path in an unweighted graph and for discovering the connectivity of nodes in a graph. It can be implemented using a queue data structure to keep track of the nodes to be visited next.

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

    breadthFirstSearch() {
        if (!this.root) return null;
        let currentNode = this.root;
        let returnList = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            returnList.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        };
        return returnList;
    };

    // Helper function for tree traversal
    inOrderTraversal(node, depth, prefix, isLeft, callback) {
        if (node === null) return;

        const marker = isLeft ? '├── ' : '└── ';
        callback(`${depth ? '│   '.repeat(depth - 1) + marker : ''}${node.value}`);

        this.inOrderTraversal(node.left, depth + 1, prefix, true, callback);
        this.inOrderTraversal(node.right, depth + 1, prefix, false, callback);
    }

    // Display the BST nicely
    display() {
        const lines = [];
        const printNode = (node) => lines.push(node);

        this.inOrderTraversal(this.root, 0, '', false, printNode);
        lines.forEach((line) => {
            console.log(line);
        });
    }
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
console.log(tree.lookup(170));
tree.display();
console.log(tree.breadthFirstSearch());