// Quick Sort is a fast and efficient sorting algorithm that uses a divide-and-conquer approach. It works by selecting a "pivot" element from the array and rearranges the elements so that all items smaller than the pivot are on the left, and all items larger than the pivot are on the right. This process is applied recursively to the sub-arrays on both sides of the pivot until the entire array is sorted. Quick Sort has an average time complexity of O(n log n) and is widely used for sorting large datasets.

const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start + 1; i < end + 1; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
        }
    }
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
    return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
};

console.log(quickSort([17, 22, 21, 10, 399, 464, 6, 711, 8, 0, 16]));