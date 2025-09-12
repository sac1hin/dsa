

// Given a sorted array nums and an integer x. Find the floor and ceil of x in nums. The floor of x is the largest element in the array which is smaller than or equal to x. The ceiling of x is the smallest element in the array greater than or equal to x. If no floor or ceil exists, output -1.


// Examples:
// Input : nums =[3, 4, 4, 7, 8, 10], x= 5

// Output: 4 7

// Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

// Input : nums =[3, 4, 4, 7, 8, 10], x= 8

// Output: 8 8

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const findF = findFirst(nums, target);
    const findL = findLast(nums, target);

    return [findF,findL]
};

function findFirst(arr, x) {
    // your code here
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === x) {
            ans = mid;
            right = mid - 1;
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}

function findLast(arr, x) {
    // your code here
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === x) {
            ans = mid;
            left = mid + 1;
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
}
