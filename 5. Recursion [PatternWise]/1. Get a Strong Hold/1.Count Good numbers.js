

// leetcode -> https://leetcode.com/problems/count-good-numbers/

// A digit string is considered good if the digits at even indices (0-based) are even digits (0, 2, 4, 6, 8) and the digits at odd indices are prime digits (2, 3, 5, 7).



// Given an integer n, return the total number of good digit strings of length n. As the result may be large, return it modulo 109 + 7.



// A digit string is a string consisting only of the digits '0' through '9'. It may contain leading zeros.


// Examples:
// Input: n = 1

// Output: 5

// Explanation:

// Only one index (0) → must be even.

// Valid strings: "0", "2", "4", "6", "8"

// Input: n = 2

// Output: 20

// Explanation:

// Index 0: 5 options (even digits)

// Index 1: 4 options (prime digits)

// Total: 5 * 4 = 20


/**
 * @param {number} n
 * @return {number}
 */

const MOD = 1000000007n; // use BigInt modulo

var countGoodNumbers = function (n) {
  const evenPositions = Math.floor((n + 1) / 2);
  const oddPositions  = Math.floor(n / 2);

  const res = (powmod(5, evenPositions) * powmod(4, oddPositions)) % MOD;
  return Number(res);
};

function powmod(x, n) {
  // ensure BigInt inputs (avoids "Cannot mix BigInt and other types")
  if (typeof x !== 'bigint') x = BigInt(x);
  if (typeof n !== 'bigint') n = BigInt(n);

  if (n === 0n) return 1n;

  const half = powmod(x, n / 2n);
  const sq = (half * half) % MOD;

  return (n % 2n === 0n) ? sq : (sq * x) % MOD;
}
