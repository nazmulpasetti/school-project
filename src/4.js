function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let arr = [];
for (var i = 0; i < 5; i++) {
  let num = getRandomInt(10);
  arr.push(num);
}
console.log(arr);