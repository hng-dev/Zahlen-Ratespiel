// Konstanten
const guessInput = document.getElementById("guessInput");
const messageElement = document.getElementById("message");
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Button
document.getElementById("guessButton").addEventListener("click", result);

//Funktionen
function result() {

    const guess = parseInt(guessInput.value);

    if (guess === randomNumber) {
        messageElement.textContent = "Gut gemacht!";
    } else if (guess < randomNumber) {
        messageElement.textContent = "Die gesuchte Zahl ist größer.";
    } else {
        messageElement.textContent = "Die gesuchte Zahl ist kleiner.";
    }

};