// leetcode -> https://leetcode.com/problems/binary-search/description/

// Given a sorted array of integers nums with 0-based indexing, find the index of a specified target integer. If the target is found in the array, return its index. If the target is not found, return -1.


// Examples:
// Input: nums = [-1,0,3,5,9,12], target = 9

// Output: 4

// Explanation: The target integer 9 exists in nums and its index is 4

// Input: nums = [-1,0,3,5,9,12], target = 2

// Output: -1

// Explanation: The target integer 2 does not exist in nums so return -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if(arr[mid] === target){
            return mid;
        }else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};