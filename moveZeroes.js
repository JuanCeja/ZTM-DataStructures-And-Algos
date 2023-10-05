// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

const moveZeroes = (nums) => {
    // create var to store index to make a swap to

    // iterate the nums array

        // IF the nums array value != 0 swap it with the index then increase index

    // use second loop to iterate the array starting from the index

        // replace every value with a 0

    // return our nums array
};

console.log(moveZeroes([0,1,0,3,12])) // output: [1,3,12,0,0]
console.log(moveZeroes([0])) // output: [0]