// leet code ->  https://leetcode.com/problems/reverse-pairs/submissions/1752832717/

// Given an integer array nums. Return the number of reverse pairs in the array.



// An index pair (i, j) is called a reverse pair if:



// 0 <= i < j < nums.length


// nums[i] > 2 * nums[j]



// Examples:
// Input: nums = [6, 4, 1, 2, 7]

// Output: 3

// Explanation: The reverse pairs are:

// (0, 2) : nums[0] = 6, nums[2] = 1, 6 > 2 * 1

// (0, 3) : nums[0] = 6, nums[3] = 2, 6 > 2 * 2

// (1, 2) : nums[1] = 4, nums[2] = 1, 4 > 2 * 1

// Input: nums = [5, 4, 4, 3, 3]

// Output: 0

// Explanation: No pairs satisfy both the conditons.


/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    return reversePairsCount(nums, 0, nums.length - 1)
};

function reversePairsCount(arr, l, r) {
    if (l >= r) {
        return 0;
    }
    let mid = Math.floor(l + (r - l) / 2);
    let lcount = reversePairsCount(arr, l, mid);
    let rcount = reversePairsCount(arr, mid + 1, r);
    let mergeCount = reversePairsCountMerge(arr, l, mid, r);
    return lcount + rcount + mergeCount;
}

function reversePairsCountMerge(arr, l, mid, r) {
    let left = l;
    let right = mid + 1;
    let temp = []
    let count = 0;

    for (let i = l; i <= mid; i++) {
        while (right <= r && arr[i] > 2 * arr[right]) {
            right++;
        }

        count += right - (mid + 1);
    }

    right = mid + 1;
    while (left <= mid && right <= r) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    while (right <= r) {
        temp.push(arr[right]);
        right++;
    }


    for (let i = 0; i < temp.length; i++) {
        arr[i + l] = temp[i];
    }

    return count;
}