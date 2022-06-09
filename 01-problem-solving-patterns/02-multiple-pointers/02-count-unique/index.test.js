const { countUnique } = require(".");

test("countUnique() works as expected", () => {
    expect(countUnique([])).toEqual(0);
    expect(countUnique([1])).toEqual(1);
    expect(countUnique([2, 2])).toEqual(1);
    expect(countUnique([-1, 0, 1])).toEqual(3);
});