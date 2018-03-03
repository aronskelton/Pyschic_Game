function usedGuess(element) {
    var result = document.getElementById(element);
    return result;
}


var win = 1,
    loss = 1,
    guessRemaining = 9,
    computer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    guesses = [];

document.onkeyup = function(event) {

    var computerGuess = Math.floor(Math.random() * computer.length),
        randomLetter = computer[computerGuess];

    var typing = document.createTextNode(event.key + ',');

    usedGuess("guesses").appendChild(typing);


    if (randomLetter === event.key) {

        usedGuess("win").textContent = "Wins:" + win++;
        usedGuess("guesses").textContent = "Your Guesses So Far: " + [];
		usedGuess("guessRemaining").textContent = "Guesses Left: " + 9;
        	guessRemaining = 9;
    
} else {
    guessRemaining--;
   usedGuess("guessRemaining").textContent = "Guesses Left:" + guessRemaining;


    if (guessRemaining == 0) {

        usedGuess("loss").textContent = "Losses:" + loss++;

        usedGuess("guessRemaining").textContent = "Guesses Left: " + 9;
        guessRemaining = 9;

        usedGuess("guesses").textContent = "Your Guesses So Far: " + [];

    }

}


}