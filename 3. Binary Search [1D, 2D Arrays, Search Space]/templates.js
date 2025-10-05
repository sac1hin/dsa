// returns the first index i in [0..n] such that cond(i) is true
// if none satisfy, returns n (i.e., "past the end")
function bsIndex(n, cond) {
    let lo = 0,
        hi = n; // [lo, hi) — right-open
    while (lo < hi) {
        const mid = lo + ((hi - lo) >> 1); // avoid overflow
        if (cond(mid)) hi = mid; // mid works -> go left
        else lo = mid + 1; // mid fails -> go right
    }
    return lo;
}

//   🔧 helper #2 — “answer binary search” (parametric / feasibility)
//   use when the answer is an integer in a range and a feasibility check is monotone (true→false or false→true).

// find the minimum integer in [lo..hi] that makes isFeasible(mid) === true
function bsAnswer(lo, hi, isFeasible) {
    let ans = hi;
    while (lo <= hi) {
        const mid = lo + ((hi - lo) >> 1);
        if (isFeasible(mid)) (ans = mid), (hi = mid - 1); // try smaller
        else lo = mid + 1; // need bigger
    }
    return ans;
}
