// gfg -> https://www.geeksforgeeks.org/problems/sort-a-stack/1

// You are given a stack of integers. Your task is to sort the stack in descending order using recursion, such that the top of the stack contains the greatest element. You are not allowed to use any loop-based sorting methods (e.g., quicksort, mergesort). You may only use recursive operations and the standard stack operations (push, pop, peek/top, and isEmpty).


// Examples:
// Input: stack = [4, 1, 3, 2]

// Output: [4, 3, 2, 1]

// Explanation:

// After sorting, the largest element (4) is at the top, and the smallest (1) is at the bottom.



// Input: stack = [1]

// Output: [1]

// Explanation:

// A single-element stack is already sorted.


/**
 * @param {number[]} st
 * @returns {void}
 */
class Solution {
    sortStack(st) {
        // code here
        if(st.length <= 1){
            return;
        }
        
        let top = st.pop();
        
        this.sortStack(st)
        
        this.sortTheArray(st,top)
    }
    
    
    sortTheArray(arr,val){
        if(arr.length === 0 || arr[arr.length-1] <= val){
            arr.push(val);
            return
        }
        
        let temp = arr.pop();  
        this.sortTheArray(arr, val);
        arr.push(temp);
    }
    
}