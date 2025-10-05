// gfg -> https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

// Given a grid of dimensions n x n. A rat is placed at coordinates (0, 0) and wants to reach at coordinates (n-1, n-1).



// Find all possible paths that rat can take to travel from (0, 0) to (n-1, n-1). The directions in which rat can move are 'U' (up) , 'D' (down) , 'L' (left) , 'R' (right).



// The value 0 in grid denotes that the cell is blocked and rat cannot use that cell for travelling, whereas value 1 represents that rat can travel through the cell. If the cell (0, 0) has 0 value, then mouse cannot move to any other cell.



// Note :

// In a path no cell can be visited more than once.
// If there is no possible path then return empty vector.

// Examples:
// Input : n = 4 , grid = [ [1, 0, 0, 0] , [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1] ]

// Output : [ "DDRDRR" , "DRDDRR" ]

// Explanation : The rat has two different path to reach (3, 3).

// The first path is (0, 0) => (1, 0) => (2, 0) => (2, 1) => (3, 1) => (3, 2) => (3, 3).

// The second path is (0,0) => (1,0) => (1,1) => (2,1) => (3,1) => (3,2) => (3,3).

// Input : n = 2 , grid = [ [1, 0] , [1, 0] ]

// Output : -1

// Explanation : There is no path that rat can choose to travel from (0,0) to (1,1).


/**
 * @param {number[][]} mat
 * @returns {string[]}
 */
class Solution {
    ratInMaze(maze) {
        // code here
        const ans = []
        this.recursion(maze, 0 , 0, ans, "")
        return ans;
    }
    
    recursion(arr, row, col, ans, asf) {
        if (row == arr.length - 1 && col == arr[0].length - 1) {
            ans.push(asf);
            return;
        };
    
        if (row < 0 || col < 0 || row >= arr.length || col >= arr[0].length || arr[row][col] === 0) {
            return;
        }
    
        arr[row][col] = 0;
    
        this.recursion(arr, row + 1, col, ans, asf + "D");
        this.recursion(arr, row, col - 1, ans, asf + "L");
        this.recursion(arr, row, col + 1, ans, asf + "R");
        this.recursion(arr, row - 1, col, ans, asf + "U"); 
    
        arr[row][col] = 1;
    
    }
}