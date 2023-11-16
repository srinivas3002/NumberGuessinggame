//Extracting html elements into javascript
const sysguess = Math.floor(Math.random() * 100) + 1
const guess = document.getElementById("field")
const check = document.getElementById("check")
let hint = document.getElementById("hint")
const reset = document.getElementById("reset")
const score = document.getElementById("score")
const guess1 = document.getElementById("guess1")
let temp = 100
let attempts = 0
guess1.innerHTML = `<span class="guess1">${attempts}</span>`
score.innerHTML = `<span class="score1">${temp}</span>`

// Logical statements of game in play() function
function play() {
  const userguess = guess.value
  if (guess.value <= 0 || guess.value == NaN) {
    hint.innerHTML = `<span class="active">Invaild Input</span>`
  }
  else if (userguess == sysguess) {
    hint.innerHTML = `<span class="active">Congrats ! you have guessed it.</span>`
  }
  else if (userguess > sysguess) {
    hint.innerHTML = `<span class="active">Too high .<br>Try another guess</span>`
    temp--
    attempts++
  }
  else if (userguess < sysguess) {
    hint.innerHTML = `<span class="active">Too low .<br> Try another guess</span>`
    temp--
    attempts++
  }
  score.innerHTML = `<span class="score1">${temp}</span>`
  guess1.innerHTML = `<span class="guess1">${attempts}</span>`
}

// Event listners of buttons check and reset
check.addEventListener("click", play)
reset.addEventListener("click", () => {
  location.reload()
})

// Text Typing effect logic
var typed = new Typed(".type1", {
  strings: ["Welcome to the game player Neo", "I am thinking of a Number between 1 and 100", "Can you guess it player Neo", "Lets start the game"],
  typeSpeed: 50,
  backSpeed: 50,
  // loop:true
})