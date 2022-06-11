// Merge two sorted arrays into a single sorted array
// Space and time complexity: n + m

const merge = (arr1, arr2) => {
    if (arr1.length == 0) return arr2;
    if (arr2.length == 0) return arr1;

    let mergedArr = [];
    let [i1, i2] = [0, 0];

    while (i1 < arr1.length || i2 < arr2.length) {
        if (i1 == arr1.length) {
            mergedArr.push(arr2[i2]);
            i2++;
        } else if (i2 == arr2.length) {
            mergedArr.push(arr1[i1]);
            i1++;
        } else {
            if (arr1[i1] <= arr2[i2]) {
                mergedArr.push(arr1[i1]);
                i1++;
            } else {
                mergedArr.push(arr2[i2]);
                i2++;
            }
        }
    }

    return mergedArr;
};

module.exports = { merge };