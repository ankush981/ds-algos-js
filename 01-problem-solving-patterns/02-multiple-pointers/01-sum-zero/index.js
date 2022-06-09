/**
 Write a function that accepts a *sorted* array and returns the first occurence 
 of a pair of elements (not necessarily consecutive) that sums to zero.
 If no such pair is found, the function should return undefined.

 sumZero([-3, -2, -1, 0, 1, 2, 3]) -> [-3, 3]
 sumZero([-2, 0, 1, 3]) -> undefined
*/

const sumZero = arr => {
    if (arr.length < 2) {
        return undefined;
    }

    // Start pointers at the beginning and the end of the array
    let index1 = 0;
    let index2 = arr.length - 1;

    // until the indices cross each other
    while (index1 < index2) {
        let sum = arr[index1] + arr[index2];
        if (sum == 0) {
            return [arr[index1], arr[index2]];
        }

        // Now, Move one of the pointers based on whether we need 
        // greater or lesser value to arrive at zero sum.
        if (sum < 0) {
            // We need to find a larger value
            index1++;
        } else {
            // We need to find a smaller value
            index2--;
        }
    }

    return undefined;
}

module.exports = { sumZero };