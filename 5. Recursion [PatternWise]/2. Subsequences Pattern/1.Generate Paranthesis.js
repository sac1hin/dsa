// leetcode -> https://leetcode.com/problems/generate-parentheses/description/

// Given an integer n.Generate all possible combinations of well-formed parentheses of length 2 x N.


// Examples:
// Input : n = 3

// Output : [ "((()))" , "(()())" , "(())()" , "()(())" , "()()()" ]

// Input : 2

// Output : [ "(())" , "()()" ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let answer = []
    recusiveFun("", 0, 0, n, answer);
    return answer;
};

function recusiveFun(curr, open, close, total, answer) {
    if (open === total && close === total) {
        answer.push(curr);
        return;
    }

    if(open < total){
        recusiveFun(curr + "(", open + 1, close, total, answer);
    }

    if(close < open){
        recusiveFun(curr + ")", open, close + 1, total, answer);
    }

}