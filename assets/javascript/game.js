var hidden = [];
var characters = ['avengers', 'ironman', 'thor', 'captainamerica', 'hulk', 'blackwidow', 'thanos'];
var chosen = "";
var random = Math.floor(Math.random() * characters.length);
var blanks = "";
var hiddenLength = "";
var userGuesses = "";
var wins= 0;
var guesses = [];
var hidden2 = [];
var hiddenWord2 = [];


function getWord() {
    // var characters = ['Avengers', 'Iron Man', 'Thor', 'Captain America', 'Hulk', 'Black Widow', 'Thanos'];
    random = [Math.floor(Math.random() * characters.length)];
    chosen = characters[random];
    hiddenLength = chosen.length;
    for (var i = 0; i < hiddenLength; i++) {
        hidden.push("_");
        hidden2.push("_");
    }
    hiddenWord = hidden.join(" ");
    document.getElementById("wordGuess").innerHTML = hiddenWord;
    userGuesses = hiddenLength + 2;
    document.getElementById("guessesLeft").innerHTML = "Number of Guesses Remaining: " + userGuesses;
    hiddenWord2 = chosen.split("");
}

document.onkeyup = function (event) {
    console.log(event.key);
    guesses.push(event.key);
    document.getElementById("usersGuesses").innerHTML = "Letters Already Guessed: " + guesses;
    userGuesses--;
    document.getElementById("guessesLeft").innerHTML = "Number of Guesses Remaining: " + userGuesses;

    // if (chosen.indexOf(event.key) > -1) {
    //     userGuesses--;
    //     document.getElementById("guessesLeft").innerHTML = "Number of Guesses Remaining: " + userGuesses;
    // hidden2[chosen.indexOf(event.key)] = event.key;
    // document.getElementById("wordGuess").innerHTML = hidden2.join(" ");
    // }
    for (var i = 0; i < chosen.length; i++) {
        if (hiddenWord2[i] === event.key) {
            hidden2[i] = event.key;
            document.getElementById("wordGuess").innerHTML = hidden2.join(" ");

        }
    }
    if (userGuesses === 0) {
        hidden = [];
        guesses = [];
        hidden2 = [];
        hiddenWord2 = [];
        getWord();
    }
    if (chosen.split("").toString() === hidden2.toString()) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        hidden = [];
        guesses = [];
        hidden2 = [];
        hiddenWord2 = [];
        getWord();
    }
  
console.log(wins);
console.log(chosen.split("").toString());
console.log(hidden2.toString());

}




getWord();


console.log(random);
console.log(characters);
console.log(chosen);
console.log(hiddenLength);
console.log(hidden);
console.log(hiddenWord);
