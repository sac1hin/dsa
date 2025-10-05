// leetcode -> https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

// Given a string consisting of digits from 2 to 9 (inclusive). Return all possible letter combinations that the number can represent.

// Mapping of digits to letters is given in first example.


// Examples:
// Input : digits = "34"

// Output : [ "dg", "dh", "di", "eg", "eh", "ei", "fg", "fh", "fi" ]

// Explanation : The 3 is mapped with "def" and 4 is mapped with "ghi".

// So all possible combination by replacing the digits with characters are shown in output.


/**
 * @param {string} digits
 * @return {string[]}
 */
let maps = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
}

var letterCombinations = function (digits) {
    const ans = [];
    recursion(0, digits, ans, "");
    return ans;
};
//34


function recursion(idx, arr, ans, asf) {
    if (idx === arr.length) {
        if(asf.length){
            ans.push(asf);
        }
        return;
    }

    let ch = maps[arr[idx]];
    for (let i = 0; i < ch.length; i++) {
        recursion(idx + 1, arr, ans, asf + ch[i]);
    }
}