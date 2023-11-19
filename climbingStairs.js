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
    // create an array to store our combinations
    // we initialize index 1 to 1 and index 2 to 2 because the amount of combinations that can be created at those steps
    // we create a loop to go up to n 
        // the current step is always going to have the total combinations of its previous 2 steps. so we can add it
    // we return the last index in the array
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(7)); // 5