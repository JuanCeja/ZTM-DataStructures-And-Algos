// Merge sort is a popular and efficient sorting algorithm that uses a divide-and-conquer strategy to sort an array or list of elements. The algorithm works by recursively dividing the input into smaller sub-arrays until each sub-array contains only one element (making them inherently sorted). It then merges these smaller sub-arrays back together in a sorted order to produce a fully sorted array. The key idea is to repeatedly combine two sorted sub-arrays into a larger sorted sub-array until the entire array is sorted. Merge sort is known for its stability and consistent performance, making it a reliable choice for sorting large datasets.

//  ==== merge helper function ===
const merge = (arr1, arr2) => {
    let p1 = 0;
    let p2 = 0;
    let mergedArr = [];
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] < arr2[p2]) {
            mergedArr.push(arr1[p1]);
            p1++;
        } else {
            mergedArr.push(arr2[p2]);
            p2++;
        }
    };
    while (p1 < arr1.length) {
        mergedArr.push(arr1[p1]);
        p1++;
    };
    while (p2 < arr2.length) {
        mergedArr.push(arr2[p2]);
        p2++;
    };
    return mergedArr;
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
};

console.log(mergeSort([17, 22, 21, 10, 399, 464, 6, 711, 8, 0, 16]));
// console.log(merge([17, 22, 25, 100, 399], [4, 6, 17, 71, 85, 110, 116]));