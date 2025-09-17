// leetcode -> https://leetcode.com/problems/valid-anagram/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.


// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// Examples:
// Input : s = "anagram" , t = "nagaram"

// Output : true

// Explanation :

// We can rearrange the characters of string s to get string t as frequency of all characters from both strings is same.

// Input : s = "dog" , t = "cat"

// Output : false

// Explanation :

// We cannot rearrange the characters of string s to get string t as frequency of all characters from both strings is not same.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map();
    for(let char of s){
        map.set(char, (map.get(char) || 0) + 1);
    }
    for(let char of t){
        if(!map.has(char)) return false;
        const newCount = map.get(char) - 1;
        if(newCount === 0) {
            map.delete(char);
        } else {
            map.set(char, newCount);
        }
    }
    
    return map.size === 0;
};