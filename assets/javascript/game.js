var hidden = [];
var characters = ['Avengers', 'Iron Man', 'Thor', 'Captain America', 'Hulk', 'Black Widow', 'Thanos'];
var chosen = "";
var random = Math.floor(Math.random() * characters.length);
var blanks = "";
var hiddenLength = "";
var guesses = [];


function getWord() {
    // var characters = ['Avengers', 'Iron Man', 'Thor', 'Captain America', 'Hulk', 'Black Widow', 'Thanos'];
    random = [Math.floor(Math.random() * characters.length)];
    chosen = characters[random];
    hiddenLength = chosen.length;
    for (var i = 0; i < hiddenLength; i++) {
        hidden.push("_");
    }
    hiddenWord = hidden.join(" ");
    document.getElementById("wordGuess").innerHTML = hiddenWord;
    document.getElementById("guessesLeft").innerHTML = "Number of Guesses Remaining: " + guesses;
    // userGuesses = hiddenLength + 5;
}

document.onkeyup = function (event) {
    console.log(event.key);
    guesses.push(event.key);
    document.getElementById("userGuesses").innerHTML = "Letters Already Guessed: " + guesses;
}




getWord();


console.log(random);
console.log(characters);
console.log(chosen);
console.log(hiddenLength);
console.log(hidden);
console.log(hiddenWord);
