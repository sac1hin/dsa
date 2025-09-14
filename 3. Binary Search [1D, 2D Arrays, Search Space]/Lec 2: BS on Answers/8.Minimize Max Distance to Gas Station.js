// Given a sorted array arr of size n, containing integer positions of n gas stations on the X-axis, and an integer k, place k new gas stations on the X-axis.

// The new gas stations can be placed anywhere on the non-negative side of the X-axis, including non-integer positions.

// Let dist be the maximum distance between adjacent gas stations after adding the k new gas stations.
// Find the minimum value of dist.
// Your answer will be accepted if it is within 1e-6 of the true value.

// Examples:
// Input: n = 10, arr = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10], k = 9

// Output: 0.50000

// Explanation:

// One of the possible ways to place 10 gas stations is [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10].

// Thus the maximum difference between adjacent gas stations is 0.5.

// Hence, the value of dist is 0.5.

// It can be shown that there is no possible way to add 10 gas stations in such a way that the value of dist is lower than this.

// Input : n = 10, arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 1

// Output: 1.00000

// Explanation:

// One of the possible ways to place 1 gas station is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].
// New Gas Station is at 11.
// Thus the maximum difference between adjacent gas stations is still 1.
// Hence, the value of dist is 1.
// It can be shown that there is no possible way to add 1 gas station in such a way that the value of dist is lower than this. 

class Solution {
    /**
    * @param {number[]} arr
    * @param {number} K
    * @returns {number}
    */
    minMaxDist(arr, K) {
        if (!arr || arr.length < 2) return 0;
        
        let left = 0;
        let right = 0;
        
        for (let i = 0; i + 1 < arr.length; i++) {
            right = Math.max(right, arr[i + 1] - arr[i]);
        }
        
        while (right - left > 1e-6) {
            let mid = left + (right - left) / 2;   // real mid
            let needed = this.minimumDis(arr, mid);
            
            if (needed > K) {
                left = mid;    // too small, need more stations
            } else {
                right = mid;   // feasible, try smaller
            }
        }
        
        return Number(right.toFixed(2));
    }
    
    minimumDis(arr, dist) {
        if (dist <= 0) return Infinity;
        let ans = 0;
        for (let i = 0; i + 1 < arr.length; i++) {
            const gap = arr[i + 1] - arr[i];
            ans += Math.ceil(gap / dist) - 1;
        }
        return ans;
    }
}

