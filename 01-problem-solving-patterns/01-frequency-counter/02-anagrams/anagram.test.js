const isAnagram = require("./anagram");

test("anagram() works as expected", () => {
    expect(isAnagram("abc", "xyz")).toEqual(false);
    expect(isAnagram("hello", "11")).toEqual(false);
    expect(isAnagram("anger", "ganer")).toEqual(true);
    expect(isAnagram("awesome", "awesom")).toEqual(false);
    expect(isAnagram("players", "parsley")).toEqual(true);
});