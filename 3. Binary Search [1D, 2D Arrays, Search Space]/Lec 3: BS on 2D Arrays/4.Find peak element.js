// leetcode -> https://leetcode.com/problems/find-a-peak-element-ii/

// Given an array arr of integers. A peak element is defined as an element greater than both of its neighbors.

// Formally, if arr[i] is the peak element, arr[i - 1] < arr[i] and arr[i + 1] < arr[i].



// Find the index(0-based) of a peak element in the array. If there are multiple peak numbers, return the index of any peak number.



// Note:

// As there can be many peak values, 1 is given as output if the returned index is a peak number, otherwise 0.

// Examples:
// Input : arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1]

// Output: 7

// Explanation: In this example, there is only 1 peak that is at index 7.

// Input : arr = [1, 2, 1, 3, 5, 6, 4]

// Output: 1

// Explanation: In this example, there are 2 peak numbers at indices 1 and 5. We can consider any of the

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
    let row = 0;
    let col = mat[0].length - 1;
    while (row <= col) {
        let mid = Math.floor(row + (col - row) / 2);
        let maxRowIndex = findMaxInCol(mat, mid);
        let left = mid - 1 >= 0 ? mat[maxRowIndex][mid - 1] : -1;
        let right = mid + 1 < mat[0].length ? mat[maxRowIndex][mid + 1] : -1;

        if (mat[maxRowIndex][mid] > left && mat[maxRowIndex][mid] > right) {
            return [maxRowIndex, mid]
        } else if (mat[maxRowIndex][mid] < left) {
            col = mid - 1;
        } else {
            row = mid + 1;
        }
    }

    return [-1, -1];
};

function findMaxInCol(mat, col) {
  let bestRow = 0;
  for (let r = 1; r < mat.length; r++) {
    if (mat[r][col] > mat[bestRow][col]) bestRow = r;
  }
  return bestRow;
}