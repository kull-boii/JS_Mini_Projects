"use strict";

let highScore = 0;
let currentScore = 20;

const check = document.querySelector(".check");

const restart = document.querySelector(".restart");

const currScore = document.querySelector("#current-score");

const hiScore = document.querySelector("#high-score");

const input = document.querySelector("#int");

const message = document.querySelector(".message");

// event listeners
restart.addEventListener("click", () => {
  // restart the game
  number = rand();
  currScore.textContent = 20;
  currentScore = 20;
  // clears the input
  input.value = null;
});

check.addEventListener("click", () => {
  // updating current score

  // check if the given input is equal to random number
  if (input.value.length > 2 || input.value > 20) {
    message.textContent = "❌ Invalid Number ❌";
  } else if (input.value == number) {
    // user won
    highScore = Math.max(highScore, currentScore);

    // updating max score
    hiScore.textContent = highScore;

    // updating message
    message.textContent = "🎉 You Won 🎉";
  } else if (input.value > number) {
    currentScore--;
    message.textContent = "Guess is too high 😪";
  } else {
    currentScore--;
    message.textContent = "Guess is too low 😐";
  }
  currScore.textContent = currentScore;
});

// function to genrate a random number
const rand = () => {
  // this will never give 21 as random() doesnt gives 1
  //   and moreover we are taking floor
  let number = Math.floor(Math.random() * 21);
  return number;
};

let number = rand();
console.log(number);
