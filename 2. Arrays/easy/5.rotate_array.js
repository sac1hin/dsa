// Left Rotate Array by One

// Given an integer array nums, rotate the array to the left by one.

// Note: There is no need to return anything, just modify the given array.


// Examples:
// Input: nums = [1, 2, 3, 4, 5]

// Output: [2, 3, 4, 5, 1]

// Explanation: Initially, nums = [1, 2, 3, 4, 5]

// Rotating once to left -> nums = [2, 3, 4, 5, 1]

// Input: nums = [-1, 0, 3, 6]

// Output: [0, 3, 6, -1]

// Explanation: Initially, nums = [-1, 0, 3, 6]

// Rotating once to left -> nums = [0, 3, 6, -1]

const rotateArrayByOne = (nums) => {
    let temp = nums[0];
    for(let i = 0; i<nums.length-1; i++){
        nums[i] = nums[i+1];
    }
    nums[nums.length-1] = temp;
}