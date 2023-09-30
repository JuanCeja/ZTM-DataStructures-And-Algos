// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

function merge (nums1, nums2) {
    // create a new array to return
    // create 2 pointers 1 for each array

    // compare the values of the index of the pointer in each array

    // create a while loop that tracks pointers

        // if values are === push value from nums1 and move up pointer from nums1 up
        // if left nums1 pointer is > nums 2 pointer push num2 value to our return array and move up nums1 pointer
        // if left nums2 pointer is > nums 1 pointer push num1 value to our return array and move up nums2 pointer

    // return our mergedArray
};

console.log(merge([1,2,3], [2,5,6]));