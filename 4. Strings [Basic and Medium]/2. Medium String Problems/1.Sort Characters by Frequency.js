// leetcode -> https://leetcode.com/problems/sort-characters-by-frequency/description/


// You are given a string s. Return the array of unique characters, sorted by highest to lowest occurring characters.



// If two or more characters have same frequency then arrange them in alphabetic order.


// Examples:
// Input : s = "tree"

// Output : ['e', 'r', 't' ]

// Explanation :

// The occurrences of each character are as shown below :

// e --> 2

// r --> 1

// t --> 1.

// The r and t have same occurrences , so we arrange them by alphabetic order.

// Input : s = "raaaajj"

// Output : ['a' , 'j', 'r' ]

// Explanation :

// The occurrences of each character are as shown below :

// a --> 4

// j --> 2

// r --> 1

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = new Map();

    for (let i of s) {
        map.set(i, (map.get(i) || 0) + 1);
    }

    let arr = Array.from(map.entries());
    arr.sort((a, b) => b[1] - a[1]);

    let result = "";
    for (let [ch, freq] of arr) {
        result += ch.repeat(freq);
    }

    return result;

};