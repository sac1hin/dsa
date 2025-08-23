// Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

// Examples:

// Example 1:

// Input: prices = {1, 1, 0, 1, 1, 1}

// Output: 3

// Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

// Input: prices = {1, 0, 1, 1, 0, 1} 

// Output: 2

// Explanation: There are two consecutive 1's in the array. 

var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let ans = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1){
            count++;
            ans = Math.max(ans,count);
        }else{
            count = 0;
        }
    }

   
    return ans;
};