// gfg -> https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1


// You are given an integer array arr of size n which contains both positive and negative integers. Your task is to find the length of the longest contiguous subarray with sum equal to 0.



// Return the length of such a subarray. If no such subarray exists, return 0.


// Examples:
// Input: arr = [15, -2, 2, -8, 1, 7, 10, 23]

// Output: 5

// Explanation:

// The subarray [-2, 2, -8, 1, 7] sums up to 0 and has the maximum length among all such subarrays.

// Input: arr = [2, 10, 4]

// Output: 0

// Explanation:

// There is no subarray whose elements sum to 0.

class Solution {
    maxLength(arr) {
        let map = new Map();
        let i = 0;
        let sum = 0;
        let ans = 0;
        while(i<arr.length){
            sum += arr[i];
            
            if (sum === 0) {
                ans = Math.max(ans, i + 1);
            }
            
            if(map.has(sum)){
                ans = Math.max(ans,i-map.get(sum));
            }else{
                map.set(sum,i);
            }
            i++;
        }
        
        return ans
    }
}