// // gfg -> https://www.geeksforgeeks.org/problems/implement-lower-bound/1

// Given a sorted array of nums and an integer x, write a program to find the lower bound of x.
// The lower bound algorithm finds the first and smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.
// If no such index is found, return the size of the array.

// Examples:
// Input : nums= [1,2,2,3], x = 2

// Output:1

// Explanation:

// Index 1 is the smallest index such that arr[1] >= x.

// Input : nums= [3,5,8,15,19], x = 9

// Output: 3

// Explanation:

// Index 3 is the smallest index such that arr[3] >= x.

class Solution {
    lowerBound(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let ans = arr.length;;
        
        while(left<=right){
            let mid = Math.floor(left + (right-left) / 2);
            
            if(arr[mid] >= target){
                ans = mid;
                right = mid - 1;
            }else if(arr[mid] < target){
                left = mid + 1;
            }
        }
        
        return ans;
    }
}