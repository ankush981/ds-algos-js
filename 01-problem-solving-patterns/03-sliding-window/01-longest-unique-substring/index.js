const longestUniqueSubstring = str => {
    if (str.length < 2) {
        return str.length;
    }

    let longestSubstringLength = 0;
    let pointer1 = 0, pointer2 = 0;

    let currentSubstringLength = 0;
    while (pointer2 < str.length - 1) {
        if (str[pointer2 + 1] != str[pointer2]) {
            currentSubstringLength++;
        } else {
            pointer1 = pointer2;
            currentSubstringLength = 0;
        }
        if (currentSubstringLength > longestSubstringLength) {
            longestSubstringLength = currentSubstringLength;
        }
        pointer2++;
    }

    return longestSubstringLength + 1;
}

module.exports = { longestUniqueSubstring };