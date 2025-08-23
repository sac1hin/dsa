// Problem:  Given an array of size n, sort the array using Merge Sort.

// Examples:

// Example 1:
// Input: N=5, arr[]={4,2,1,6,7}
// Output: 1,2,4,6,7,

// Example 2:
// Input: N=7,arr[]={3,2,8,5,1,4,23}
// Output: 1,2,3,4,5,8,23

const arr = [3, 2, 8, 5, 1, 4, 23];

const mergeSort = (arr, start, end) => {
    if (start >= end) {
        return;
    }

    let mid = Math.floor(start + (end - start) / 2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);

    mergeTwoSortedArry(arr, start, mid, end);
};

const mergeTwoSortedArry = (arr, start, mid, end) => {
    let i = start;
    let j = mid + 1;
    let temp = [];
    while (i <= mid && j <= end) {
        if (arr[i] < arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }

    while (i <= mid) { 
        temp.push(arr[i]);
        i++;
    }

    while (j <= end) {
        temp.push(arr[j]);
        j++;
    }

    for(let i = 0; i<temp.length; i++){
        arr[i+start] = temp[i]
    }
};

mergeSort(arr, 0, arr.length - 1);

console.log(arr);
