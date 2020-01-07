// Game Variables //
    var wins = 0;
    var losses = 0;
    var attempts = 10;
    var gameWord;
    var secretLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
                        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
                        "w", "x", "y", "z"]
    var wrongGuess = [];

// Initial Page Load //

    myGuess();
    document.getElementById("wins").innerHTML = "Wins: " + wins
    document.getElementById("losses").innerHTML = "Losses: " + losses
    document.getElementById("attempts").innerHTML = "Guesses Remaining: " + attempts
    document.getElementById("wrong").innerHTML = "Letters Guessed so far: " + wrongGuess

// Game Functions //  

    function myGuess() {
        var gameWord = secretLetter[Math.floor(Math.random() * secretLetter.length)] 
        console.log(gameWord)
    

        document.onkeydown = function(e) {
            guess = e.key        
            
            if(wrongGuess.includes(guess)) {
                return;
            }

            if (guess === gameWord) {
                wins++
                reset()
            } else if (guess !== gameWord) {
                attempts--
                wrongGuess.push(guess)
                document.getElementById("attempts").innerHTML = "Guesses Remaining: " + attempts
                document.getElementById("wrong").innerHTML = "Letters Guessed so far: " + wrongGuess
            } 
            
            if (attempts === 0) {            
                losses++
                reset()
            }
        }   
    }

    function reset() {
        myGuess()
        
        attempts = 10
        wrongGuess = []        

        document.getElementById("wins").innerHTML = "Wins: " + wins
        document.getElementById("losses").innerHTML = "Losses: " + losses
        document.getElementById("attempts").innerHTML = "Guesses Remaining: " + attempts
        document.getElementById("wrong").innerHTML = "Letters Guessed so far: " + wrongGuess
    }

    