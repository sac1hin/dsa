// Given a sorted array of nums consisting of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.


// Examples:
// Input: nums = [1, 3, 5, 6], target = 5

// Output: 2

// Explanation: The target value 5 is found at index 2 in the sorted array. Hence, the function returns 2.

// Input: nums = [1, 3, 5, 6], target = 2

// Output: 1

// Explanation: The target value 2 is not found in the array. However, it should be inserted at index 1 to maintain the sorted order of the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let pos = nums.length;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] >= target) {
            pos = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return pos;
};