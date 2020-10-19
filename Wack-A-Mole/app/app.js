// Select all the Square
const square = document.querySelectorAll(".square");
// returns an array of all htmlElements that have .square class
const mole = document.querySelectorAll(".mole");
const remainingTime = document.querySelector("#time_left");
// since we are changing score thus dont make it as const
let score = document.querySelector("#score");

let finalScore = 0;
let currTime = remainingTime.textContent;

function randomSquare() {
  // remove .mole class present on div.square
  // so we dont know which div has .mole class in it
  // so looping over all divs
  square.forEach((div) => {
    div.classList.remove("mole");
  });

  // now randomly assign a div with .mole class
  // all the divs with .square class are stored in const square
  let randomPosition = square[Math.floor(Math.random() * 9)];
  // now adding that class mole to the randomly selected div
  randomPosition.classList.add("mole");

  //assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id;
}

square.forEach((div) => {
  // if the div is clicked
  div.addEventListener("mouseup", () => {
    // if the hitPosition (actual position of mole) === div.id
    if (div.id === hitPosition) {
      finalScore++;
      // updating the score
      score.textContent = finalScore;
      hitPosition = null;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 550);
}

moveMole();

function timer() {
  currTime--;
  remainingTime.textContent = currTime;
  if (currTime <= 5) {
    remainingTime.style.color = "yellow";
  }
  if (currTime <= 3) {
    remainingTime.style.color = "red";
  }
  if (currTime == 0) {
    console.log("oka");
    clearInterval(timerId); // stop the setInterval function once the time reaches 0
    alert("GAME OVER! Your final score is " + finalScore);
    location.reload();
  }
}

let timerId = setInterval(timer, 1000);
