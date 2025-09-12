// leetcode -> https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/

// You are given an array weights where weights[i] represents the weight of the i-th package on a conveyor belt. All the packages must be shipped in the order given from one port to another within days days.



// Each day, the ship can carry a contiguous sequence of packages, as long as the total weight does not exceed its maximum capacity.



// Your task is to find the minimum possible capacity of the ship so that all packages can be shipped within the given number of days.


// Examples:
// Input: weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5

// Output: 15

// Explanation:

// Minimum ship capacity = 15. One way to ship in 5 days:

// Day 1: 1 + 2 + 3 + 4 + 5 = 15
// Day 2: 6 + 7 = 13
// Day 3: 8
// Day 4: 9
// Day 5: 10


// No day exceeds capacity 15 and all packages are shipped in order in 5 days.

// Input: weights = [3, 2, 2, 4, 1, 4], days = 3

// Output: 6

// Explanation:

// One possible division with capacity 6:

// Day 1: 3 + 2 = 5
// Day 2: 2 + 4 = 6
// Day 3: 1 + 4 = 5


// All packages shipped in order within 3 days.

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let left = -Infinity;
    let right = 0;

    for (let w of weights) {
        left = Math.max(left, w);
        right += w;
    }

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        const need = daysNeeded(weights, mid);
        if (need <= days) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left
};

const daysNeeded = (arr, capacity) => {
    let dayCount = 1;
    let load = 0;
    for (let i = 0; i < arr.length; i++) {
        if (load + arr[i] <= capacity) {
            load += arr[i];
        } else {
            dayCount++;
            load = arr[i];
        }
    }

    return dayCount;
}