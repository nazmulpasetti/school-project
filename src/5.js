function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomCode() {
  const numDigits = getRandomNumber(4, 8);
  let code = "";
  for (let i = 0; i < numDigits; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
}
