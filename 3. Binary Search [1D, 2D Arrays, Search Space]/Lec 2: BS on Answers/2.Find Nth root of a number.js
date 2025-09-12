// gfg -> https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1

// Given two numbers N and M, find the Nth root of M. The Nth root of a number M is defined as a number X such that when X is raised to the power of N, it equals M. If the Nth root is not an integer, return -1.


// Examples:
// Input: N = 3, M = 27

// Output: 3

// Explanation: The cube root of 27 is equal to 3.

// Input: N = 4, M = 69

// Output:-1

// Explanation: The 4th root of 69 does not exist. So, the answer is -1.

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
class Solution {
    nthRoot(n, m) {
        
        let left = 1;
        let right = m;
        
        while(left<=right){
            let mid = Math.floor(left + (right-left) / 2);
            let num = this.getNumber(mid,n);

            if(num === m){
                return mid;
            }else if(num > m){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        
        return -1;
    }
    
    getNumber(mid,n){
        let ans = 1;
        for(let i=1; i<=n; i++){
            ans *= mid;
        }
        return ans;
    }
}