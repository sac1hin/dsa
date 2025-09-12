// 🔹 Two Pointers (Opposite Ends)

// twoPointersOpposite.js
function twoPointersOpposite(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    // process(arr[left], arr[right]);

    if (/* condition */) {
      left++;
    } else {
      right--;
    }
  }
}


// 🔹 Two Pointers (Sliding Window)
function slidingWindow(arr, k) {
  let left = 0, sum = 0;
  for (let right = 0; right < arr.length; right++) {
    // expand window
    sum += arr[right];

    while (/* window too big or invalid */) {
      // shrink window
      sum -= arr[left];
      left++;
    }

    // check/update result here
  }
}

// 🔹 Prefix Sum
function prefixSum(arr) {
  let pref = 0;
  const map = new Map(); // store {prefix: count/index}
  map.set(0, 1);

  for (const x of arr) {
    pref += x;
    // use pref or pref - k
    // update result
    map.set(pref, (map.get(pref) || 0) + 1);
  }
}


// 🔹 Kadane / DP (1D)
function kadane(arr) {
  let cur = 0, best = -Infinity;
  for (const x of arr) {
    cur = Math.max(x, cur + x);
    best = Math.max(best, cur);
  }
  return best;
}

// 🔹 Divide & Conquer (Merge Sort Pattern)
function mergeSort(arr, l, r) {
  if (l >= r) return;
  const mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r); // merge step
}


// 🔹 Matrix Traversal (Boundary Loop)
function spiral(matrix) {
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // traverse top row
    // traverse right col
    // traverse bottom row
    // traverse left col
    top++; right--; bottom--; left++;
  }
}

// 🔹 Bit Manipulation (XOR Trick)
function findUnique(nums) {
  let xor = 0;
  for (const num of nums) {
    xor ^= num; // cancels out duplicates
  }
  return xor;
}

// 🔹 Greedy (Buy/Sell Stock Once)
function maxProfit(prices) {
  let minPrice = Infinity, profit = 0;
  for (const p of prices) {
    minPrice = Math.min(minPrice, p);
    profit = Math.max(profit, p - minPrice);
  }
  return profit;
}


// 🔹 Greedy (Interval Scheduling / Merging)
function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = res[res.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]); // merge
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
}

