// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left 
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

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
        let queue = [];
        let list = [];
        let currentNode = this.root;
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            };
            if (currentNode.right) {
                queue.push(currentNode.right);
            };
        };
        return list;
    };

    breadthFirstSearchRecursive(queue, list) {
        if (!queue.length) return list;
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
        return this.breadthFirstSearchRecursive(queue, list);
    };

    isValidBST() {
        if (!this.root) return true;
        let queue = [{ node: this.root, min: null, max: null }];

        while (queue.length) {
            const { node, min, max } = queue.shift();

            if ((min != null && node.value <= min) || (max != null && node.value >= max)) {
                return false;
            };
            if (node.left) {
                queue.push({ node: node.left, min, max: node.value });
            };
            if (node.right) {
                queue.push({ node: node.right, min: node.value, max });
            };
        };
        return true;
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
console.log(tree.isValidBST());