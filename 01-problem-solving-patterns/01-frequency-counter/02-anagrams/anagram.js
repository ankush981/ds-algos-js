/**
 Write a function to check if one string is an anagram of another.
 Anagrams are formed by rearranging the letters of a string.
 */

function isAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }

    let [freqStr1, freqStr2] = [{}, {}];

    for (const char of str1) {
        freqStr1[char] = freqStr1[char] ? freqStr1[char] + 1 : 1;
    }

    for (const char of str2) {
        freqStr2[char] = freqStr2[char] ? freqStr2[char] + 1 : 1;
    }

    // Iterate over the freq counter of first string and compare with
    // the second string's.
    for (char in freqStr1) {
        if (freqStr1[char] != freqStr2[char]) {
            return false;
        }
    }

    return true;
}

module.exports = isAnagram;