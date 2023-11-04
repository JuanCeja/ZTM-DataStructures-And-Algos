// Merge sort is a popular and efficient sorting algorithm that uses a divide-and-conquer strategy to sort an array or list of elements. The algorithm works by recursively dividing the input into smaller sub-arrays until each sub-array contains only one element (making them inherently sorted). It then merges these smaller sub-arrays back together in a sorted order to produce a fully sorted array. The key idea is to repeatedly combine two sorted sub-arrays into a larger sorted sub-array until the entire array is sorted. Merge sort is known for its stability and consistent performance, making it a reliable choice for sorting large datasets.
//  ==== merge helper function ===
const merge = (arr1, arr2) => {
    let left = 0, right = 0;
    let mergedArray = [];
    while (left < arr1.length && right < arr2.length) {
        if (arr1[left] < arr2[right]) {
            mergedArray.push(arr1[left]);
            left++;
        } else {
            mergedArray.push(arr2[right]);
            right++;
        }
    }
    while (left < arr1.length) {
        mergedArray.push(arr1[left]);
        left++;
    }
    while (right < arr2.length) {
        mergedArray.push(arr2[right]);
        right++;
    }
    return mergedArray;
};

// console.log(mergeSort([17, 22, 21, 10, 399, 464, 6, 711, 8, 0, 16]));
console.log(merge([0, 2, 4, 6, 8, 10], [1, 3, 5, 7, 9]));