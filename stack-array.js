class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        let removed = this.array.pop();
        return removed;
    }

    isEmpty() {
        return this.array.length === 0 ? true : false;
    }
}

let myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
console.log(myStack.pop());
console.log(myStack.isEmpty());
console.log('peek', myStack.peek());
console.log(myStack);