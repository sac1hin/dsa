// Rotate array by K elements

// Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

// Examples:

// Example 1:
// Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position .

// Example 2:
// Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left 
// Output: 9 10 11 3 7 8
// Explanation: Array is rotated to right by 3 position.


// The correct steps to rotate an array to the right by k are:

// Normalize k with k = k % nums.length (otherwise big k breaks).

// Reverse the whole array.

// Reverse the first k elements.

// Reverse the rest (nums.length - k elements).

var rotate = function(nums, k) {
    k = k % nums.length;
    
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);
};


const reverse = (arr,start,end) => {
    let left = start
    let right = end
    while(left<right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}