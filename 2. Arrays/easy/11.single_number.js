// Given an array of nums of n integers. Every integer in the array appears twice except one integer. Find the number that appeared once in the array.


// Examples:
// Input : nums = [1, 2, 2, 4, 3, 1, 4]

// Output : 3

// Explanation : The integer 3 has appeared only once.

// Input : nums = [5]

// Output : 5

// Explanation : The integer 5 has appeared only once.


var singleNumber = function(nums) {
    let ans = 0;

    for(let i = 0; i < nums.length; i++){
        ans = ans ^ nums[i]
    }

    return ans;
};