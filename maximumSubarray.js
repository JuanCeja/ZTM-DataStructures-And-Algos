// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

function maximumSubArray(nums) {
    // Initialize two variables to keep track of the current maximum sum and the overall maximum sum.
    let currentMax = nums[0];  // Initialize with the first element of the array.
    let overallMax = nums[0];  // Initialize with the first element of the array.

    // Loop through the array starting from the second element (index 1).
    for (let i = 1; i < nums.length; i++) {
        // Calculate the current maximum sum by taking the maximum of the current element
        // and the sum of the current element and the previous current maximum.
        currentMax = Math.max(nums[i], currentMax + nums[i]);

        // Update the overall maximum sum if the current maximum sum is greater.
        overallMax = Math.max(overallMax, currentMax);
    }

    // Return the overall maximum sum, which represents the largest sum subarray.
    return overallMax;
}


console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // output: 6
console.log(maximumSubArray([1])); // output: 1
console.log(maximumSubArray([5, 4, -1, 7, 8])); // output: 23