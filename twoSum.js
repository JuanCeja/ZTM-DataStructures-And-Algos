// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target) {
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {

        // For each element, iterate through the rest of the array
        for (let j = i + 1; j < nums.length; j++) {

            // Check if the current pair of elements adds up to the target
            if (nums[i] + nums[j] === target) {

                // Return the indices of the two numbers
                return [i, j];
            }
        }
    }
    // If no solution is found, return an empty array or handle the error as needed
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // output: [1, 2]
console.log(twoSum([3, 3], 6)); // output: [0, 1]