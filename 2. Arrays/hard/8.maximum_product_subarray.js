// leet code -> https://leetcode.com/problems/maximum-product-subarray/description/

// Given an integer array nums. Find the subarray with the largest product, and return the product of the elements present in that subarray.



// A subarray is a contiguous non-empty sequence of elements within an array.


// Examples:
// Input: nums = [4, 5, 3, 7, 1, 2]

// Output: 840

// Explanation: The largest product is given by the whole array itself

// Input: nums = [-5, 0, -2]

// Output: 0

// Explanation: The largest product is achieved with the following subarrays [0], [-5, 0], [0, -2], [-5, 0, -2].

var maxProduct = function (nums) {
    let max_so_far = nums[0];
    let min_so_far = nums[0];
    let ans = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const tempMaxMultiple = max_so_far * nums[i];
        const tempMinMultiple = min_so_far * nums[i];
        max_so_far = Math.max(nums[i], Math.max(tempMaxMultiple, tempMinMultiple));
        min_so_far = Math.min(nums[i], Math.min(tempMaxMultiple, tempMinMultiple));

        ans = Math.max(ans, Math.max(max_so_far, min_so_far))
    }

    return ans;
};