let frequencyCounterCheck = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let intemIndex = arr2.indexOf(arr1[i] ** 2);
    console.log(intemIndex);
    if (intemIndex === -1) {
      return false;
    }
    arr2.splice(intemIndex, 1);
  }
  return true;
};

console.log(frequencyCounterCheck([1, 2, 3], [1, 4, 9]));

let frequencyCounterCheck1 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  let count1 = {};
  let count2 = {};

  for (let i = arr1[0]; i < arr1.length; i++) {
    count1[arr1[i]] = (count1[arr1[i]] || 0) + 1;
  }
  for (let value of arr2) {
    count2[value] = (count2[value] || 0) + 1;
  }
  console.log(count1, "1");
  console.log(count2, "2");

  for (let key in count1) {
    if (!(key ** 2 in count2)) {
      return false;
    }
    if (count2[key ** 2] !== count1[key]) {
      return false;
    }
  }
  return true;
};

console.log(frequencyCounterCheck1([1, 2, 3, 3], [1, 4, 4, 9]));
console.log(frequencyCounterCheck1([1, 2, 3, 3], [1, 4, 9, 9]));
