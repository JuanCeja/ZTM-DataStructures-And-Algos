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

// === Helper Function ===
const reverseArr = (start, end, nums) => {
    // Create pointers for swapping elements.
    let left = start;
    let right = end;

    // Swap elements between 'left' and 'right' pointers.
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]; // Swap values.
        left++; // Move the left pointer to the right.
        right--; // Move the right pointer to the left.
    }

    // Return the modified array.
    return nums;
};

const rotate = (nums, k) => {
    // Ensure 'k' is within the range of array length.
    k = k % nums.length;

    // Base cases: If the array has 0 or 1 elements, or 'k' is greater than the array length, return the original array.
    if (nums.length < 2) return nums;
    if (k > nums.length) return nums;

    // Step 1: Reverse the entire array.
    nums.reverse();

    // Step 2: Reverse the left side of the array (0 to 'k-1' elements).
    reverseArr(0, k - 1, nums);

    // Step 3: Reverse the right side of the array (from 'k' to the end).
    reverseArr(k, nums.length - 1, nums);

    // Return the rotated array.
    return nums;
};


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]