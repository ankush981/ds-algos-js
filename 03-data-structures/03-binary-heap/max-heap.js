class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
        return this;
    }

    bubbleUp() {
        let index = this.values.length - 1; // latest addition is always at th end
        const value = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parentValue = this.values[parentIndex];

            if (value <= parentValue) break;

            this.values[parentIndex] = value;
            this.values[index] = parentValue;
            index = parentIndex; // move up!
        }
    }

    extractMax() {
        if (!this.values.length) return undefined;

        const maxValue = this.values[0];
        const lastValue = this.values.pop();
        // If there only one element originally, don't go any further
        if (this.values.length == 0) return lastValue;
        this.values[0] = lastValue;
        this.sinkDown();
        return maxValue;
    }

    sinkDown() {
        let elementToSink = this.values[0];
        const length = this.values.length;

        let elementIndex = 0;
        while (true) {
            const leftChildIndex = 2 * elementIndex + 1;
            const rightChildIndex = 2 * elementIndex + 2;
            let leftChild, rightChild;
            let indexToSwap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > elementToSink) {
                    indexToSwap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                // Also need to consider which of the children is larger
                if ((indexToSwap === null && rightChild > elementToSink) ||
                    (indexToSwap !== null && rightChild > leftChild)
                ) {
                    indexToSwap = rightChildIndex;
                }
            }

            if (indexToSwap === null) break;

            // Swapping is needed now
            this.values[elementIndex] = this.values[indexToSwap];
            this.values[indexToSwap] = elementToSink;
            // move down!
            elementIndex = indexToSwap;
        }
    }
}

module.exports = { MaxBinaryHeap };