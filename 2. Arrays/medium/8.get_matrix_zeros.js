// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0. You must do it in place.


// Examples:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]

// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Explanation:

// Element at position (1,1) is 0, so set entire row 1 and column 1 to 0.

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]

// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Explanation:

// There are two zeroes: (0,0) and (0,3).

// Row 0 → all elements become 0
// Column 0 and column 3 → all elements become 0



var setZeroes = function(matrix) {
    let rows = new Set();
    let cols = new Set();

    for(let i = 0 ; i < matrix.length; i++){
        for(let j = 0 ; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                rows.add(i);
                cols.add(j);
            }
        }
    }

    for(let row of rows){
        for(let i = 0; i <matrix[0].length; i++){
            matrix[row][i] = 0;
        }
    }

    for(let col of cols){
        for(let i = 0; i <matrix.length; i++){
            matrix[i][col] = 0;
        }
    }
};