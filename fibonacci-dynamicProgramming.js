// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. In dynamic programming, the algorithm is optimized using memoization. This involves storing previously calculated Fibonacci numbers to avoid redundant computations. By checking the cache before calculations, the algorithm improves efficiency, particularly for larger indices.

const fibonacci = (n) => {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibonacciDP = (n) => {
    let cache = {};
    const fib = (n) => {
        if (cache[n]) {
            return cache[n]
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    };
    return fib(n);
};

console.log(fibonacci(6));
console.log(fibonacciDP(6));