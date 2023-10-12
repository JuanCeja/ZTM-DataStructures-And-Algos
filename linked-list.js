class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let current = this.head;
        while (current !== null) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }

    insert(index, value) {
        let newNode = new Node(value);

        if (index >= this.length) return this.append(value);
        if (index <= 0) return this.prepend(value);


        let current = this.head;
        let currentIndex = 0;

        while (currentIndex < index - 1) {
            current = current.next;
            currentIndex++;
        }

        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        // make 2 variables for current and removedNode
        let current = this.head;
        let removedNode;
        let currentIndex = 0;

        // iterate to the node previous of the node we want to delete
        while(currentIndex < index - 1 && current.next) {
            current = current.next;
            currentIndex++;
        }

        // 1 reference our removedNode variable to the node we wish to delete
        // 2 move our current nodes pointer to the next.next node
        // 3 point the pointer from the node we wish to delete to null
        // 4 decrease our length
        removedNode = current.next;
        current.next = current.next.next;
        removedNode.next = null;
        this.length--;

        return removedNode;
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(1);
myLinkedList.insert(2, 99);
console.log(myLinkedList.remove(3));
console.log(myLinkedList.printList());