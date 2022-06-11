const { mergeSort } = require("./merge-sort");

test("mergeSort() works as expected", () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([1, 10, 3, 15])).toEqual([1, 3, 10, 15]);
});