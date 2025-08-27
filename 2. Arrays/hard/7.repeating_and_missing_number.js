// // gfg -> https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1

// Given an integer array nums of size n containing values from [1, n] and each value appears exactly once in the array, except for A, which appears twice and B which is missing.

// Return the values A and B, as an array of size 2, where A appears in the 0-th index and B in the 1st index.



// Note: You are not allowed to modify the original array.


// Examples:
// Input: nums = [3, 5, 4, 1, 1]

// Output: [1, 2]

// Explanation: 1 appears two times in the array and 2 is missing from nums

// Input: nums = [1, 2, 3, 6, 7, 5, 7]

// Output: [7, 4]

// Explanation: 7 appears two times in the array and 4 is missing from nums.


let n = arr.length;
        
let sum = n * (n + 1)/2
let set = new Set();
let duplicateNum = null;
let arrSum = 0;

for(let i = 0; i<n ; i++){
    arrSum += arr[i];
    if(set.has(arr[i])){
        duplicateNum = arr[i];
    }else{
        set.add(arr[i])
    }
}


return [duplicateNum, sum + duplicateNum -  arrSum ]