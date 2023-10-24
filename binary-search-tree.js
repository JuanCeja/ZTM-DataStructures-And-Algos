// A Binary Search Tree (BST) is a tree-like data structure where each node has at most two children: a left child and a right child. Values in the tree are organized so that all values in the left subtree are less than or equal to the node's value, and all values in the right subtree are greater. This structure enables efficient searching, insertion, and deletion operations.

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        }

        let current = this.root;
        while (current) {
            if (current.value === newNode.value) {
                return "Node already exists";
            }
            if (newNode.value < current.value) {
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
            }
        }
    }

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
    }

    remove(value) {
        // we create our variables to iterate

        // we loop until we find our target

            // if our target is found 

                // we check if the current node has any children
                    // if it does we connect its right child to the current nodes parent
                    // if it only has a left child we connect the left child to the current nodes parent

                // if no children exists we just remove the target node and return

        // if our target is never found we just return
    }

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
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
console.log(tree.insert(20));
console.log(tree.lookup(170));
tree.display();