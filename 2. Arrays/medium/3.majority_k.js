// Given an integer array nums of size n, return the majority element of the array.



// The majority element of an array is an element that appears more than n/2 times in the array. The array is guaranteed to have a majority element.


// Examples:
// Input: nums = [7, 0, 0, 1, 7, 7, 2, 7, 7]

// Output: 7

// Explanation: The number 7 appears 5 times in the 9 sized array

// Input: nums = [1, 1, 1, 2, 1, 2]

// Output: 1

// Explanation: The number 1 appears 4 times in the 6 sized array



var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;
  
    for (const num of nums) {
      if (count === 0) {
        candidate = num;
        count = 1;
      } else if (num === candidate) {
        count++;
      } else {
        count--;
      }
    }

    return candidate;
  };