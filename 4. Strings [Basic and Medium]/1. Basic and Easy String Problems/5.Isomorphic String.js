// // leetcode -> https://leetcode.com/problems/isomorphic-strings/


// Given two strings s and t, determine if they are isomorphic. Two strings s and t are isomorphic if the characters in s can be replaced to get t.



// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


// Examples:
// Input : s = "egg" , t = "add"

// Output : true

// Explanation :

// The 'e' in string s can be replaced with 'a' of string t.

// The 'g' in string s can be replaced with 'd' of t.

// Hence all characters in s can be replaced to get t.

// Input : s = "apple" , t = "bbnbm"

// Output : false

// Explanation :

// It can be proved that no solution exists for this example.

// All the "b"s in t have to take places of "a", "p", "l", which requires "p" to be mapped to "b", but that makes it impossible for "p" at index 2 (0-indexed) to become "n". Thus no solution exists.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const c1 = s[i], c2 = t[i];

        if(mapST.has(c1) && mapST.get(c1) !== c2){
            return false
        }

        if(mapTS.has(c2) && mapTS.get(c2) !== c1){
            return false
        }

        mapST.set(c1, c2);
        mapTS.set(c2, c1);

    }

    return true;
};

