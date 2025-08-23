// Given an integer array nums of even length consisting of an equal number of positive and negative integers.Return the answer array in such a way that the given conditions are met:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.

// Examples:
// Input : nums = [2, 4, 5, -1, -3, -4]

// Output : [2, -1, 4, -3, 5, -4]

// Explanation: The positive number 2, 4, 5 maintain their relative positions and -1, -3, -4 maintain their relative positions

// Input : nums = [1, -1, -3, -4, 2, 3]

// Output : [1, -1, 2, -3, 3, -4]

// Explanation: The positive number 1, 2, 3 maintain their relative positions and -1, -3, -4 maintain their relative positions


var rearrangeArray = function(arr) {
    let ans = new Array(arr.length);
    let p = 0;
    let n = 1;

    for(let i = 0; i<arr.length;i++){
        if(arr[i] > 0){
            ans[p] = arr[i];
            p+=2
        }else{
            ans[n] = arr[i];
            n+=2
        }
    }

    return ans;
};