class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
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
        newNode.prev = current;
        current.next.prev = newNode;
        current.next = newNode;

        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let current = this.head;
        let removedNode;
        let currentIndex = 0;

        while (currentIndex < index - 1 && current.next) {
            current = current.next;
            currentIndex++;
        }

        removedNode = current.next;
        current.next = current.next.next;
        current.next.next.prev = current.prev.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;

        return removedNode;
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return this;
    }

    shift() {
        if (!this.head) return undefined;

        let prevHead = this.head;
        this.head = prevHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(1);
myLinkedList.insert(2, 99);
// myLinkedList.shift();
console.log(myLinkedList.printList());