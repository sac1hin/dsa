// // leetcode -> https://leetcode.com/problems/search-a-2d-matrix/


// Given a 2-D array mat where the elements of each row are sorted in non-decreasing order, and the first element of a row is greater than the last element of the previous row (if it exists), and an integer target, determine if the target exists in the given mat or not.


// Examples:
// Input: mat = [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12] ], target = 8

// Output: True

// Explanation: The target = 8 exists in the 'mat' at index (1, 3).

// Input: mat = [ [1, 2, 4], [6, 7, 8], [9, 10, 34] ], target = 78

// Output: False

// Explanation: The target = 78 does not exist in the 'mat'. Therefore in the output, we see 'false'.

var searchMatrix = function (matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;

    let left = 0, right = row * col - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let midValue = matrix[Math.floor(mid / col)][mid % col];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1
        } else {
            right = mid - 1;

        }
    }

    return false;
};