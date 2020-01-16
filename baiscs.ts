let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i in words) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// Variables whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i in numbers) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
