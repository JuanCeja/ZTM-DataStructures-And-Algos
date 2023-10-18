// In JavaScript, a "stack" typically refers to the call stack, which is a data structure that manages the execution context of functions in a program. When a function is called, a new execution context is pushed onto the stack, and when the function finishes executing, its context is popped from the stack. This process ensures that functions are executed in a last-in, first-out (LIFO) order. The call stack is essential for tracking function calls, managing scope, and handling function return values in JavaScript programs. It plays a crucial role in controlling the flow of code execution and preventing issues like stack overflow errors.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    peek() {

    }

    push(value) {

    }

    pop() {

    }

    isEmpty() {

    }
}
