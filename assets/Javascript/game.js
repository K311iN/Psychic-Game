

//Array of possible answers
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var guessedLetters = [];

var letterToGuess = null;

var guessLeft = 9;

var wins = 0
var losses = 0

var updateGuessesLeft = function () {

    document.querySelector("#guess-left").innerHTML = guessLeft;

};

var updateLetterToGuess = function () {

    letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

};

var updateGuessesSoFar = function () {

    Document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(",");

};

var reset = function () {
    guessesLeft = 9;
    guessedLetter = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();


document.onkeyup = function (event) {

    guessesLeft--;

    var alphabet = event.key.toLowerCase();

    guessedLetters.push(alphabet);

    updateGuessesLeft();
    updateGuessesSoFar();


    if (alphabet === letterToGuess) {

        wins++;
        document.querySelector("#wins").innerHTML = wins;

        reset();
    }
    if (guessLeft === 0) {

        losses++;
        document.querySelector("#losses").innerHTML = losses;

        reset();
    }
};







