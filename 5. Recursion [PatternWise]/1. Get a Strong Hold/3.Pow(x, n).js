// leetcode -> https://leetcode.com/problems/powx-n/description/
// Implement the power function pow(x, n) , which calculates the x raised to n i.e. xn.



// Note : In output print 6 digits places after decimal point.


// Examples:
// Input : x = 2.0000 , n = 10

// Output : 1024.0000

// Explanation : Answer = 2^10 => 1024.

// Input : x = 2.0000 , n = -2

// Output : 0.2500

// Explanation : Answer = 2^(-2) = 1/4 => 0.25.

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n===0){
        return 1;
    }

    if( n < 0){
        return 1 / myPow(x, -n);
    }

    let half = myPow(x, Math.floor(n / 2));

    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
};