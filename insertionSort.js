// Insertion sort is a simple and efficient sorting algorithm that builds the final sorted array one element at a time. It works by repeatedly taking an unsorted element and inserting it into its correct position within the already sorted part of the array. The algorithm starts with a single element (considered already sorted) and iteratively expands the sorted portion by inserting each subsequent element in its proper order. Insertion sort is particularly useful for small datasets or nearly sorted arrays due to its relatively low time complexity when compared to other sorting algorithms.

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            } else {
                break;
            }
        }
    }
    return arr;
};

console.log(insertionSort([5, 4, 8, 2, 7, 6, 0, 1, 3, 9]));