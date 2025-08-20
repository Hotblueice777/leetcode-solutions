/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
     const n = nums1.length;
  const pairs = Array.from({ length: n }, (_, i) => [nums2[i], nums1[i]]);
  pairs.sort((a, b) => b[0] - a[0]); 

  class MinHeap {
    constructor() { this.a = []; }
    size() { return this.a.length; }
    push(v) {
      const a = this.a; a.push(v);
      let i = a.length - 1;
      while (i > 0) {
        let p = (i - 1) >> 1;
        if (a[p] <= a[i]) break;
        [a[p], a[i]] = [a[i], a[p]];
        i = p;
      }
    }
    pop() {
      const a = this.a;
      const top = a[0];
      const x = a.pop();
      if (a.length) {
        a[0] = x;
        let i = 0;
        while (true) {
          let l = i * 2 + 1, r = l + 1, m = i;
          if (l < a.length && a[l] < a[m]) m = l;
          if (r < a.length && a[r] < a[m]) m = r;
          if (m === i) break;
          [a[i], a[m]] = [a[m], a[i]];
          i = m;
        }
      }
      return top;
    }
  }

  const heap = new MinHeap();
  let sum = 0n;           
  let ans = 0n;

  for (const [b, a] of pairs) { 
    heap.push(a);
    sum += BigInt(a);
    if (heap.size() > k) sum -= BigInt(heap.pop());
    if (heap.size() === k) {
      const score = sum * BigInt(b);
      if (score > ans) ans = score;
    }
  }
  return Number(ans); 
};