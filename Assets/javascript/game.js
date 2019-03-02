var psychicChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var psychicGuess = [];

window.onload = function() {
	var pGuess = psychicChoice[Math.floor(Math.random() * psychicChoice.length)];
	psychicGuess.push(pGuess);
}

document.onkeyup = function(event) {
	var userGuess = event.key;
	lettersGuessed.push(userGuess);


if ((userGuess === psychicGuess[0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	psychicGuess.length = 0;
	var pGuess = psychicChoice[Math.floor(Math.random() * psychicChoice.length)];
	psychicGuess.push(pGuess);
}

else if ((userGuess !== psychicGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

else {
	losses++;
	guessesLeft = 9;
	lettersGuessed.length = 0;
	psychicGuess.length = 0;
	var pGuess = pyschicChoice[Math.floor(Math.random() * psychicChoice.length)];
	psychicGuess.push(pGuess);
}

var html = 
"<h2>Wins: " + wins + "</h2>" +
"<h2>Loses: " + losses + "</h2>" +
"<h2>Guesses Left:" + guessesLeft + "</h2>" +
"<h2 class = >Your Guess So Far:" + lettersGuessed + "</h2>";
 
document.querySelector("#record").innerHTML = html;

}