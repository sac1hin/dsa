// leetcode -> https://leetcode.com/problems/n-queens/description/

// The challenge of arranging n queens on a n × n chessboard so that no two queens attack one another is known as the "n-queens puzzle."



// Return every unique solution to the n-queens puzzle given an integer n. The answer can be returned in any sequence.



// Every solution has a unique board arrangement for the placement of the n-queens, where 'Q' and '.' stand for a queen and an empty space, respectively.


// Examples:
// Input : n = 4

// Output : [[".Q.." , "...Q" , "Q..." , "..Q."] , ["..Q." , "Q..." , "...Q" , ".Q.."]]

// Explanation : There are two possible combinations as shown below.

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let arr = new Array(n).fill(null).map(() => new Array(n).fill("."));
    let ans = [];
    recursion(arr, 0, n, ans, "")
    return ans.map(board => board.map(row => row.join("")));
};

function recursion(arr, row, n, ans) {
    if (row === n) {
        ans.push(arr.map(r => [...r]));
        return;
    }

    for (let j = 0; j < arr[0].length; j++) {
        if (isSafe(arr, row, j)) {
            arr[row][j] = "Q";
            recursion(arr, row + 1, n, ans)
            arr[row][j] = ".";
        }
    }
}

function isSafe(arr, row, col) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][col] === "Q") {
            return false;
        }
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (arr[i][j] === "Q") return false;
    }


    for (let i = row - 1, j = col + 1; i >= 0 && j < arr.length; i--, j++) {
        if (arr[i][j] === "Q") return false;
    }

    return true;
}