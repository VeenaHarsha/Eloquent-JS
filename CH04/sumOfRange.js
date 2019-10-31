function range(start, end, next = 1) {
  let result = [];
  for (let i = start;((start < end) ? i <= end : i >= end); i += next) {
    result.push(i);
  }
  return result;
}

function sum(arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ = summ + arr[i];
  }
  return summ;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
