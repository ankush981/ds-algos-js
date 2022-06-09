/**
 Write a function countUnique() that accepts a sorted array and returns
 the number of unique values in the array.

 [1, 1, 2] -> 2
 [-1, 0, 1] -> 3
 [2, 2, 2] -> 1
*/

const countUnique = arr => {
    if (arr.length < 2) {
        return arr.length;
    }

    let pointer1 = 0;
    let pointer2 = 1;
    let unique = 0;

    while (pointer2 < arr.length) {
        if (arr[pointer1] != arr[pointer2]) {
            unique++;
        }
        pointer1++;
        pointer2++;
    }

    return ++unique; // account for the last element
}

module.exports = { countUnique }