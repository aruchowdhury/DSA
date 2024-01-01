//find the max value of sum of subarray from a given array

//solution with O(n2) time complexity
let maxSubArraySum = (arr, num) => {
  if (num > arr.length) {
    return null;
  }
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let currSum = 0;
    for (let j = 0; j < num; j++) {
      currSum += arr[i + j];
    }
    if (maxSum < currSum) {
      maxSum = currSum;
    }
  }
  return maxSum;
};

console.log(maxSubArraySum([2, 6, 1, 2, 1, 8, 5, 6, 3], 4)); //22
console.log(maxSubArraySum([2, 1, 8, 5, 6], 3)); //19

// solution with O(n) time complexity

let maxSubArrSum = (arr, num) => {
  if (arr.length < num) {
    return null;
  }
  let maxSum = 0;
  let currSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  currSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    currSum = currSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
};

console.log(maxSubArrSum([2, 6, 1, 2, 1, 8, 5, 6, 3], 4)); //22
console.log(maxSubArrSum([2, 1, 8, 5, 6], 3)); //19
