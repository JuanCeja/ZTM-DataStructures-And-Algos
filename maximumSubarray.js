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

const maximumSubarray = (arr) => {
    // base case if arr has only single value
    if(arr.length === 1) return arr[0];

    // initialize variables to keep track of the maximum sum and the current sum
    let maxSum = arr[0]; // assume the first element is the maximum sum initially
    let currentSum = arr[0]; // start with the first element as the current sum

    // iterate through the array starting from the second element
    for(let i = 1; i < arr.length; i++) {
        // choose the larger value between the current element and the current element + current sum
        // this line determines wheter to start a new subarray or extend the previous one
        currentSum = Math.max(arr[i], arr[i] + currentSum);

        // update the maximum sum if the current sum is greater
        maxSum = Math.max(currentSum, maxSum);
    }

    // return the maximum sum found
    return maxSum;
}

console.log(maximumSubarray([-2,1,-3,4,-1,2,1,-5,4])); // output: 6
console.log(maximumSubarray([1])); // output: 1
console.log(maximumSubarray([5,4,-1,7,8])); // output: 23