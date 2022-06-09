const same = require("./same-arrays");
test("same() works as expected", () => {
    expect(same([1, 2, 3], [1, 4, 9])).toEqual(true);
    expect(same([1, 2, 3], [1, 9])).toEqual(false);
    expect(same([], [])).toEqual(true);
    expect(same([1, 2, 1], [4, 4, 1])).toEqual(false);
});