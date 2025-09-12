class Solution {
    /**
    * @param {number[]} arr
    * @param {number} K
    * @returns {number}
    */
    minMaxDist(arr, K) {
        if (!arr || arr.length < 2) return 0;
        
        let left = 0;
        let right = 0;
        
        for (let i = 0; i + 1 < arr.length; i++) {
            right = Math.max(right, arr[i + 1] - arr[i]);
        }
        
        while (right - left > 1e-6) {
            let mid = left + (right - left) / 2;   // real mid
            let needed = this.minimumDis(arr, mid);
            
            if (needed > K) {
                left = mid;    // too small, need more stations
            } else {
                right = mid;   // feasible, try smaller
            }
        }
        
        return Number(right.toFixed(2));
    }
    
    minimumDis(arr, dist) {
        if (dist <= 0) return Infinity;
        let ans = 0;
        for (let i = 0; i + 1 < arr.length; i++) {
            const gap = arr[i + 1] - arr[i];
            ans += Math.ceil(gap / dist) - 1;
        }
        return ans;
    }
}

