//  leetcode -> https://leetcode.com/problems/combination-sum/  

// Provided with a goal integer target and an array of unique integer candidates, provide a list of all possible combinations of candidates in which the selected numbers add up to the target. The combinations can be returned in any order.



// A candidate may be selected from the pool an infinite number of times. There are two distinct combinations if the frequency of at least one of the selected figures differs.



// The test cases are created so that, for the given input, there are fewer than 150 possible combinations that add up to the target.

// If there is no possible subsequences then return empty vector.


// Examples:
// Input : candidates = [2, 3, 5, 4] , target = 7

// Output : [ [2, 2, 3] , [3, 4] , [5, 2] ]

// Explanation :

// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.

// 5 and 2 are candidates, and 5 + 2 = 7.

// 3 and 4 are candidates, and 3 + 4 = 7.

// There are total three combinations.

// Input : candidates = [2], target = 1

// Output : []

// Explanation : There is no way we can choose the candidates to sum up to target.


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
    const ans = [];
    recursion(0, candidates, target, ans, []);
    return ans;
};

function recursion(idx, arr, tar, ans, asf) {
    if (tar < 0 || idx === arr.length) return;

    if (tar === 0) {
        ans.push([...asf])
        return
    }


    asf.push(arr[idx]);
    recursion(idx, arr, tar - arr[idx], ans, asf);
    asf.pop();
    recursion(idx + 1, arr, tar, ans, asf);

}

