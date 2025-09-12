// gfg -> https://www.geeksforgeeks.org/problems/implement-upper-bound/1

// Given a sorted array of nums and an integer x, write a program to find the upper bound of x.



// The upper bound algorithm finds the first and smallest index in a sorted array where the value at that index is greater than a given key i.e. x.



// If no such index is found, return the size of the array.


// Examples:
// Input : n= 4, nums = [1,2,2,3], x = 2

// Output:3

// Explanation:

// Index 3 is the smallest index such that arr[3] > x.

// Input : n = 5, nums = [3,5,8,15,19], x = 9

// Output: 3

// Explanation:

// Index 3 is the smallest index such that arr[3] > x.


/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    upperBound(arr, target) {
        // code here
        let left = 0;
        let right = arr.length - 1;
        let ans = arr.length;;
        
        while(left<=right){
            let mid = Math.floor(left + (right-left) / 2);
            
            if(arr[mid] > target){
                ans = mid;
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        
        return ans;
    }
}