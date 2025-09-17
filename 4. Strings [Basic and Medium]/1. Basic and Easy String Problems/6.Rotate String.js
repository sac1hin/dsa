// // leetcode -> https://leetcode.com/problems/rotate-string/

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.



// A shift on s consists of moving the leftmost character of s to the rightmost position.



// For example, if s = "abcde", then it will be "bcdea" after one shift.


// Examples:
// Input : s = "abcde" , goal = "cdeab"

// Output : true

// Explanation :

// After performing 2 shifts we can achieve the goal string from string s.

// After first shift the string s is => bcdea

// After second shift the string s is => cdeab.

// Input : s = "abcde" , goal = "adeac"

// Output : false

// Explanation :

// Any number of shift operations cannot convert string s to string goal.


/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    let n = goal.length;

    for (let i = 0; i < n; i++) {
        if (goal[i] === s[0]) {
            let isMatch = true;
            for (let j = 0; j < n; j++) {
                if (s[j] !== goal[(i + j) % n]) {
                    isMatch = false;
                    break;
                }
            }
            if (isMatch) return true;
        }
    }

    return false;
};