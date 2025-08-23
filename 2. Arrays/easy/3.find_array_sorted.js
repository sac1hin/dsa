// Given an array nums of n integers, return true if the array nums is sorted in non-decreasing order or else false.


// Examples:
// Input : nums = [1, 2, 3, 4, 5]

// Output : true

// Explanation : For all i (1 <= i <= 4) it holds nums[i] <= nums[i+1], hence it is sorted and we return true.

// Input : nums = [1, 2, 1, 4, 5]

// Output : false

// Explanation : For i == 2 it does not hold nums[i] <= nums[i+1], hence it is not sorted and we return false.



var check = function(nums) {
    let drop = 0;

    for(let i=0; i < nums.length; i++){
        if(nums[i] > nums[(i+1) % nums.length]){
            drop++;
        }
    }

    if(drop > 1){
        return false
    }else{
        return true;
    }

};