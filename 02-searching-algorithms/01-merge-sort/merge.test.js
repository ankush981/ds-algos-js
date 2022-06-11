const { merge } = require("./merge");

test("merge() works as expected", () => {
    let arr1, arr2;
    arr1 = [];
    arr2 = [];
    expect(merge(arr1, arr2)).toEqual([]);

    arr1 = [1];
    arr2 = [];
    expect(merge(arr1, arr2)).toEqual([1]);

    arr1 = [];
    arr2 = [2];
    expect(merge(arr1, arr2)).toEqual([2]);

    arr1 = [];
    arr2 = [2, 5];
    expect(merge(arr1, arr2)).toEqual([2, 5]);

    arr1 = [2];
    arr2 = [1];
    expect(merge(arr1, arr2)).toEqual([1, 2]);

    arr1 = [2, 10];
    arr2 = [1, 5];
    expect(merge(arr1, arr2)).toEqual([1, 2, 5, 10]);
});