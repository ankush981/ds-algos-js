const { merge } = require("./merge");

const mergeSort = arr => {
    if (arr.length <= 1) return arr; // base case
    let mid = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, mid));
    let rightArr = mergeSort(arr.slice(mid));
    return merge(leftArr, rightArr);
};

module.exports = { mergeSort };