// leetcode -> https://leetcode.com/problems/combination-sum-iii/submissions/1788180146/

// Determine all possible set of k numbers that can be added together to equal n while meeting the following requirements:



// There is only use of numerals 1 through 9.
// A single use is made of each number.


// Return list of every feasible combination that is allowed. The combinations can be returned in any order, but the list cannot have the same combination twice.


// Examples:
// Input : k = 3 , n = 7

// Output : [ [1, 2, 4] ]

// Explanation :

// 1 + 2 + 4 = 7

// There are no other valid combinations.

// Input : k = 3, n = 9

// Output : [[1, 2, 6],[1, 3, 5],[2, 3, 4]]

// Explanation :

// 1 + 2 + 6 = 9

// 1 + 3 + 5 = 9

// 2 + 3 + 4 = 9

// There are no other valid combinations.


/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const ans = [];
    recursion(1, k, n, ans, [], 0);
    return ans;
};

function recursion(start, k, tar, ans, asf, sum) {
    if (k == 0) {
        if (sum === tar) {
            ans.push([...asf]);
        }
        return
    }

    for (let i = start; i <= 9; i++) {
        if (sum + i > tar) break;
        asf.push(i);
        recursion(i + 1, k - 1, tar, ans, asf, sum + i);
        asf.pop();
    }
}