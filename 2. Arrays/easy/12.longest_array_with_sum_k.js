// Given an array nums of size n and an integer k, find the length of the longest sub-array that sums to k. If no such sub-array exists, return 0.


// Examples:
// Input: nums = [10, 5, 2, 7, 1, 9],  k=15

// Output: 4

// Explanation:

// The longest sub-array with a sum equal to 15 is [5, 2, 7, 1], which has a length of 4. This sub-array starts at index 1 and ends at index 4, and the sum of its elements (5 + 2 + 7 + 1) equals 15. Therefore, the length of this sub-array is 4.

// Input: nums = [-3, 2, 1], k=6

// Output: 0

// Explanation:

// There is no sub-array in the array that sums to 6. Therefore, the output is 0.



var subarraySum = function(nums, k) {
    let count = 0;
    let pref = 0;
    const freq = new Map();
    freq.set(0, 1);
    
    for (let x of nums) {
      pref += x;
      if (freq.has(pref - k)) count += freq.get(pref - k);
      freq.set(pref, (freq.get(pref) || 0) + 1);
    }
    return count;
  };