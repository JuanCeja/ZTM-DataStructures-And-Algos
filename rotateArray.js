// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

const reverseArr = (start, end, nums) => {

};

const rotate = (nums, k) => {
    // first we reverse the complete array
    nums.reverse();

    // we create a helper function that accepts the array, starting, and ending
    reverseArr(nums[0], nums[k-1], nums);

    // then we revere the left side of the array up to the k-th element
    reverseArr(nums[k], nums[nums.length -1], nums);

    // then we reverse the right side of the array after the k-th element
    return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]