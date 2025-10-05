// leetcode -> https://leetcode.com/problems/word-search/submissions/1790885504/

// Given a grid of n x m dimension grid of characters board and a string word.The word can be created by assembling the letters of successively surrounding cells, whether they are next to each other vertically or horizontally. It is forbidden to use the same letter cell more than once.

// Return true if the word exists in the grid otherwise false.


// Examples:
// Input : board = [ ["A", "B", "C", "E"] , ["S" ,"F" ,"C" ,"S"] , ["A", "D", "E", "E"] ] , word = "ABCCED"

// Output : true

// Explanation : The word is coloured in yellow.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (recursion(board, word, 0, i, j)) return true;
        }
    }

    return false
};

function recursion(arr, word, idx, row, col) {
    if (idx >= word.length) return true;

    if (row < 0 || col < 0 || row >= arr.length || col >= arr[0].length) {
        return false;
    }

    if (arr[row][col] !== word[idx]) return false;

    let temp = arr[row][col];
    arr[row][col] = "$";

    let found =
        recursion(arr, word, idx + 1, row - 1, col) ||
        recursion(arr, word, idx + 1, row, col - 1) ||
        recursion(arr, word, idx + 1, row + 1, col) ||
        recursion(arr, word, idx + 1, row, col + 1)

    arr[row][col] = temp;

    return found;
}