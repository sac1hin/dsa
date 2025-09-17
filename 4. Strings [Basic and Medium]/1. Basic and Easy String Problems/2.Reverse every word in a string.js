// leetcode -> https://leetcode.com/problems/reverse-words-in-a-string/

// Given an input string, containing upper-case and lower-case letters, digits, and spaces( ' ' ). A word is defined as a sequence of non-space characters. The words in s are separated by at least one space.



// Return a string with the words in reverse order, concatenated by a single space.


// Examples:
// Input: s = "welcome to the jungle"



// Output: "jungle the to welcome"



// Explanation: The words in the input string are "welcome", "to", "the", and "jungle". Reversing the order of these words gives "jungle", "the", "to", and "welcome". The output string should have exactly one space between each word.



/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const n = s.length;
    let i = 0;
    let arr = [];

    while (i < n && s[i] === ' ') i++;

    let word = "";
    for (; i < n; i++) {
        let ch = s[i];
        console.log("arr", ch)

        if (ch === ' ') {
            if(word !== ""){
                arr.push(word);
            }
            word = "";
        } else {
            word += ch;
        }
    }

    if(word !== ""){
        arr.push(word);
    }

    return reverse(arr).join(" ");
};

function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr;
};