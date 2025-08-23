// Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. The elements in the union must be in ascending order.



// The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.


// Examples:
// Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]

// Output: [1, 2, 3, 4, 5, 7]

// Explanation: The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2

// Input: nums1 = [3, 4, 6, 7, 9, 9], nums2 = [1, 5, 7, 8, 8]

// Output: [1, 3, 4, 5, 6, 7, 8, 9]

// Explanation: The element 7 is common to both, 3, 4, 6, 9 are from nums1 and 1, 5, 8 is from nums2



function findUnion(a, b) {
    // code here
    let i = 0; let j = 0;
    let ans = []
    while(i<a.length && j<b.length){
        if(a[i] < b [j]){
            if(ans[ans.length-1] !== a[i]){
                ans.push(a[i]);
            }
            i++;
        }else if(a[i] > b[j]){
            if(ans[ans.length-1] !== b[j]){
                ans.push(b[j]);
            }
            j++;
        }else{
            if(ans[ans.length-1] !== b[j]){
                ans.push(b[j]);
            }
            i++;
            j++;
        }
    }
    
    while(i<a.length){
        if(ans[ans.length-1] !== a[i]){
            ans.push(a[i]);
        }
        i++;
    }
    
    while(j<b.length){
        if(ans[ans.length-1] !== b[j]){
            ans.push(b[j]);
        }
        j++;
    }
    
    return ans;
}