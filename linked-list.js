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
        let current = this.head;
        let removedNode;
        let currentIndex = 0;

        while(currentIndex < index - 1 && current.next) {
            current = current.next;
            currentIndex++;
        }

        removedNode = current.next;
        current.next = current.next.next;
        removedNode.next = null;
        this.length--;

        return removedNode;
    }

    pop() {
        if(!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return this;
    }

    shift() {
        // if there is only 1 item we set tail and head to null
        // create newHead variable
        // create current variable that points to head
        // newHeads pointer points to current heads next
        // set currents next to point at null
        // set head to newHead
        // decrease length
        // if length is 1 set head and tail to node
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(1);
myLinkedList.insert(2, 99);
myLinkedList.pop();
console.log(myLinkedList.printList());