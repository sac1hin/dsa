// leetcode -> https://leetcode.com/problems/3sum/description/

// Given an integer array nums. Return all triplets such that:

// i != j, i != k, and j != k
// nums[i] + nums[j] + nums[k] == 0.


// Notice that the solution set must not contain duplicate triplets. One element can be a part of multiple triplets. The output and the triplets can be returned in any order.


// Examples:
// Input: nums = [2, -2, 0, 3, -3, 5]

// Output: [[-2, 0, 2], [-3, -2, 5], [-3, 0, 3]]

// Explanation: nums[1] + nums[2] + nums[0] = 0

// nums[4] + nums[1] + nums[5] = 0

// nums[4] + nums[2] + nums[3] = 0

// Input: nums = [2, -1, -1, 3, -1]

// Output: [[-1, -1, 2]]

// Explanation: nums[1] + nums[2] + nums[0] = 0

// Note that we have used two -1s as they are separate elements with different indexes

// But we have not used the -1 at index 4 as that would create a duplicate triplet



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i >= 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                ans.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }

            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return ans;
};