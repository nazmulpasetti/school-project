function getRandomInt(max) {
  let rand = Math.random() * max;
  return Math.floor(rand);
}

let randomNumber = getRandomInt(10);
console.log(randomNumber);
