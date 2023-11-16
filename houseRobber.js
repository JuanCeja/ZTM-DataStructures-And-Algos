// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.


// Example 2:
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

const rob = (nums) => {
    // create base case if nums is less than 2 return the single item
    // create an array to store max loot
    // store the our first nums element in the first index of our dp array
    // in dp[2] store the max of the first 2 houses
    // use a loop to iterate starting at 2
        // create a new max for the next index in dp. choosing from our last dp element OR our last looted house plus the current loot
    // return the last item in our dp array which should be our max loot
};

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([2, 7, 3, 1, 4, 2, 1, 8])); // 19