const { MaxBinaryHeap } = require("./max-heap");

describe("MaxBinaryHeap tests", () => {
    test("insert() works as expected", () => {
        const heap = new MaxBinaryHeap();
        heap.insert(10).insert(20).insert(30);
        expect(heap.values.length).toEqual(3);
        expect(heap.values[0]).toEqual(30);
        heap.insert(100);
        expect(heap.values[0]).toEqual(100);
        heap.insert(25);
        expect(heap.values[0]).toEqual(100);
    });

    test("extractMax() works as expected", () => {
        const heap = new MaxBinaryHeap();
        heap.insert(10).insert(5).insert(25).insert(15);
        expect(heap.extractMax()).toEqual(25);
        expect(heap.values.length).toEqual(3);
        expect(heap.values[0]).toEqual(15);
        expect(heap.extractMax()).toEqual(15);
        expect(heap.values.length).toEqual(2);
        expect(heap.values[0]).toEqual(10);
        expect(heap.extractMax()).toEqual(10);
        expect(heap.values.length).toEqual(1);
        expect(heap.values[0]).toEqual(5);
        expect(heap.extractMax()).toEqual(5);
        expect(heap.values.length).toEqual(0);
        expect(heap.extractMax()).toEqual(undefined);
    });
});