// leetcode -> https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If the target is not found in the array, return [-1, -1].

// Examples:
// Input: nums = [5, 7, 7, 8, 8, 10], target = 8

// Output: [3, 4]

// Explanation:The target is 8, and it appears in the array at indices 3 and 4, so the output is [3,4]

// Input: nums = [5, 7, 7, 8, 8, 10], target = 6

// Output: [-1, -1]

// Expalantion: The target is 6, which is not present in the array. Therefore, the output is [-1, -1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const findF = findFirst(nums, target);
    const findL = findLast(nums, target);

    return [findF,findL]
};

function findFirst(arr, x) {
    // your code here
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === x) {
            ans = mid;
            right = mid - 1;
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}

function findLast(arr, x) {
    // your code here
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === x) {
            ans = mid;
            left = mid + 1;
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}
