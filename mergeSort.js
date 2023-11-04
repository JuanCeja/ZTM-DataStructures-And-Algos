// Merge sort is a popular and efficient sorting algorithm that uses a divide-and-conquer strategy to sort an array or list of elements. The algorithm works by recursively dividing the input into smaller sub-arrays until each sub-array contains only one element (making them inherently sorted). It then merges these smaller sub-arrays back together in a sorted order to produce a fully sorted array. The key idea is to repeatedly combine two sorted sub-arrays into a larger sorted sub-array until the entire array is sorted. Merge sort is known for its stability and consistent performance, making it a reliable choice for sorting large datasets.

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
};

const merge = (left, right) => {
    let mergedArr = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            mergedArr.push(left[i]);
            i++
        } else {
            mergedArr.push(right[j]);
            j++
        }
    }
    while (i < left.length) {
        mergedArr.push(left[i]);
        i++;
    }
    while (j < right.length) {
        mergedArr.push(right[j]);
        j++;
    }
    return mergedArr;
};

console.log(mergeSort([17, 22, 21, 10, 399, 464, 6, 711, 8, 0, 16]))