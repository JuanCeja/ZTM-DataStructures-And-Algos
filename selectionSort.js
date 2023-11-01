// Selection sort is a simple sorting algorithm used to arrange elements in a list or array. It works by repeatedly finding the minimum (or maximum) element from the unsorted portion of the list and moving it to the beginning (or end) of the sorted portion. The algorithm divides the list into two parts: the sorted portion on the left and the unsorted portion on the right. It continues this process, incrementally building the sorted portion until the entire list is sorted. Selection sort is straightforward but not very efficient, as it has a time complexity of O(n^2), where n is the number of elements to be sorted. It is mainly used for educational purposes or on small datasets.

const selectionSort = (arr) => {

};

console.log(selectionSort([5, 4, 8, 2, 7, 6, 0, 1, 3, 9]));