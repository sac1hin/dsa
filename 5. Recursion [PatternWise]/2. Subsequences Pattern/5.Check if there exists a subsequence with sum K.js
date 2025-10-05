// gfg -> https://www.geeksforgeeks.org/problems/check-if-there-exists-a-subsequence-with-sum-k/1

// Given an array arr and target sum k, check whether there exists a subsequence such that the sum of all elements in the subsequence equals the given target sum(k).

// Example:

// Input:  arr = [10,1,2,7,6,1,5], k = 8.
// Output:  Yes
// Explanation:  Subsequences like [2, 6], [1, 7] sum upto 8

// Input:  arr = [2,3,5,7,9], k = 100.
// Output:  No
// Explanation:  No subsequence can sum upto 100

const arr = [10, 1, 2, 7, 6, 1, 5],
    k = 8;

function recursion(idx, arr, tar, sum) {
    if (tar === sum) {
        return true;
    }
    
    if (idx === arr.length || sum > tar) {
        return false;
    }



    if (sum <= tar) {
        const exc = recursion(idx + 1, arr, tar, sum);
        const inc = recursion(idx + 1, arr, tar, sum + arr[idx]);

        return exc || inc
    }
}

console.log(recursion(0, arr, k, 0));
