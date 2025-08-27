// leetcode -> https://leetcode.com/problems/spiral-matrix/description/

// Given an M * N matrix, print the elements in a clockwise spiral manner. Return an array with the elements in the order of their appearance when printed in a spiral manner.


// Examples:
// Input: matrix = [[1, 2, 3], [4 ,5 ,6], [7, 8, 9]]

// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Explanation: The elements in the spiral order are 1, 2, 3 -> 6, 9 -> 8, 7 -> 4, 5

// Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8]]

// Output: [1, 2, 3, 4, 8, 7, 6, 5]

// Explanation: The elements in the spiral order are 1, 2, 3, 4 -> 8, 7, 6, 5


var spiralOrder = function (matrix) {
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;
    let ans = [];

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                ans.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                ans.push(matrix[i][left]);
            }
            left++;
        }
    }

    return ans;
};