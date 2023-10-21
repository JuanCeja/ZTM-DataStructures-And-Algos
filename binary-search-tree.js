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
        while(current) {
            if(current.value === newNode.value) {
                return "Node already exists";
            }
            if(newNode.value < current.value) {
                if(!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
        return this;
    }

    lookup(value) {

    }

    remove(value) {

    }
}

const tree = new BinarySearchTree();
tree.insert(7);
tree.insert(9);
tree.insert(3);
tree.insert(6);
tree.insert(2);
tree.insert(8);
tree.insert(11);
console.log(tree);