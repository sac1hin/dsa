// Given an array nums and an integer k.Return the number of non-empty subsequences of nums such that the sum of all elements in the subsequence is equal to k.


// Examples:
// Input : nums = [4, 9, 2, 5, 1] , k = 10

// Output : 2

// Explanation : The possible subsets with sum k are [9, 1] , [4, 5, 1].

// Input : nums = [4, 2, 10, 5, 1, 3] , k = 5

// Output : 3

// Explanation : The possible subsets with sum k are [4, 1] , [2, 3] , [5].

const arr  = [4, 9, 2, 5, 1]
const k = 10
function recursion(idx, arr, tar, sum) {
    if (tar === sum) {
        return 1;
    }
    
    if (idx === arr.length || sum > tar) {
        return 0;
    }



    if (sum <= tar) {
        const exc = recursion(idx + 1, arr, tar, sum);
        const inc = recursion(idx + 1, arr, tar, sum + arr[idx]);

        return exc + inc
    }
}

console.log(recursion(0, arr, k, 0));

