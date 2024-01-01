// finding the a number from a probvided array

// with a time complexity of o(n)
let search = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};

console.log(search([1, 2, 4, 6, 34, 5], 34)); //4

// with a time complexity of 0(logn)
let searching = (arr, val) => {
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let currElement = arr[mid];
    if (currElement < val) {
      start = mid + 1;
    } else if (currElement > val) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(searching([1, 2, 4, 6, 34, 5, 9, 12], 12)); //7
