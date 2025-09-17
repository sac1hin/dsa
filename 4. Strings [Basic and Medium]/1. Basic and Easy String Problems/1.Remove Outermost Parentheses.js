// leetcode -> https://leetcode.com/problems/remove-outermost-parentheses/description/

// A valid parentheses string is defined by the following rules:
// It is the empty string "".


// If A is a valid parentheses string, then so is "(" + A + ")".
// If A and B are valid parentheses strings, then A + B is also valid.
// A primitive valid parentheses string is a non-empty valid string that cannot be split into two or more non-empty valid parentheses strings.
// Given a valid parentheses string s, your task is to remove the outermost parentheses from every primitive component of s and return the resulting string.


/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let count = 0;
    let str = ""
    for (let i of s) {
        if (i === "(") {
            count++;
            if (count > 1) {
                str += i;
            }
        } else {
            count--;
            if (count >= 1) {
                str += i;
            }
        }
    }

    return str;
};