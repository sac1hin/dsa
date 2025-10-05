// // leetcode -> https://leetcode.com/problems/combination-sum-ii/

// Given collection of candidate numbers (candidates) and a integer target.Find all unique combinations in candidates where the sum is equal to the target.There can only be one usage of each number in the candidates combination and return the answer in sorted order.



// e.g : The combination [1, 1, 2] and [1, 2, 1] are not unique.


// Examples:
// Input : candidates = [2, 1, 2, 7, 6, 1, 5] , target = 8

// Output : [ [1, 1, 6] , [1, 2, 5] , [1, 7] , [2, 6] ]

// Explanation : The combinations sum up to target are

// 1 + 1 + 6 => 8.

// 1 + 2 + 5 => 8.

// 1 + 7 => 8.

// 2 + 6 => 8.

// Input : candidates = [2, 5, 2, 1, 2] , target = 5

// Output : [ [1, 2, 2] , [5] ]

// Explanation : The combinations sum up to target are

// 1 + 2 + 2 => 5.

// 5 => 5.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
    candidates = candidates.sort((a, b) => a - b);
    const ans = [];
    recursion(0, candidates, target, ans, []);
    return ans;
};

function recursion(idx, arr, tar, ans, asf) {
    if (tar < 0) return;

    if (tar === 0) {
        ans.push([...asf])
        return
    }

    for (let i = idx; i < arr.length; i++) {
        if (i > idx && arr[i] === arr[i - 1]) {
            continue;
        }

        if (arr[i] > tar) {
            break;
        }

        asf.push(arr[i]);
        recursion(i + 1, arr, tar - arr[i], ans, asf);
        asf.pop();
    }
}