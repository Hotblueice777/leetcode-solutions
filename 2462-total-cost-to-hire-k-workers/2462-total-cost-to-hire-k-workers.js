/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.size() === 0) return null;
        const top = this.heap[0];
        const end = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = end;
            this._heapifyDown();
        }
        return top;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.size() - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[index][0] < this.heap[parent][0] ||
                (this.heap[index][0] === this.heap[parent][0] && this.heap[index][1] < this.heap[parent][1])) {
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
                index = parent;
            } else break;
        }
    }

    _heapifyDown() {
        let index = 0;
        while (true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let smallest = index;

            if (left < this.size() &&
                (this.heap[left][0] < this.heap[smallest][0] ||
                 (this.heap[left][0] === this.heap[smallest][0] && this.heap[left][1] < this.heap[smallest][1]))) {
                smallest = left;
            }

            if (right < this.size() &&
                (this.heap[right][0] < this.heap[smallest][0] ||
                 (this.heap[right][0] === this.heap[smallest][0] && this.heap[right][1] < this.heap[smallest][1]))) {
                smallest = right;
            }

            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
                index = smallest;
            } else break;
        }
    }
}

var totalCost = function(costs, k, candidates) {
  const n = costs.length;
    let i = 0, j = n - 1;
    const leftHeap = new MinHeap();
    const rightHeap = new MinHeap();
    let total = 0;

    // 初始化左右两边的堆
    while (i < candidates) {
        leftHeap.push([costs[i], i]);
        i++;
    }

    while (j >= Math.max(i, n - candidates)) {
        rightHeap.push([costs[j], j]);
        j--;
    }

    while (k-- > 0) {
        let leftTop = leftHeap.size() > 0 ? leftHeap.heap[0] : [Infinity, Infinity];
        let rightTop = rightHeap.size() > 0 ? rightHeap.heap[0] : [Infinity, Infinity];

        if (
            leftTop[0] < rightTop[0] ||
            (leftTop[0] === rightTop[0] && leftTop[1] < rightTop[1])
        ) {
            total += leftHeap.pop()[0];
            if (i <= j) {
                leftHeap.push([costs[i], i]);
                i++;
            }
        } else {
            total += rightHeap.pop()[0];
            if (i <= j) {
                rightHeap.push([costs[j], j]);
                j--;
            }
        }
    }

    return total;  
};