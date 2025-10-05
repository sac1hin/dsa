// leetcode -> https://leetcode.com/problems/expression-add-operators/submissions/1791823831/

// Given a string num consisting of only digits and an integer target.Return all possibilities to insert the binary operators '+' , '*' , '-' between the digits of string nums, such that resultant expression evaluates to target value.


// Examples:
// Input : num = "123", target = 6

// Output : ["1*2*3" , "1+2+3"]

// Explanation :

// Both "1*2*3" and "1+2+3" evaluate to 6.

// Input : num = "0232", target = 8

// Output : ["0+2*3+2" , "0+2+3*2"]

// Explanation :

// Both "0+2*3+2" and "0+2+3*2" evaluate to 8.


/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
    const ans = []
    recursion(num, target, 0, "", 0, 0, ans);
    return ans;
};

function recursion(num, target, idx, expr, evalSoFar, lastMul, ans) {
    if (idx === num.length) {
        if (evalSoFar === target) ans.push(expr);
        return;
    }


    for (let i = idx; i < num.length; i++) {
        if (i > idx && num[idx] === '0') break;

        const partStr = num.slice(idx, i + 1);
        const cur = Number(partStr);

        if (idx === 0) {
            recursion(num, target, i + 1, partStr, cur, cur, ans);
        } else {
            recursion(num, target, i + 1, expr + "+" + partStr, evalSoFar + cur, cur, ans);
            recursion(num, target, i + 1, expr + "-" + partStr, evalSoFar - cur, -cur, ans);
            recursion(
                num, target, i + 1,
                expr + "*" + partStr,
                evalSoFar - lastMul + lastMul * cur,
                lastMul * cur,
                ans
            );
        }
    }
}