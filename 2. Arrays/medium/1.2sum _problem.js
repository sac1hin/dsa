const set = new Map();
for(let i=0; i < nums.length ; i++){
    const k = target-nums[i];
    if(set.has(k)){
        return [set.get(k),i]
    }else{
        set.set(nums[i], i);
    }
}