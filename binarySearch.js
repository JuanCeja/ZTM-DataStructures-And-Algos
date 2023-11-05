// Binary search is an efficient algorithm for finding a specific element in a sorted list or array by repeatedly dividing the search space in half, reducing the number of possibilities with each comparison until the target is found or determined to be absent.

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === arr[mid]) {
            return true;
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};

console.log(binarySearch([0, 2, 4, 6, 7, 8, 9, 34, 678, 899, 1000], 10));