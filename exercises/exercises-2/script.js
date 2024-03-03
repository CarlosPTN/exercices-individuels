"use strict";

const btnGuess = document.querySelector(".guess");
const btnVerify = document.querySelector(".verify");
const btnReset = document.querySelector(".again");
const inputWindow = document.querySelector(".window");

// ETAPE 1

const askUser = function (message) {
  const input = prompt(`${message}`);
  return input;
};

// ETAPE 4

function askPlayer1() {
  let numberGiven = askUser("Give me a number between 0 and 50");
  console.log(numberGiven);
  //   if (
  //     Number(numberGiven) < 0 ||
  //     Number(numberGiven) > 50 ||
  //     `/^\d+$/`.test(numberGiven)
  //   )
  if (
    !/^\d+$/.test(numberGiven) &&
    !Number(numberGiven) > 0 &&
    !Number(numberGiven) < 50
  ) {
    alert("Invalid input should be a number inbetween 0 and 50: TRY AGAIN!");
    return NaN;
  }
  console.log(numberGiven);
  return numberGiven;
}

function didIWin(guess, number) {
  if (guess === number) {
    alert("Bravo! Vous avez deviné le nombre 👌");
    return true;
  }
  if (guess < number) {
    alert("Plus grand");
    return false;
  }
  if (guess > number) {
    alert("Plus petit");
    return false;
  }
}

// ETAPE 2/3
function gamePlay() {
  let numberPrompted;
  let flag = false;
  let tries = 0;
  let numberToGuess = Number(
    askUser("Choose a number between 0 and 50 to be guessed")
  );

  while (flag === false) {
    tries++;
    numberPrompted = askPlayer1("Give me a number: ");
    flag = didIWin(Number(numberPrompted), numberToGuess);
    console.log(flag);
  }
  flag = false;
  numberPrompted = "";
  numberToGuess = "";
  tries = 0;
}

// gamePlay();
