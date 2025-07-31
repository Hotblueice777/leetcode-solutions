
var SmallestInfiniteSet = function() {
       this.curr = 1;
    this.set = new Set();
    this.minHeap = []; 
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
     if (this.minHeap.length > 0) {
        this.minHeap.sort((a, b) => a - b); 
        const val = this.minHeap.shift(); 
        this.set.delete(val);             
        return val;
    }
    return this.curr++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
if (num < this.curr && !this.set.has(num)) {
        this.set.add(num);
        this.minHeap.push(num);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */