// leetcode -> https://leetcode.com/problems/subsets-ii/

// Given an integer array nums, which can have duplicate entries, provide the power set.



// Duplicate subsets cannot exist in the solution set. Return the answer in any sequence.


// Examples:
// Input : nums = [1, 2, 2]

// Output : [ [ ] , [1] , [1, 2] , [1, 2, 2] , [2] , [2, 2] ]

// Input : nums = [1, 2]

// Output : [ [ ], [1] , [2] , [1, 2] ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    const ans = [];
    recursion(0, nums, ans, []);
    return ans;
};


function recursion(idx, arr, ans, asf) {
    if (idx === arr.length) {
        ans.push([...asf]);
        return;
    }

    asf.push(arr[idx]);
    recursion(idx + 1, arr, ans, asf);
    asf.pop();
    let i = idx + 1
    while (i < arr.length && arr[i] == arr[i - 1]) i++;
    recursion(i, arr, ans, asf);
}