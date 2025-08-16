/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
      if (intervals.length <= 1) return 0;

  
  intervals.sort((a, b) => a[1] - b[1]);

  let keep = 1;                    
  let prevEnd = intervals[0][1];   

  for (let i = 1; i < intervals.length; i++) {
    const [s, e] = intervals[i];
    if (s >= prevEnd) {            
      keep++;
      prevEnd = e;
    }                               
  }
  return intervals.length - keep;
};