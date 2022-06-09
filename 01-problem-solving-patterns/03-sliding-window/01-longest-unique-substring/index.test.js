const { longestUniqueSubstring } = require(".");

test("longestUniqueSubstring() works as expected", () => {
    expect(longestUniqueSubstring("")).toEqual(0);
    expect(longestUniqueSubstring("a")).toEqual(1);
    expect(longestUniqueSubstring("ffff")).toEqual(1);
    expect(longestUniqueSubstring("abcd")).toEqual(4);
    expect(longestUniqueSubstring("aaaaaabcd")).toEqual(4);
    expect(longestUniqueSubstring("aabzaabcd")).toEqual(4);
});