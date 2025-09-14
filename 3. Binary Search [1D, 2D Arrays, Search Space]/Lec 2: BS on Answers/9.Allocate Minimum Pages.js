// gfg -> https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1

// Given an array nums of n integers, where nums[i] represents the number of pages in the i-th book, and an integer m representing the number of students, allocate all the books to the students so that each student gets at least one book, each book is allocated to only one student, and the allocation is contiguous.



// Allocate the books to m students in such a way that the maximum number of pages assigned to a student is minimized. If the allocation of books is not possible, return -1.


// Examples:
// Input: nums = [12, 34, 67, 90], m=2

// Output: 113

// Explanation: The allocation of books will be 12, 34, 67 | 90. One student will get the first 3 books and the other will get the last one.

// Input: nums = [25, 46, 28, 49, 24], m=4

// Output: 71

// Explanation: The allocation of books will be 25, 46 | 28 | 49 | 24.


/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    findPages(arr, k) {
        
        if(arr.length < k ){
            return -1;
        }
        // code here
        
        let left = 0;
        let right = 0;
        
        for(let num of arr){
            left = Math.max(left,num);
            right += num;
        }
        
        while(left <= right){
            let mid = Math.floor(left + (right - left) / 2);
            
            if(this.isPossible(arr,k,mid)){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
        return left;
    }
    
    isPossible(arr,k,max){
        let sum = 0;
        let count = 1;
        for(let i = 0; i<arr.length; i++){
            if(arr[i] > max) return false;
            if(sum + arr[i] > max){
                count++;
                sum = arr[i];
                if(count > k) return false;
            }else{
                sum += arr[i];
            }
        }
        
        return true;
    }
}











