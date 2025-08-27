// leetcode -> https://leetcode.com/problems/rotate-image/

// Given an N * N 2D integer matrix, rotate the matrix by 90 degrees clockwise.
// The rotation must be done in place, meaning the input 2D matrix must be modified directly.

// Examples:
// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

var rotate = function(matrix) {
    for(let i = 0 ; i < matrix.length; i++){
        for(let j = i ; j < matrix[0].length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }


    for(let i = 0 ; i < matrix.length; i++){
        let li = 0; 
        let ri = matrix[i].length-1;
        while(li<ri){
            let temp = matrix[i][li];
            matrix[i][li] = matrix[i][ri];
            matrix[i][ri] = temp;
            li++;
            ri--;
        }
    }
};