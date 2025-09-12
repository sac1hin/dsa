// gfg -> https://www.geeksforgeeks.org/problems/aggressive-cows/1

// Given a sorted array of unique positive integers arr, your task is to return the kᵗʰ missing positive number that is not present in arr.



// The array is guaranteed to be strictly increasing, and the missing numbers are those positive integers that do not appear in arr but would appear in a full sequence starting from 1.


// Examples:
// Input: arr = [3, 5, 7, 10], k = 6

// Output: 9

// Explanation:

// The missing numbers are [1, 2, 4, 6, 8, 9, 11, ...]. The 6ᵗʰ missing number is 9.

// Input: arr = [1, 4, 6, 8, 9], k = 3

// Output: 5

// Explanation:

// The missing numbers are [2, 3, 5, 7, 10, ...]. The 3ʳᵈ missing number is 5.


/**
 * @param {number[]} stalls
 * @param {number} k
 * @returns {number}
 */

class Solution {
    aggressiveCows(arr, k) {
        // code here
        arr.sort((a, b) => a - b);

        let left = 1;
        let right = arr[arr.length-1] - arr[0];
        let ans = 0;
        
        while(left<=right){
            let mid = Math.floor(left + (right - left) / 2);
            if (this.canPlace(arr, mid, k)) {
                ans = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return ans;
    }
    
    canPlace(arr,dist,cows){
        let left = arr[0];
        let count = 1;
        for(let i=1;i<arr.length; i++){
            if(arr[i]-left >= dist){
                count++;
                left = arr[i];
            }
        }
        
        if(count>=cows){
            return true;
        }else{
            return false;
        }
    }
}
