// leetcode -> https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/

// Given an array of integers nums and an integer limit as the threshold value, find the smallest positive integer divisor such that upon dividing all the elements of the array by this divisor, the sum of the division results is less than or equal to the threshold value.

// Each result of the division is rounded up to the nearest integer greater than or equal to that element.


// Examples:
// Input: nums = [1, 2, 3, 4, 5], limit = 8

// Output: 3

// Explanation: We can get a sum of 15(1 + 2 + 3 + 4 + 5) if we choose 1 as a divisor. 

// The sum is 9(1 + 1 + 2 + 2 + 3) if we choose 2 as a divisor. Upon dividing all the elements of the array by 3, we get 1,1,1,2,2 respectively. Now, their sum is equal to 7 <= 8 i.e. the threshold value. So, 3 is the minimum possible answer.

// Input: nums = [8,4,2,3], limit = 10

// Output: 2

// Explanation: If we choose 1, we get 17 as the sum. If we choose 2, we get 9 (4+2+1+2) <= 10 as the answer. So, 2 is the answer.


/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(nums[i], max);
    }

    let left = 1;
    let right = max;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let num = getSmallestDivisor(nums, mid);

        if (num > threshold) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

function getSmallestDivisor(arr, divisor) {

    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans += Math.ceil(arr[i] / divisor);
    }

    return ans;
}