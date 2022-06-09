/** 
 Write a function called same(), which should accept two arrays and
 check whether every value in the second array is the square of some 
 value in the first array. The frequency of the values must also match.
 
 Examples: 
 same([1, 3, 3], [4, 5, 9]) -> true
 same([1, 2, 3], [1, 9]) -> false
 same([1, 2, 1], [4, 4, 1]) -> false
*/

function same(arr1, arr2) {
    // sanity check for length
    if (arr1.length !== arr2.length) {
        return false;
    }

    let [freqArr1, freqArr2] = [{}, {}];
    // create frequency-counter object for arr1 - freqArr1
    for (const el of arr1) {
        freqArr1[el] = freqArr1[el] ? freqArr1[el] + 1 : 1;
    }
    // create frequency-counter object for arr2 - freqArr2
    for (const el of arr2) {
        freqArr2[el] = freqArr2[el] ? freqArr2[el] + 1 : 1;
    }
    // traverse through the first array and match the frequencies element (in freqArr1) and its square(in freqArr2)
    for (const el of arr1) {
        if (freqArr1[el] != freqArr2[el * el]) {
            return false;
        }
    }

    // if all the checks have passed, the arrays must be matching!
    return true;
}

module.exports = same;
