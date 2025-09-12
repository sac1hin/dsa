// leetcode : - https://leetcode.com/problems/sqrtx/description/ 


// Given a positive integer n. Find and return its square root. If n is not a perfect square, then return the floor value of sqrt(n).


// Examples:
// Input: n = 36

// Output: 6

// Explanation: 6 is the square root of 36.

// Input: n = 28

// Output: 5

// Explanation: The square root of 28 is approximately 5.292. So, the floor value will be 5.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if(x===0){
        return 0;
    }
    let ans = 1;
    for (let i = 2; i * i <= x; i++) {
        ans = i;
    }

    return ans
};