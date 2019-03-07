

//Array of possible answers
var alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]


var wins = 0
var losses = 0
var guessLeft = 10



document.onkeyup = function(event) {

    var playerGuess = event.key;

    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    
    //Create a for-loop to iterate through the letters array. Does that even make sense?

    userGuess = for (var i = alphabet[0]; i < alphabet.length; i++) {
        document.write(alphabet[i])
    }

    if (playerGuess === randomletter) {
        
        wins++;
    }
    else if (guessLeft === 10) {
        losses++;  
    }
    else{
       
        losses++;
    }

    //for loop for number of guess left?

    for (var j = 10; j > 0; j--)
}
    
    





