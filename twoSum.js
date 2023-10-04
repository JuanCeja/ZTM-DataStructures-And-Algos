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
// function twoSum(nums, target) {
//     // Iterate through the array
//     for (let i = 0; i < nums.length; i++) {

//         // For each element, iterate through the rest of the array
//         for (let j = i + 1; j < nums.length; j++) {

//             // Check if the current pair of elements adds up to the target
//             if (nums[i] + nums[j] === target) {

//                 // Return the indices of the two numbers
//                 return [i, j];
//             }
//         }
//     }
//     // If no solution is found, return an empty array or handle the error as needed
//     return [];
// }

// ==== solution with O(n) time complexity ====
    function twoSum (arr, target) {
        // create a map to store the pair for target 
        // create a target pair number

        // use a loop to iterate the array

            // IF the value is not in the map store it with its indecy as the value

            // check to see if the map has the pair value to make the target
                // if so return the indices

        // return empty array if pair does not exist
    }

console.log(twoSum([2, 7, 11, 15], 9)); // output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // output: [1, 2]
console.log(twoSum([3, 3], 6)); // output: [0, 1]