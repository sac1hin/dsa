// leetcode -> https://leetcode.com/problems/next-permutation/description/


// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr:

// [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integers.

// More formally, if all the permutations of the array are sorted in lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted order.
// If such arrangement is not possible (i.e., the array is the last permutation), then rearrange it to the lowest possible order (i.e., sorted in ascending order).
// You must rearrange the numbers in-place and use only constant extra memory.


// Examples:
// Input: nums = [1,2,3]

// Output: [1,3,2]

// Explanation: The next permutation of [1,2,3] is [1,3,2].

// Input: nums = [3,2,1]

// Output: [1,2,3]

// Explanation: [3,2,1] is the last permutation. So we return the first: [1,2,3].

const nums = [2,1,5,4,0,0];


var nextPermutation = function (nums) {
    let idx = -1;
    let n = nums.length - 1;
    for (let i = n - 1; i >= 0; i--) {
        if(nums[i] < nums[i+1]){
            idx = i;
            break;
        }
    }   

    if(idx === -1){
        reverseArray(nums,0,n);
        return;
    }

    for(let i = n; i>=idx; i--){
        if(nums[i] > nums[idx]){
            let temp = nums[i];
            nums[i] = nums[idx];
            nums[idx] = temp;
            break;
        }
    }

    reverseArray(nums, idx+1, n);
};

const reverseArray = (arr, i , j) => {
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}



// const permutation = (arr,ans) => {
//     if(arr.length === 0){
//         return ans;
//     }

//     for(let i=0; i<arr.length; i++){
//         let num = arr[i];
//         let res = arr.slice(0, i).concat(arr.slice(i + 1));
//         permutation(res, ans.concat(num));
//     }
// }

// const permutations = (arr) => {
//     if (arr.length === 0) return [[]];
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//       const rest = arr.slice(0, i).concat(arr.slice(i + 1));
//       for (const p of permutations(rest)) {
//         res.push([arr[i], ...p]);
//       }
//     }
//     return res;
//   };
  
//   console.log(permutations([1, 2, 3]));
//   // -> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
  
// // console.log(permutation(nums,[]));