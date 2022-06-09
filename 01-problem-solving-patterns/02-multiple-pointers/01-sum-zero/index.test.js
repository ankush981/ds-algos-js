const { sumZero } = require(".");

test("sumZero() works as expected", () => {
    expect(JSON.stringify(sumZero([-3, -2, -1, 0, 1, 2, 3]))).toEqual(JSON.stringify([-3, 3]));
    expect(sumZero([-2, -1, 0, 5])).toEqual(undefined);
    expect(sumZero([])).toEqual(undefined);
    expect(sumZero([-1])).toEqual(undefined);
});