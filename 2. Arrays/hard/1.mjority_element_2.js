// leetcode -> https://leetcode.com/problems/majority-element-ii/


// Given an integer array nums of size n. Return all elements which appear more than n/3 times in the array. The output can be returned in any order.


// Examples:
// Input: nums = [1, 2, 1, 1, 3, 2]

// Output: [1]

// Explanation: Here, n / 3 = 6 / 3 = 2.

// Therefore the elements appearing 3 or more times is : [1]

// Input: nums = [1, 2, 1, 1, 3, 2, 2]

// Output: [1, 2]

// Explanation: Here, n / 3 = 7 / 3 = 2.

// Therefore the elements appearing 3 or more times is : [1, 2]

var majorityElement = function (nums) {
    let candidate1 = null;
    let count1 = 0;
    let candidate2 = null;
    let count2 = 0;

    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        if (candidate1 == x) {
            count1++;
        }else if(candidate2 == x){
            count2++;
        }else if(count1 === 0){
            candidate1 = x;
            count1++;
        }else if(count2 === 0){
            candidate2 = x;
            count2++;
        }else{
            count1--;
            count2--;
        }
    }

    count1 = 0;
    count2 = 0;
    for(let i=0; i<nums.length; i++){
        if (candidate1 === nums[i]) {
            count1++;
        } else if (candidate2 === nums[i]) {
            count2++;
        }
    }
    
    let n = Math.floor(nums.length / 3);
    const ans = []
    if(count1 > n){
        ans.push(candidate1)
    }
    if(count2 > n){
        ans.push(candidate2)
    }
    return ans;
};