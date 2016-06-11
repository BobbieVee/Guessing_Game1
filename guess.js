function status() {
    textStatus.style.display = "block", textStatus.innerHTML = "You are " + hotOrCold()
}

function doesNumberToGuessExist() {
    playersGuess = parseInt(document.getElementById("playersGuess").value, 10), null === numberToGuess ? (startGame(), document.getElementById("playersGuess").value = "") : playerGuessCount > 0 && (document.getElementById("playersGuess").value = "", isItTheNumber(numberToGuess))
}

function createNumberToGuess() {
    numberToGuess = Math.floor(100 * Math.random() + 1)
}

function startGame() {
    createNumberToGuess(), isItTheNumber(numberToGuess)
}

function hotOrCold() {
    var a;
    playersGuess = document.getElementById("playersGuess").value;
    var b = Math.abs(playersGuess - numberToGuess);
    return a = 5 >= b ? "Super Hot" : 10 >= b ? "Hot" : 15 >= b ? "Warm" : b > 20 ? "Cold" : "Ice Cold"
}

function checkAnswer() {
    "number" == typeof playersGuess && (duplicate = !1), previousGuess.forEach(function(a) {
        parseInt(playersGuess, 10) === parseInt(a, 10) && (duplicate = !0)
    })
}

function guessesRemaining() {
    playerGuessCount > 2 ? (playerGuessCount -= 1, document.getElementById("guess-count").innerHTML = playerGuessCount + " Guesses Remaining") : 2 === playerGuessCount ? (playerGuessCount -= 1, document.getElementById("guess-count").innerHTML = playerGuessCount + " Guess Remaining") : document.getElementById("guess-count").innerHTML = "Sorry, Play Again!"
}

function isItTheNumber(a) {
    checkAnswer(), duplicate ? ($(".alert").alert(), textStatus.style.display = "block", textStatus.innerHTML = "You already picked that number") : parseInt(playersGuess, 10) === parseInt(a, 10) ? (textStatus.style.display = "block", textStatus.innerHTML = "You Are CORRECT!") : 0 === previousGuess.length ? (previousGuess = [playersGuess], status(), guessesRemaining()) : (previousGuess.push(playersGuess), status(), guessesRemaining())
}

function playAgain() {
    playerGuessCount = 5, previousGuess = [], textStatus.innerHTML = "Your game has been restarted, submit a new guess!", document.getElementById("guess-count").innerHTML = "", document.getElementById("playersGuess").value = ""
}

function hint() {
    document.getElementById("guess-count").innerHTML = numberToGuess
}
var numberToGuess = null,
    previousGuess = [],
    playerGuessCount = 5,
    textStatus = document.getElementById("status"),
    duplicate = !1,
    playersGuess;