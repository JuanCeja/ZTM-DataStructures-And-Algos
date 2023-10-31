// Recursion is a programming and mathematical concept where a function or a process calls itself in order to solve a problem by breaking it down into smaller, more manageable sub-problems. This technique is particularly useful for solving complex problems that can be expressed in terms of simpler, similar instances of the same problem. Recursion typically involves a base case, which defines the simplest scenario that can be solved directly, and a recursive case, where the problem is reduced in size and solved by applying the same function to the smaller sub-problems. Recursion is widely used in computer science, enabling elegant and concise solutions to a variety of problems, such as tree traversal, factorial calculation, and various sorting algorithms like quicksort and merge sort.

function findFactorialRecursive(number) {
    if (number === 1) return 1;
    return number * findFactorialRecursive(number - 1)
};

function findFactorialIteratively(number) {
    let sum = 1;
    for (let i = number; i > 0; i--) {
        sum = sum * i;
    }
    return sum;
};
// console.log(findFactorialRecursive(5));
// console.log(findFactorialIteratively(5));


// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 -> 2 + 3
function fibonacciIterative(n) {
    if (n < 2) {
        return n;
    }
    fibPrev = 0;
    fibCurr = 1;
    for (let i = 2; i <= n; i++) {
        fibNext = fibPrev + fibCurr;
        fibPrev = fibCurr;
        fibCurr = fibNext;
    }
    return fibCurr;
};

function fibonacciRecursively(n) {
    if (n < 2) return n;

    return fibonacciRecursively(n - 1) + fibonacciRecursively(n - 2);
};
console.log(fibonacciIterative(7));
console.log(fibonacciRecursively(7));


//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {

};

function reverseString2(str) {
    let charArray = str.split("");
    let left = 0;
    let right = charArray.length - 1;
    while (left <= right) {
        [charArray[left], charArray[right]] = [charArray[right], charArray[left]];
        left++;
        right--;
    }
    return charArray.join("");
};

console.log(reverseString("Juan Ceja Staff Software Engineer"));
console.log(reverseString2("Juan Ceja Staff Software Engineer"));