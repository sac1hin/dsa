// leetcode -> https://leetcode.com/problems/merge-intervals/description/

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.



// You can return the intervals in any order.


// Examples:
// Input: intervals = [[1,5],[3,6],[8,10],[15,18]]

// Output: [[1,6],[8,10],[15,18]]

// Explanation: Intervals [1,5] and [3,6] overlap, so they are merged into [1,6].

// Input: intervals = [[5,7],[1,3],[4,6],[8,10]]

// Output: [[1,3],[4,7],[8,10]]

// Explanation: Intervals [4,6] and [5,7] overlap and are merged into [4,7].


var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let ans = [];
    let li = [0, 0];
    
    li[0] = intervals[0][0];
    li[1] = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        let cstart = intervals[i][0];
        let cend = intervals[i][1];

        if (li[1] >= cstart) {
            li[1] = Math.max(li[1], cend);
        } else {
            ans.push([li[0], li[1]]);
            li[0] = cstart;
            li[1] = cend;
        }
    }
    ans.push([li[0], li[1]]);
    return ans;
};