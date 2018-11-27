var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;
var userGuesses = [];
var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//document.getElementById("guesses").innerHTML = guesses;
document.onkeyup = function (event) {
    // Dtermines which key was pressed.

    var userGuess = event.key;
    userGuesses.push(userGuess);

    if (userGuess === computerChoice) {
        wins++;
        document.getElementById("guesses").innerHTML = guesses--;
        document.getElementById("win").innerHTML = wins;
        guesses = 9;
        losses = 0;
        document.getElementById("guessed").innerHTML = "<span id=\"guessed\"></span>";
        computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    } else if (userGuess !== computerChoice) {
        document.getElementById("guesses").innerHTML = --guesses;
        document.getElementById("loss").innerHTML = losses;
        document.getElementById("guessed").append(" " + userGuesses[userGuesses.length - 1] + ", ");
        if (guesses < 1) {
            losses++;
            console.log(losses);
            document.getElementById("loss").innerHTML = "<span id=\"loss\">" + " " + losses + " " + "</span>";
            document.getElementById("guessed").innerHTML = "<span id=\"guessed\"></span>";
            computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            guesses = 9;
        }
    }

}