const submit = document.querySelector("#btn");
let form = document.querySelector(".form");
let guessField = document.querySelector("#guessField");
let resultParas = document.querySelector(".resultParas");
let guesses = document.querySelector(".guesses");
let lowOrHi = document.querySelector(".lowOrHi");

let randomNumber = parseInt(Math.random() * 100 + 1);


form.addEventListener("click", function (e) {
  e.preventDefault();
});

