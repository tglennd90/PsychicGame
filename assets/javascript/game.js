// Game Variables //
var wins = 0;
var losses = 0;
var attempts = 10;
var gameWord;
// window.addEventListener("keydown", userGuess)
var secretLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
                    "w", "x", "y", "z"]
var wrongGuess = [];


document.getElementById("wins").innerHTML = "Wins: " + wins
document.getElementById("losses").innerHTML = "Losses: " + losses
document.getElementById("attempts").innerHTML = "Guesses Remaining: " + attempts
document.getElementById("wrong").innerHTML = "Letters Guessed so far: " + wrongGuess

// Game Functions //    

var gameWord = secretLetter[Math.floor(Math.random() * secretLetter.length)]
console.log(gameWord)

document.onkeydown = function(e) {
    guess = e.key        
    console.log(guess)
    
    if (guess === gameWord) {
        wins++
        reset()
    } else if (guess !== gameWord) {
        attempts--
        wrongGuess.push(guess)
    } else if (attempts === 0) {
        losses++
        reset()
    }
}    

function reset() {
    document.getElementById("wins").innerHTML = "Wins: " + wins
    document.getElementById("losses").innerHTML = "Losses: " + losses
    document.getElementById("attempts").innerHTML = "Guesses Remaining: " + attempts
    document.getElementById("wrong").innerHTML = "Letters Guessed so far: " + wrongGuess
}

