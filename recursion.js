// Recursion is a programming and mathematical concept where a function or a process calls itself in order to solve a problem by breaking it down into smaller, more manageable sub-problems. This technique is particularly useful for solving complex problems that can be expressed in terms of simpler, similar instances of the same problem. Recursion typically involves a base case, which defines the simplest scenario that can be solved directly, and a recursive case, where the problem is reduced in size and solved by applying the same function to the smaller sub-problems. Recursion is widely used in computer science, enabling elegant and concise solutions to a variety of problems, such as tree traversal, factorial calculation, and various sorting algorithms like quicksort and merge sort.

function findFactorialRecursive(number) {
    if (number <= 1) return 1;
    return findFactorialRecursive(number);
};

function findFactorialIteratively(number) {
    // create a variable to store the sum

    // use a for loop to iterate and multiply. work our way down from number
        // sum = number * i

    // return sum
};

// console.log(findFactorialRecursive(5));
console.log(findFactorialIteratively(5));