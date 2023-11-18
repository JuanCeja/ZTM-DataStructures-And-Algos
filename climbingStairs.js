// You are climbing a staircase.It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps.In how many distinct ways can you climb to the top ?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const climbStairs = (n) => {
    // we set a base case for 1
    // we create an array to store the amount of ways per steps
    // iterate until we reach the target
        // the current iteration is the number of steps. the number of ways to make it to the target is the number of ways of its 2 previous targets
    // return the last number in the array which should be our target
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3