/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
    if (n <= 0) return 0;
    if (n <= 3) return 1;        

    const s = new Array(n + 5);
    s[0] = 1; s[1] = 2; s[2] = 2;

    let head = 2;   
    let tail = 3;   
    let next = 1;   
    let ones = 1;   

    while (tail < n) {
        const times = s[head];        
        for (let k = 0; k < times && tail < n; k++) {
            s[tail] = next;
            if (next === 1) ones++;
            tail++;
        }
        next = (next === 1 ? 2 : 1);  
        head++;
    }
    return ones;
};