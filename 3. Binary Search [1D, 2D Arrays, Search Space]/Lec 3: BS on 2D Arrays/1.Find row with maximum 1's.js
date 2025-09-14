// gfg -> https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1

// Given a non-empty grid mat consisting of only 0s and 1s, where all the rows are sorted in ascending order, find the index of the row with the maximum number of ones.

// If two rows have the same number of ones, consider the one with a smaller index. If no 1 exists in the matrix, return -1.


// Examples:
// Input : mat = [ [1, 1, 1], [0, 0, 1], [0, 0, 0] ]

// Output: 0

// Explanation: The row with the maximum number of ones is 0 (0 - indexed).

// Input: mat = [ [0, 0], [0, 0] ]

// Output: -1

// Explanation: The matrix does not contain any 1. So, -1 is the answer.

/**
 * @param number[][] arr
 * @returns number
 */
class Solution {
    rowWithMax1s(arr) {
        // code here
        let row = arr.length; 
        let col = arr[0].length;
        
        let maxOnes = -1;
        let ans = -1;
        for(let i=0; i<row; i++){
            let left = 0,right = col-1;
            let onesInROw = -1;
            
            while(left <= right){
                let mid = Math.floor(left + (right-left) / 2);
                if(arr[i][mid] === 1){
                    onesInROw = col - mid;
                    right = mid - 1;
                }else{
                    left = mid + 1;
                }
            }

            if(maxOnes < onesInROw){
                maxOnes = onesInROw;
                ans = i;
            }
            
            if (maxOnes === col) break;
        }
        
        return ans;
    }
}
