// Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order. The sorting must be done in-place, without making a copy of the original array.


// Examples:
// Input: nums = [1, 0, 2, 1, 0]

// Output: [0, 0, 1, 1, 2]

// Explanation: The nums array in sorted order has 2 zeroes, 2 ones and 1 two

// Input: nums = [0, 0, 1, 1, 1]

// Output: [0, 0, 1, 1, 1]

// Explanation: The nums array in sorted order has 2 zeroes, 3 ones and zero twos


var sortColors = function (arr) {
    let i = 0;
    let j = 0;
    let k = arr.length - 1;
    while (i<=k) {
        if (arr[i] === 0) {
          swap(arr,i,j);
          i++;
          j++;
        } else if (arr[i] === 1) {
            i++;
        } else{
            swap(arr,i,k);
            k--;
        }
    }
};

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}