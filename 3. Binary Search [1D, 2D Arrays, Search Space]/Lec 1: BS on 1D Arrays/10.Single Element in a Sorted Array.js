// leetcode -> https://leetcode.com/problems/single-element-in-a-sorted-array/


// Given an array nums sorted in non-decreasing order. Every number in the array except one appears twice. Find the single number in the array.


// Examples:
// Input :nums = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]

// Output:4

// Explanation: Only the number 4 appears once in the array.

// Input : nums = [1, 1, 3, 5, 5]

// Output:3

// Explanation: Only the number 3 appears once in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (mid % 2 === 0) {
            if (nums[mid] === nums[mid + 1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        } else {
            if (nums[mid] === nums[mid-1]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
    }

    return nums[left];
};