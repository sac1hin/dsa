// gfg -> https://www.geeksforgeeks.org/problems/subset-sums2234/1

// Given an array nums of n integers. Return array of sum of all subsets of the array nums.



// Output can be returned in any order.


// Examples:
// Input : nums = [2, 3]

// Output : [0, 2, 3, 5]

// Explanation :

// When no elements is taken then Sum = 0.

// When only 2 is taken then Sum = 2.

// When only 3 is taken then Sum = 3.

// When element 2 and 3 are taken then sum = 2+3 = 5.

// Input : nums = [5, 2, 1]

// Output : [0, 1, 2, 3, 5, 6, 7, 8]

// Explanation :

// When no elements is taken then Sum = 0.

// When only 5 is taken then Sum = 5.

// When only 2 is taken then Sum = 2.

// When only 1 is taken then Sum = 1.

// When element 2 and 1 are taken then sum = 2+1 = 3.

class Solution {
    subsetSums(arr) {
        // code here
        const ans =  []
        this.recursion(0, arr, 0 , ans);
        return ans;
    }
    
    recursion(idx, arr, sum, ans){
        if(idx === arr.length){
            ans.push(sum)
            return;
        }
        this.recursion(idx+1, arr,sum, ans);
        this.recursion(idx+1, arr,sum + arr[idx], ans);
    }
}
