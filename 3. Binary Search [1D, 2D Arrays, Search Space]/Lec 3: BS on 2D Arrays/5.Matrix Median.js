// gfg -> https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1

// Given a 2D array matrix that is row-wise sorted. The task is to find the median of the given matrix.

// Examples:
// Input: matrix=[ [1, 4, 9], [2, 5, 6], [3, 7, 8] ]

// Output: 5

// Explanation: If we find the linear sorted array, the array becomes 1 2 3 4 5 6 7 8 9. So, median = 5

// Input: matrix=[ [1, 3, 8], [2, 3, 4], [1, 2, 5] ]

// Output: 3

// Explanation: If we find the linear sorted array, the array becomes 1 1 2 2 3 3 4 5 8. So, median = 3

/**
 * @param {number[][]} mat
 * @returns {number}
 */

class Solution {
    median(mat) {
        // code here
        let row = mat.length;
        let col = mat[0].length;

        let left = mat[0][0];
        let right = mat[0][col - 1];

        for (let i = 0; i < row; i++) {
            left = Math.min(left, mat[i][0]);
            right = Math.max(right, mat[i][col - 1]);
        }

        const need = Math.floor((row * col + 1) / 2);

        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            let miniMum = this.blackBox(mat, mid);

            if (miniMum < need) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left;
    }

    blackBox(mat, x) {
        let count = 0;

        for (let i = 0; i < mat.length; i++) {
            count += this.upperBond(mat[i], x);
        }

        return count;
    }

    upperBond(arr, x) {
        let left = 0;
        let right = arr.length - 1;
        let ans = arr.length;

        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (arr[mid] > x) {
                ans = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return ans;
    }
}
