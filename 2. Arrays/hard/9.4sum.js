// leetcode -> https://leetcode.com/problems/4sum/submissions/1749772089/

// Given an integer array nums and an integer target. Return all quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// ·      a, b, c, d are all distinct valid indices of nums.

// ·      nums[a] + nums[b] + nums[c] + nums[d] == target.



// Notice that the solution set must not contain duplicate quadruplets. One element can be a part of multiple quadruplets. The output and the quadruplets can be returned in any order.


// Examples:
// Input: nums = [1, -2, 3, 5, 7, 9], target = 7

// Output: [[-2, 1, 3, 5]]

// Explanation: nums[1] + nums[0] + nums[2] + nums[3] = 7

// Input: nums = [7, -7, 1, 2, 14, 3], target = 9

// Output: []

// Explanation: No quadruplets are present which add upto 9

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let ans = [];

    for (let i = 0; i < nums.length - 3; i++) {
        if(i>0 && nums[i] === nums[i-1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if(j>i+1 && nums[j] === nums[j-1]) continue;

            let left = j + 1;
            let right = nums.length - 1;
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum === target) {
                    ans.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }

    return ans;
};