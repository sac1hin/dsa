// // leetcode -> https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

// A string s is a valid parentheses string (VPS) if it meets the following conditions:

// It only contains digits 0-9, arithmetic operators +, -, *, /, and parentheses (, ).
// The parentheses are balanced and correctly nested.


// Your task is to compute the maximum nesting depth of parentheses in s. The nesting depth is the highest number of parentheses that are open at the same time at any point in the string.


// Examples:
// Input: s = "(1+(2*3)+((8)/4))+1"

// Output: 3

// Explanation: The deepest nested sub-expression is ((8)/4), which has 3 layers of parentheses.



// Input: s = "(1)+((2))+(((3)))"

// Output: 3

// Explanation: The digit '3' is enclosed in 3 pairs of parentheses.

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let ans = 0;
    let count = 0;
    for(let ch of s){
        if(ch === "("){
            count++;
        }else if(ch === ")"){
            count--;
        }
        ans = Math.max(count,ans);
    }

    return ans;
};