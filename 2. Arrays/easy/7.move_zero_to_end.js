// Given an integer array nums, move all the 0's to the end of the array. The relative order of the other elements must remain the same. This must be done in place, without making a copy of the array.


// Examples:
// Input: nums = [0, 1, 4, 0, 5, 2]

// Output: [1, 4, 5, 2, 0, 0]

// Explanation: Both the zeroes are moved to the end and the order of the other elements stay the same

// Input: nums = [0, 0, 0, 1, 3, -2]

// Output: [1, 3, -2, 0, 0, 0]

// Explanation: All 3 zeroes are moved to the end and the order of the other elements stay the same

// // https://leetcode.com/problems/move-zeroes/description/



// approch -> 1
// var moveZeroes = function(arr) {

//     if (arr.length <= 1) return;

//     let i = 0;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] !== 0) {
//             if (i !== j) {
//                 const t = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = t;
//             }
//             i++;
//         }
//     }
// };


// approch 2 

var moveZeroes = function(arr) {
    let pos = 0;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== 0){
            arr[pos] = arr[i];
            pos++;
        }
    }

    while(pos<arr.length){
        arr[pos] = 0;
        pos++;
    }
};
