// Game Variables //

    var wins = 0;
    var losses = 0;
    var attempts = 10;
    var gameWord;
    var guess = 
    
    window.addEventListener("keydown", userGuess)
    
// Game Arrays //

    var secretLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
                        "w", "x", "y", "z"]
    var wrongGuess = [];


// Game Functions //    

    var gameWord = secretLetter[Math.floor(Math.random() * secretLetter.length)]
    console.log(gameWord)

    function userGuess() {
        console.log("you push key")
    }

    function psychic() {
        document.getElementById("wins").innerHTML = "Wins: " + wins
        document.getElementById("losses").innerHTML = "Losses: " + losses
        document.getElementById("attempts").innerHTML = "Guesses Remaining: " + attempts
        document.getElementById("wrong").innerHTML = "Letters Guessed so far: " + wrongGuess

        if (gameWord === guess) {
            wins++
        } else if (guess !== gameWord) {
            attempts--
            wrongGuess.push(guess)
        } 
        
        if (attempts === 0) {
            losses++
        }
        
     }

// Game Loops //

    
    psychic();