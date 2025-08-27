// leetcode -> https://leetcode.com/problems/pascals-triangle/

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:

// Input: numRows = 1
// Output: [[1]]

var generate = function (numRows) {
    const ans = [];
    for (let i = 0; i < numRows; i++) {
        let temp = [];
        for (let j = 0; j <= i; j++) {
            if(j==0 || j==i){
                temp.push(1);
            }else{
                let sum = ans[i-1][j-1] + ans[i-1][j]
                temp.push(sum);
            }
        }
        ans.push(temp);
    }

    return ans;
};