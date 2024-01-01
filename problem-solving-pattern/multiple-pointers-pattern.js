// sum of first par of the sorted arry is zero
// O(n2) time complexity
const sumZero1 = (arr) => {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};
// O(n) time complexity
const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  arr.sort((a, b) => a - b);
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZero([-1, -2, -1, 0, 1, 2, 3])); //true
console.log(sumZero([-1, -2, -1, 0, 5])); //false
console.log(sumZero1([-1, -2, -1, 0, 1, 2, 3])); //true
console.log(sumZero1([-1, -2, -1, 0, 6])); //false

// O(n) time complexity
const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (j = i + 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] === arr[j];
    }
  }
  //since i starts at 0, add 1 with the position of i to get the unique values
  return i + 1;
};

console.log(countUniqueValues([])); //0
console.log(countUniqueValues([0, 1, 1, 3, -5])); //4
