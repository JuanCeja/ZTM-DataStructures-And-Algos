// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

function merge(nums1, nums2) {
    // create a new array to return
    // create 2 pointers 1 for each array
    let mergedArray = [];
    let left = 0;
    let right = 0;

    while (left < nums1.length && right < nums2.length) {
        if (nums1[left] < nums2[right]) {
            mergedArray.push(nums1[left]);
            left++
        } else {
            mergedArray.push(nums2[right]);
            right++
        }
    }

    while (left < nums1.length) {
        mergedArray.push(nums1[left]);
        left++;
    }

    while (right < nums2.length) {
        mergedArray.push(nums2[right]);
        right++;
    }


    // return our mergedArray
    return mergedArray;
};

console.log(merge([1, 2, 3], [2, 5, 6])); // [1,2,2,3,5,6]