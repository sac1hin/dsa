// Problem Statement: Given an array of N integers, write a program to implement the Insertion sorting algorithm.

// Examples:

// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation:
// After sorting the array is: 9,13,20,24,46,52

// Example 2:
// Input: N=5, array[] = {5,4,3,2,1}
// Output: 1,2,3,4,5
// Explanation: After sorting the array is: 1,2,3,4,5

// swipe smallet element to left until found greater
// 

const arr = [5, 4, 3, 2, 1];
for (let i = 1; i < arr.length; i++) { // O(n)
    let prev = i - 1;

    while(prev >= 0 && arr[prev] > arr[prev+1]){ 
        let temp = arr[prev];
        arr[prev] = arr[prev+1];
        arr[prev+1] = temp;
        prev--;
    }
}

console.log(arr);