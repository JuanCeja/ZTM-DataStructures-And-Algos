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


// ==== solution with O(n^2) time complexity ====
function twoSum1(nums, target) {
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

// ==== solution with O(n) time complexity ====
function twoSum2(arr, target) {
    // create an empty object to store numbers and their indices
    let map = {};

    // iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // calculate the difference between the target and the current number
        const complement = target - arr[i];

        // check if the complement is in the object
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }

        map[arr[i]] = i;
    }
    // return empty array if pair does not exist
    return [];
}

console.log(twoSum1([2, 7, 11, 15], 9)); // output: [0, 1]
console.log(twoSum1([3, 2, 4], 6)); // output: [1, 2]
console.log(twoSum1([3, 3], 6)); // output: [0, 1]
console.log('---')
console.log(twoSum2([2, 7, 11, 15], 9)); // output: [0, 1]
console.log(twoSum2([3, 2, 4], 6)); // output: [1, 2]
console.log(twoSum2([3, 3], 6)); // output: [0, 1]