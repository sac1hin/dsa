// Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.

// Examples:

// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

// Example 2:
// Input: N=5, array[] = {5,4,3,2,1}
// Output: 1,2,3,4,5
// Explanation: After sorting the array is: 1, 2, 3, 4, 5

// swipe smallet element to left
// iter 1 -> 5 4 3 2 1 -> 1 5 4 3 2 -> 1 2 5 4 3 -> 1 2 3 5 4 -> 1 2 3 4 5

const arr = [5, 4, 3, 2, 1];

for (let i = 0; i < arr.length; i++) {
    let curr = i;
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[j] < arr[curr]){
            let temp = arr[j];
            arr[j] = arr[curr];
            arr[curr] = temp;
        }
    }
}

console.log(arr);
