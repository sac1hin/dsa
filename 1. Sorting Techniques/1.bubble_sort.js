// Problem Statement: Given an array of N integers, write a program to implement the Bubble Sorting algorithm.

// Examples:

// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting we get 9,13,20,24,46,52

// Input: N = 5, array[] = {5,4,3,2,1}
// Output: 1,2,3,4,5
// Explanation: After sorting we get 1,2,3,4,5

// step -> put larget element to last every time
// example
// iter1 -> 54321 -> 45321 -> 43521 -> 43251 -> 43215
// iter2 -> 43215 -> 34215 -> 32415 -> 32145
// iter2 -> 23145 -> 21345 -> 21435
// iter2 -> 21435 -> 12435
const arr = [5, 4, 3, 2, 1];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
