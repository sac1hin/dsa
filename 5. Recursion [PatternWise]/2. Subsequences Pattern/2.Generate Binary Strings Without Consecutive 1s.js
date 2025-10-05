// gfg -> https://www.geeksforgeeks.org/problems/generate-all-binary-strings/1

// Given an integer n, return all binary strings of length n that do not contain consecutive 1s. Return the result in lexicographically increasing order.



// A binary string is a string consisting only of characters '0' and '1'.


// Examples:
// Input: n = 3

// Output: ["000", "001", "010", "100", "101"]

// Explanation: All strings are of length 3 and do not contain consecutive 1s.

// Input: n = 2

// Output: ["00", "01", "10"]

/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
    let answer = [];
    recursion("", -1, n, answer);
    return answer;
};

function recursion(curr, prev, n, ans) {

    if (n == 0) {
        ans.push(curr);
        return
    }

    recursion(curr + "0", 0, n - 1, ans);
    
    if(prev !== 1){
        recursion(curr + "1", 1, n - 1, ans);
    }

}