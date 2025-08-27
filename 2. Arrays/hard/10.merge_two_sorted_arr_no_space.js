// gfg -> https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1

// Given two integer arrays nums1 and nums2. Both arrays are sorted in non-decreasing order.



// Merge both the arrays into a single array sorted in non-decreasing order.

// The final sorted array should be stored inside the array nums1 and it should be done in-place.
// nums1 has a length of m + n, where the first m elements denote the elements of nums1 and rest are 0s.
// nums2 has a length of n.

// Examples:
// Input: nums1 = [-5, -2, 4, 5], nums2 = [-3, 1, 8]

// Output: [-5, -3, -2, 1, 4, 5, 8]

// Explanation: The merged array is: [-5, -3, -2, 1, 4, 5, 8], where [-5, -2, 4, 5] are from nums1 and [-3, 1, 8] are from nums2

// Input: nums1 = [0, 2, 7, 8], nums2 = [-7, -3, -1]

// Output: [-7, -3, -1, 0, 2, 7, 8]

// Explanation: The merged array is: [-7, -3, -1, 0, 2, 7, 8], where [0, 2, 7, 8] are from nums1 and [-7, -3, -1] are from nums2

class Solution {
    mergeArrays(a, b) {
        // code here
        let n = a.length;
        let m = b.length;
        
        let gap = Math.ceil((n+m) / 2);
        let get = (idx) => (idx < n ? a[idx] : b[idx - n]);
        let set = (idx,val) => (idx < n ? a[idx] = val : b[idx-n] = val)
        
        while(gap > 0){
            let i = 0; 
            let j = gap;
            
            while(j < m+n){
                let vi = get(i);
                let vj = get(j)
                if(vi > vj){
                    set(i,vj);
                    set(j,vi);
                }
                i++;
                j++;
            }
            if(gap === 1)break;
            gap = Math.ceil(gap / 2);
        }
    }
}