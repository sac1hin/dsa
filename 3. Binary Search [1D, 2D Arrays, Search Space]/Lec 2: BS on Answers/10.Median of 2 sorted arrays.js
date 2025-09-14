// // leetcode -> https://leetcode.com/problems/median-of-two-sorted-arrays/description/

// Given two sorted arrays arr1 and arr2 of size m and n respectively, return the median of the two sorted arrays.



// The median is defined as the middle value of a sorted list of numbers. In case the length of the list is even, the median is the average of the two middle elements.


// Examples:
// Input: arr1 = [2, 4, 6], arr2 = [1, 3, 5]

// Output: 3.5

// Explanation: The array after merging arr1 and arr2 will be [ 1, 2, 3, 4, 5, 6 ]. As the length of the merged list is even, the median is the average of the two middle elements. Here two medians are 3 and 4. So the median will be the average of 3 and 4, which is 3.5.

// Input: arr1 = [2, 4, 6], arr2 = [1, 3]

// Output: 3.0

// Explanation: The array after merging arr1 and arr2 will be [ 1, 2, 3, 4, 6 ]. The median is simply 3.


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    let total = nums1.length + nums2.length;

    let idx2 = Math.floor(total / 2)

    let i = 0;
    let j = 0;
    let prev = 0, curr = 0 , count = -1;

    while (count < idx2) {
        prev = curr;
        if (i < m && (j >= n || nums1[i] <= nums2[j])) {
            curr = nums1[i++]
        } else {
            curr = nums2[j++]
        }
        count++;
    }

    if (total % 2 === 1) return curr;
    return (prev + curr) / 2;
};