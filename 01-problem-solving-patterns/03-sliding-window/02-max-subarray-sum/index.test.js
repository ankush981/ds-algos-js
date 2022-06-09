const { maxSubarraySum } = require(".");

test("maxSubarraySum() works as expected", () => {
    expect(maxSubarraySum([], 1)).toEqual(null);
    expect(maxSubarraySum([2], 1)).toEqual(2);
    expect(maxSubarraySum([1, 8, 2, 4], 2)).toEqual(10);
});