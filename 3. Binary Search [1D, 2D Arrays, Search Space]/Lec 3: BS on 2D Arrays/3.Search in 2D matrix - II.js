// leetcode -> https://leetcode.com/problems/search-a-2d-matrix-ii/description/

// Given a 2D array matrix where each row is sorted in ascending order from left to right and each column is sorted in ascending order from top to bottom, write an efficient algorithm to search for a specific integer target in the matrix.


// Examples:
// Input: matrix = [ [1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30] ], target = 5

// Output: True

// Explanation: The target 5 exists in the matrix in the index (1,1)

// Input: matrix= [ [1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30] ], target = 20

// Output: False

// Explanation: The target 20 does not exist in the matrix.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let left = 0, right = matrix[0].length - 1;

    while (left < matrix.length && right >= 0) {
        if (matrix[left][right] === target) {
            return true;
        } else if (matrix[left][right] > target) {
            right--;
        } else {
            left++;
        }
    }

    return false;
};