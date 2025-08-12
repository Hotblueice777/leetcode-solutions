/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
     let flips = 0;
  while (a > 0 || b > 0 || c > 0) {
    const A = a & 1, B = b & 1, C = c & 1;

    if (C === 1) {
      if ((A | B) === 0) flips += 1;
    } else {
      flips += A + B;
    }

    a >>= 1;
    b >>= 1;
    c >>= 1;
  }
  return flips; 
};