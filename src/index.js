const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const whiteSpace = {
  "*": " ",
};

function decode(expr) {
  const arrExpr = [...expr];
  let sliceArr = [];
  let i = 1;
  while (i <= expr.length) {
    if (i % 10 === 0) {
      sliceArr.push(arrExpr.slice(i - 10, i));
      i = i + 10;
    } else {
      i = i + 1;
    }
  }
  let morseArr = [];
  for (let y = 0; y < sliceArr.length; y++) {
    morseArr[y] = [];
    let n = 0;
    while (n < sliceArr[y].length) {
      if (sliceArr[y][n] === "0") {
        n = n + 1;
      } else if (sliceArr[y][n] === "1" && sliceArr[y][n + 1] === "1") {
        morseArr[y].push("-");
        n = n + 2;
      } else if (sliceArr[y][n] === "1" && sliceArr[y][n + 1] === "0") {
        morseArr[y].push(".");
        n = n + 2;
      } else if (sliceArr[y][n] === "*") {
        morseArr[y].push("*");
        n = n + 10;
      }
    }
  }

  for (let r = 0; r < morseArr.length; r++) {
    morseArr[r] = morseArr[r].join("");
    if (MORSE_TABLE[morseArr[r]]) {
      morseArr[r] = MORSE_TABLE[morseArr[r]];
    } else if (whiteSpace[morseArr[r]]) {
      morseArr[r] = whiteSpace[morseArr[r]];
    }
  }
  return morseArr.join("");
}

module.exports = {
  decode,
};
