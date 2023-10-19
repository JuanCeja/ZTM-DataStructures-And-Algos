class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if(!this.first) return null;
        if (this.length === 1) {
            this.first = null;
            this.last = null;
            this.length--;
            return this;
        }
        let removedNode = this.first;
        this.first = this.first.next;
        removedNode.next = null;
        this.length--;
        return removedNode;
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }
}

let myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log('removed', myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue);