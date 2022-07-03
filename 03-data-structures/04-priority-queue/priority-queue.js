// Imeplentation of Priority Queue using a Min Heap

class Node {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        const node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp();
        return this;
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (element.priority >= parent.priority) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex; // move up!
        }
    }

    dequeue() {
        if (!this.values.length) return undefined;
        const minElement = this.values[0];
        if (this.values.length == 1) {
            this.values = [];
        } else {
            const lastElement = this.values.pop();
            this.values[0] = lastElement;
            this.sinkDown();
        }
        return minElement;
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
                if (leftChild.priority < elementToSink.priority) {
                    indexToSwap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                // Also need to consider which of the children is larger
                if ((indexToSwap === null && rightChild.priority < elementToSink.priority) ||
                    (indexToSwap !== null && rightChild.priority < leftChild.priority)
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

module.exports = { PriorityQueue };