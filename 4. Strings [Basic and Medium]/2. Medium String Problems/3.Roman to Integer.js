// leetcode -> https://leetcode.com/problems/roman-to-integer/


// Roman numerals are represented by seven different symbols:

// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000


// Roman numerals are typically written from largest to smallest, left to right. However, in specific cases, a smaller numeral placed before a larger one indicates subtraction.



// The following subtractive combinations are valid:

// I before V (5) and X (10) → 4 and 9
// X before L (50) and C (100) → 40 and 90
// C before D (500) and M (1000) → 400 and 900


// Given a Roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        let curr = map[s[i]];
        let next = map[s[i + 1]];
        
        if (next && curr < next) {
            total -= curr;
        } else {
            total += curr; 
        }
    }
    
    return total;
};