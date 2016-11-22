
var figures = [ "zeus", "aphrodite", "apollo", "artemis", "athena", "dionysus", "hephaestus", "poseidon", "hades", "demeter", "persephone", "ares", "cronus", "heracles", "eros", "echo", "narcissus"];
var word = null;
var lettersOfTheWord = [];
var correctGuesses = [];
var wrongGuesses = [];
var guessesLeft = 0;
var totalGuesses = 10;
var letterGuesses = null;
var wins = 0;

function start() {
	word = figures[Math.floor(Math.random() * figures.length)];
	console.log(word);
	lettersOfTheWord = word.split('');
	wordDisplay();
	subtractGuesses();
}

function updatePage(letter) {
	if(guessesLeft == 0) {
		var beginning2 = document.createElement('audio');
		beginning2.setAttribute('src', "assets/images/short-boo.m4a");
		beginning2.play();
		restart();
	} else {
		updateGuesses(letter);
		guessedCorrect(letter);
		wordDisplay();
		if(addWin() == true) {
			restart();
		}
	}
}

function updateGuesses(letter) {
	if((wrongGuesses.indexOf(letter) == -1) && (lettersOfTheWord.indexOf(letter) == -1)) {
		wrongGuesses.push(letter);
		guessesLeft--;
		document.querySelector('#guesses-left').innerHTML = "Number of guesses remaining: " + guessesLeft;

		document.querySelector("#missed-letters").innerHTML = "Incorrect Guesses: " + wrongGuesses.join(', ');
	}
}

function guessedCorrect(letter) {
	for (var i = 0; i < lettersOfTheWord.length; i++) {
			if ((letter === lettersOfTheWord[i]) && (correctGuesses.indexOf(letter) == -1)){
				correctGuesses.push(letter);
			}
		} 
}

function subtractGuesses() {
	guessesLeft = totalGuesses;
	document.querySelector('#guesses-left').innerHTML = "Number of guesses remaining: " + guessesLeft;
}

function wordDisplay() {
	var wordView = "";
	for(var i=0; i < lettersOfTheWord.length; i++){
			if (correctGuesses.indexOf(lettersOfTheWord[i]) != -1){
				wordView = wordView + lettersOfTheWord[i];				
			}else{
				wordView = wordView + '&nbsp;_&nbsp;';
			}
		}

		document.querySelector('#letters').innerHTML = wordView;
}

function addWin() {
	if (correctGuesses.length == 0){
			var win = false;
		} else{
			var win = true;
		}
		
		for (var i=0; i < lettersOfTheWord.length; i++){
			if (correctGuesses.indexOf(lettersOfTheWord[i]) == -1){
				win = false;
			}
		}

		if (win == true){
			wins =  wins + 1;
			var beginning = document.createElement('audio');
    		beginning.setAttribute('src', "assets/images/short-applause.m4a");
    		beginning.play();

			document.querySelector('#winCounter').innerHTML = "Wins: " + wins;

			return true;
		}else{
			return false;
		}
}

function restart() {
	document.querySelector('#missed-letters').innerHTML = "Incorrect Guesses: ";
	word = null;
	lettersOfTheWord = [];
	correctGuesses = [];
	wrongGuesses = [];
	guessesLeft = 0;
	totalGuesses = 10;
	letterGuessed = null;
	start();
	wordDisplay();
}

document.onkeyup = function(event) {
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	updatePage(letterGuessed);
};

start();
