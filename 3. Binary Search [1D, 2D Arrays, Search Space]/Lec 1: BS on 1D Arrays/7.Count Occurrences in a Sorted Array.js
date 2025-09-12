// gfg -> https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1

// You are given a sorted array of integers arr and an integer target. Your task is to determine how many times target appears in arr.



// Return the count of occurrences of target in the array.


// Examples:
// Input: arr = [0, 0, 1, 1, 1, 2, 3], target = 1

// Output: 3

// Explanation: The number 1 appears 3 times in the array.

// Input: arr = [5, 5, 5, 5, 5, 5], target = 5

// Output: 6

// Explanation: All elements in the array are 5, so the target appears 6 times.

function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let ans = arr.length;;
    
    while(left<=right){
        let mid = Math.floor(left + (right-left) / 2);
        
        if(arr[mid] >= target){
            ans = mid;
            right = mid - 1;
        }else if(arr[mid] < target){
            left = mid + 1;
        }
    }
    
    return ans;
}

function upperBound(arr, target) {
    // code here
    let left = 0;
    let right = arr.length - 1;
    let ans = arr.length;;
    
    while(left<=right){
        let mid = Math.floor(left + (right-left) / 2);
        
        if(arr[mid] > target){
            ans = mid;
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    
    return ans;
}
