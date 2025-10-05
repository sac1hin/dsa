// leetcode -> https://leetcode.com/problems/palindrome-partitioning/

// Given a string s partition string s such that every substring of partition is palindrome. Return all possible palindrome partition of string s.


// Examples:
// Input : s = "aabaa"

// Output : [ [ "a", "a", "b", "a", "a"] , [ "a", "a", "b", "aa"] , [ "a", "aba", "a"] , [ "aa", "b", "a", "a"] , [ "aa", "b", "aa" ] , [ "aabaa" ] ]

// Explanation : Above all are the possible ways in which the string can be partitioned so that each substring is a palindrome.

// Input : s = "baa"

// Output : [ [ "b", "a", "a"] , [ "b", "aa" ] ]

// Explanation : Above all are the possible ways in which the string can be partitioned so that each substring is a palindrome.

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const ans = [];
    recursion(0, s, ans, []);
    return ans;
};

function isPal(s, l, r) {
    while (l < r) {
        if (s[l++] !== s[r--]) return false;
    }
    return true;
}

function recursion(idx, str, ans, asf) {
    if (idx === str.length) {
        ans.push([...asf])
        return;
    }

    for (let i = idx; i < str.length; i++) {
        if (isPal(str, idx, i)) {
            asf.push(str.slice(idx, i + 1));
            recursion(i + 1, str, ans, asf);
            asf.pop();
        }
    }
}