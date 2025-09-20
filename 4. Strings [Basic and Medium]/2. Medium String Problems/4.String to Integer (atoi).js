// leetcode -> https://leetcode.com/problems/string-to-integer-atoi/


// Implement the function myAtoi(s) which converts the given string s to a 32-bit signed integer (similar to the C/C++ atoi function).

// Steps to Implement:

// First, ignore any leading whitespace characters ' ' until the first non-whitespace character is found.
// Check the next character to determine the sign. If it’s a '-', the number should be negative. If it’s a '+', the number should be positive. If neither is found, assume the number is positive.
// Read the digits and convert them into a number. Stop reading once a non-digit character is encountered or the end of the string is reached. Leading zeros should be ignored during conversion.
// The result should be clamped within the 32-bit signed integer range: [-2147483648, 2147483647]. If the computed number is outside this range, return -2147483648 if the number is less than -2147483648, or return 2147483647 if the number is greater than 2147483647.
// Finally, return the computed number after applying all the above steps.

// Examples:
// Input: s = " -12345"

// Output: -12345

// Explanation:

// Ignore leading whitespaces.
// The sign '-' is encountered, indicating the number is negative.
// Digits 12345 are read and converted to -12345.
// Input: s = "4193 with words"

// Output: 4193

// Explanation:

// Read the digits 4193 and stop when encountering the first non-digit character (w).

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    if (s.length === 0) return 0;

    let i = 0;
    let sign = 1;
    let ans = 0;
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        ans = ans * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));

        if (sign === 1 && ans > INT_MAX) return INT_MAX;
        if (sign === -1 && -ans < INT_MIN) return INT_MIN;

        i++;
    }

    return sign * ans;
};
