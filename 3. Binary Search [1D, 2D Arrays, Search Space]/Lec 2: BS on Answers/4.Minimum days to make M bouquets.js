// leetcode -> https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/description/


// Given n roses and an array nums where nums[i] denotes that the 'ith' rose will bloom on the nums[i]th day, only adjacent bloomed roses can be picked to make a bouquet. Exactly k adjacent bloomed roses are required to make a single bouquet. Find the minimum number of days required to make at least m bouquets, each containing k roses. Return -1 if it is not possible.


// Examples:
// Input: n = 8, nums = [7, 7, 7, 7, 13, 11, 12, 7], m = 2, k = 3

// Output: 12

// Explanation: On the 12th the first 4 flowers and the last 3 flowers would have already bloomed. So, we can easily make 2 bouquets, one with the first 3 and another with the last 3 flowers.

// Input: n = 5, nums = [1, 10, 3, 10, 2], m = 3, k = 2

// Output: -1

// Explanation: If we want to make 3 bouquets of 2 flowers each, we need at least 6 flowers. But we are given only 5 flowers, so, we cannot make the bouquets.


/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {

    if (m * k > bloomDay.length) {
        return -1;
    }

    let min = Infinity;
    let max = -Infinity;
    let ans = -1;

    for (let i = 0; i < bloomDay.length; i++) {
        min = Math.min(bloomDay[i], min);
        max = Math.max(bloomDay[i], max);
    }

    let left = min;
    let right = max;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let count = getBloomDay(bloomDay, mid, k);
        
        if (count >= m) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }

    return ans;
};

function getBloomDay(arr, day, k) {
    let count = 0;
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= day) {
            count++;
        }

        if (count === k) {
            ans++;
            count = 0;
        }

        if (arr[i] > day) {
            count = 0;
        }
    }

    return ans;
}