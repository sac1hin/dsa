// gfg -> https://www.geeksforgeeks.org/problems/generate-all-binary-strings/1

// Given an integer n. You need to generate all the binary strings of n bits.

// Note: Return the strings in  ascending order.

// Examples:

// Input: n = 2
// Output: [00, 01, 10, 11]
// Explanation: As each position can be either 0 or 1, the total possible combinations are 4.
// Input: n = 3
// Output: [000, 001, 010, 011, 100, 101, 110, 111]
// Explanation: As each position can be either 0 or 1, the total possible combinations are 8.

class Solution {
    binstr(n) {
        // code here
        let answer = [];
        this.recursion("",n,answer);
        return answer;
    }
    
    recursion(curr,n,ans){
        if(n==0){
            ans.push(curr);
            return
        }
        this.recursion(curr+"0",n-1,ans);
        this.recursion(curr+"1",n-1,ans);
    }
}