// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

const maxProfit = (nums) => {
    // create 2 variables. min and max
    let minIndex;
    let maxIndex;
    let min = Infinity;
    let max = 0;

    // iterate through the arr and grab the smallest value. store the index in min
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] < min) {
            min = nums[i];
            minIndex = i;
        }
    };

    // if min is the last index return 0
    if(minIndex === nums.length - 1) return 0;

    // iterate the arr 1 more time and find the max and save it in max
    for(let i = minIndex + 1; i < nums.length; i++) {
        if(nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }
    // return max - min
    return max - min;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0