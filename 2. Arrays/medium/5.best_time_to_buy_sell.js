// Given an array arr of n integers, where arr[i] represents price of the stock on the ith day. Determine the maximum profit achievable by buying and selling the stock at most once. 



// The stock should be purchased before selling it, and both actions cannot occur on the same day.


// Examples:
// Input: arr = [10, 7, 5, 8, 11, 9]

// Output: 6

// Explanation: Buy on day 3 (price = 5) and sell on day 5 (price = 11), profit = 11 - 5 = 6.

// Input: arr = [5, 4, 3, 2, 1]

// Output: 0

// Explanation: In this case, no transactions are made. Therefore, the maximum profit remains 0.


var maxProfit = function(prices) {
    let ans = 0; 
    let max = prices[prices.length - 1];

    for(let i=prices.length-2; i>=0 ; i--){
        if(max > prices[i]){
            ans = Math.max(ans,max-prices[i]);
        }else{
            max = prices[i];
        }
    }

    return ans;
};