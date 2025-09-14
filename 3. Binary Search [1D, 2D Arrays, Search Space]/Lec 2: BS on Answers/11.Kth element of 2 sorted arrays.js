// gfg -> https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1

// Given two sorted arrays a and b of size m and n respectively. Find the kth element of the final sorted array.


// Examples:
// Input: a = [2, 3, 6, 7, 9], b = [1, 4, 8, 10], k = 5

// Output: 6

// Explanation: The final sorted array would be [1, 2, 3, 4, 6, 7, 8, 9, 10]. The 5th element of this array is 6.

// Input: a = [100, 112, 256, 349, 770], b = [72, 86, 113, 119, 265, 445, 892], k = 7

// Output: 256

// Explanation: Final sorted array is - [72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892], 7th element of this array is 256.


/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} k
 * @returns {number}
 */

class Solution {
    kthElement(a, b, k) {
        let m = a.length;
        let n = b.length;

        let i = 0;
        let j = 0;
        let count = 0;
        let curr = 0;
        while(count < k){
            if(i<m && (j>=n || a[i] < b[j])){
                curr = a[i++];
            }else{
                curr = b[j++];
            }
            count++;
        }
        
        return curr;
    }
}