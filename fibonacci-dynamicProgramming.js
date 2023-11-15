// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. In dynamic programming, the algorithm is optimized using memoization. This involves storing previously calculated Fibonacci numbers to avoid redundant computations. By checking the cache before calculations, the algorithm improves efficiency, particularly for larger indices.

const fibonacci = (n) => {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(6));