// Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.


// Examples:
// Input: nums = [8, 8, 7, 6, 5]

// Output: 7

// Explanation: The largest value in nums is 8, the second largest is 7

// Input: nums = [10, 10, 10, 10, 10]

// Output: -1

// Explanation: The only value in nums is 10, so there is no second largest value, thus -1 is returned

const nums = [8, 8, 7, 6, 5]
var secondHighest = function(arr) {
    let max = -1;
    let secMax = -1;  
    for(let i=0; i<arr.length; i++){
        if(max > arr[i] && secMax < arr[i]){
            secMax = arr[i];
        }else if(max < arr[i]){
            secMax = max;
            max = arr[i];
        }
    }
    return secMax;
};


console.log(secondHighest(nums))