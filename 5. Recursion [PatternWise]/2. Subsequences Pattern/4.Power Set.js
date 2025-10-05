// leetcode -> https://leetcode.com/problems/subsets/description/

// Given an array of integers nums of unique elements. Return all possible subsets (power set) of the array.



// Do not include the duplicates in the answer.


// Examples:
// Input : nums = [1, 2, 3]

// Output : [ [ ] , [1] , [2] , [1, 2] , [3] , [1, 3] , [2, 3] , [1, 2 ,3] ]

// Input : nums = [1, 2]

// Output : [ [ ] , [1] , [2] , [1,2] ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let ans = [];
    recursion(0, nums, [], ans);
    return ans;
};

function recursion(idx, arr, asf, ans) {
    if (idx === arr.length) {
        ans.push([...asf]);
        return
    }

    recursion(idx + 1, arr, asf, ans);
    asf.push(arr[idx]);
    recursion(idx + 1, arr, asf, ans);
    asf.pop();
}