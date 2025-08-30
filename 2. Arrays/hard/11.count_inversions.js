// gfg -> https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1


// Given an integer array nums. Return the number of inversions in the array.



// Two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

// It indicates how close an array is to being sorted.
// A sorted array has an inversion count of 0.
// An array sorted in descending order has maximum inversion.

// Examples:
// Input: nums = [2, 3, 7, 1, 3, 5]

// Output: 5

// Explanation: The responsible indexes are:

// nums[0], nums[3], values: 2 > 1 & indexes: 0 < 3

// nums[1], nums[3], values: 3 > 1 & indexes: 1 < 3

// nums[2], nums[3], values: 7 > 1 & indexes: 2 < 3

// nums[2], nums[4], values: 7 > 3 & indexes: 2 < 4

// nums[2], nums[5], values: 7 > 5 & indexes: 2 < 5

// Input: nums = [-10, -5, 6, 11, 15, 17]

// Output: 0

// Explanation: nums is sorted, hence no inversions present.
/**
 * 
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    inversionCount(arr) {
        return this.inversionMerge(arr, 0, arr.length - 1);
    }

    inversionMerge(arr, l, r) {
        if (l >= r) {
            return 0;
        }

        let mid = Math.floor(l + (r - l) / 2);
        let lcount = this.inversionMerge(arr, l, mid);
        let rcount = this.inversionMerge(arr, mid + 1, r);
        let mergeCount = this.mergeTwoSortedArray(arr, l, mid, r);
        return lcount + rcount + mergeCount;
    }

    mergeTwoSortedArray(arr, l, mid, r) {
        let left = l;
        let right = mid + 1;
        let count = 0;
        let temp = [];
        while (left <= mid && right <= r) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            } else {
                temp.push(arr[right]);
                count += mid - left + 1;
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
}
