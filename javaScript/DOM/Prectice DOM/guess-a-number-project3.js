let submit = document.querySelector("#btn");
let form = document.querySelector(".form");
let guessField = document.querySelector("#guessField");
let resultParas = document.querySelector(".resultParas");
let guesses = document.querySelector(".guesses");
let lowOrHi = document.querySelector(".lowOrHi");
let remainning = document.querySelector(".lastResult");
let p = document.createElement("p");
let randomNumber = parseInt(Math.random() * 100 + 1);
let prevGuess = [];
let guessNumber = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(guessField.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter Valid Number");
  } else if (guess < 1) {
    alert("Please enter plase end more than 0");
  } else if (guess > 100) {
    alert("Please enter plase end less than 100");
  } else {
    prevGuess.push(guess);
    if (guessNumber === 11) {
      cleanUpGuess(guess);
      displayMassage(`Game Over : Random Number was ${randomNumber}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMassage("You Are Win");
    endGame();
  } else if (guess < randomNumber) {
    displayMassage("Number is TOO Low");
  } else if (guess > randomNumber) {
    displayMassage("Number is TOO high");
  }
}

function cleanUpGuess(guess) {
  guessField.value = "";
  guesses.innerHTML += `${guess} , `;
  guessNumber++;
  remainning.innerHTML = `${11 - guessNumber}`;
}

function displayMassage(massage) {
  lowOrHi.innerHTML = `<h2>${massage}</h2>`;
}

function endGame() {
  guessField.value = "";
  guessField.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">New Game</h2>`;
  resultParas.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  let newGm = document.querySelector("#newGame");
  newGm.addEventListener("click", function () {
    let randomNumber = parseInt(Math.random() * 100 + 1);
    guessField.value = "";
    guessField.removeAttribute("disabled");
    prevGuess = [];
    guessNumber = 1;
    guesses.innerHTML = "";
    lowOrHi.innerHTML = "";
    remainning.innerHTML = `${11 - guessNumber}`;
    resultParas.removeChild(p);
    playGame = true;
  });
}
