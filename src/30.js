function calculateSum(arr) {
  let total = 0;
  arr.forEach(item => {
    if(Array.isArray(item)) {
      total += calculateSum(item);
    } else {
      total += item;
    }
  });
  return total;
}

console.log(calculateSum([1, [2, [3]], 4])); // Output: 10
