// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicate = (nums) => {
    // Create an empty Set to store unique values
    const uniqueSet = new Set();

    // Iterate through the array
    for (const num of nums) {
        
        // If the current element is already in the Set, return true
        if (uniqueSet.has(num)) {
            return true;
        }

        // Otherwise, add the current element to the Set
        uniqueSet.add(num);
    }

    // If the loop completes without finding any duplicates, return false
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // output: true
console.log(containsDuplicate([1, 2, 3, 4])); // output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // output: true