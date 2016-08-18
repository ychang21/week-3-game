var userWrongGuess = [];
var word = randomWord;
var guesses = [];
var wins = 0;
var guessesLeft= 12;
var randomWord;
var figures = ["zeus", "aphrodite", "apollo", "artemis", "athena", "dionysus", "hephaestus", "poseidon", "hades", "demeter", "persephone", "ares", "cronus", "heracles", "eros", "echo", "narcissus"];
var randomWord = figures[Math.floor(Math.random() * figures.length)];
	console.log(randomWord);
var remainingLetters = randomWord.length;


function start() {



var randomWord = figures[Math.floor(Math.random() * figures.length)];
	console.log(randomWord); //shows in console randomWord

for (var i = 0; i < randomWord.length; i++) {
	guesses[i] = "_";
	document.getElementById('letters').innerHTML=guesses;
	}
	
	var remainingLetters = randomWord.length;



document.onkeyup = function(event){
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
 	for (var j = 0; j < randomWord.length; j++) { 
 		if (randomWord[j] === userGuess) {
 		guesses[j] = userGuess;
 		remainingLetters--;
 		} 
	
 	}
	
 	if (randomWord[j] !== userGuess) {
		userWrongGuess.push(userGuess);
		guessesLeft--;
	}


	if (guessesLeft === 0){
		guessesLeft = 12;
		userWrongGuess.length= 0;
		guesses.length = 0;
		start();
	}
	if (remainingLetters === 0) {
		wins++;
		guessesLeft = 12;
		userWrongGuess.length= 0;
		guesses.length = 0;
		start();
	}
	
	document.getElementById('letters').innerHTML=guesses;
	var correct = "Wins: " + wins;
		document.querySelector("#winCounter").innerHTML = correct;
	var guessesL = "Number of guesses remaining: " + guessesLeft;
		document.querySelector("#guesses-left").innerHTML = guessesL;
	var missedL = "Letters already guessed: " + userWrongGuess;
		document.querySelector("#missed-letters").innerHTML = missedL;
}


	
}
start();
