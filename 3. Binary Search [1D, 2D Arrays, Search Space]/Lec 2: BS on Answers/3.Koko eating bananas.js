// leetcode -> http://leetcode.com/problems/koko-eating-bananas/submissions/1761198931/

// A monkey is given n piles of bananas, where the 'ith' pile has nums[i] bananas. An integer h represents the total time in hours to eat all the bananas.



// Each hour, the monkey chooses a non-empty pile of bananas and eats k bananas. If the pile contains fewer than k bananas, the monkey eats all the bananas in that pile and does not consume any more bananas in that hour.



// Determine the minimum number of bananas the monkey must eat per hour to finish all the bananas within h hours.


// Examples:
// Input: n = 4, nums = [7, 15, 6, 3], h = 8

// Output: 5

// Explanation: If Koko eats 5 bananas/hr, he will take 2, 3, 2, and 1 hour to eat the piles accordingly. So, he will take 8 hours to complete all the piles.  

// Input: n = 5, nums = [25, 12, 8, 14, 19], h = 5

// Output: 25

// Explanation: If Koko eats 25 bananas/hr, he will take 1, 1, 1, 1, and 1 hour to eat the piles accordingly. So, he will take 5 hours to complete all the piles.


/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let max = -Infinity;
    for (let i = 0; i < piles.length; i++) {
        max = Math.max(piles[i],max);
    }

    let left = 1;
    let right = max;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        let sum = pilesSum(piles, mid, h);

        if(sum <= h){
            right = mid;
        }else{
            left = mid + 1;
        }
    }

    return left;
};

function pilesSum(arr, mid, h) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += Math.ceil(arr[i] / mid);
        if(sum > h){
            break;
        }
    }   
    return sum;
}

