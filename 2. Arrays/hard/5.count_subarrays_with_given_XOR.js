// gfg -> https://www.geeksforgeeks.org/problems/count-subarray-with-given-xor/1

// Given an array of integers nums and an integer k, return the total number of subarrays whose XOR equals to k.


// Examples:
// Input : nums = [4, 2, 2, 6, 4], k = 6



// Output : 4



// Explanation : The subarrays having XOR of their elements as 6 are [4, 2],  [4, 2, 2, 6, 4], [2, 2, 6], and [6]

// Input :nums = [5, 6, 7, 8, 9], k = 5



// Output : 2



// Explanation : The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]



class Solution {
    subarrayXor(arr, k) {
        // your code here
        let map = new Map();
        map.set(0, 1);
        let pref = 0;
        
        let ans = 0;
        for(let i=0; i<arr.length;i++){
            pref ^= arr[i];
            if(map.has(pref^k)){
                ans += map.get(pref^k) 
            };
            map.set(pref, (map.get(pref) || 0) + 1);
        }
        
        return ans;
    }
}