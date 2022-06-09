/**
 Write a function called maxSubarraySum([], int) that accepts an array and
 an integer n, indicating the length of the subarray. The function should 
 return the maximum sum of n consecutive elements found in the array.

 maxSubarraySum([1, 2, 8, 2, 5, 9, 3], 2) -> 10
 maxSubarraySum([], 4) -> null
*/

const maxSubarraySum = (arr, n) => {
    if (n > arr.length) {
        return null;
    }

    let maxSum = 0;

    let pointer1 = 0;
    let pointer2 = pointer1 + n - 1; // set up a window of width "n"

    // Get the sum of the window
    let currentSum = 0;
    for (let i = pointer1; i <= pointer2; i++) {
        currentSum += arr[i];
    }

    if (n == arr.length) {
        return currentSum;
    }

    while (pointer2 < arr.length - 1) {
        maxSum = Math.max(maxSum, currentSum);
        // move the window forward
        pointer1++;
        pointer2++;
        // subtract the number just left by the window and add the number just included
        currentSum += arr[pointer2] - arr[pointer1 - 1];
    }

    return maxSum;
}

module.exports = { maxSubarraySum };