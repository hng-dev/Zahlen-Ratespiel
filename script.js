// ===========================================
// Konstanten und Variablen
// ===========================================
const guessInput = document.getElementById("guessInput");
const messageElement = document.getElementById("message");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessesCount = 0;

// ===========================================
// Event Listener (UI Steuerung)
// ===========================================

// Buttons
document.getElementById("guessButton").addEventListener("click", result);
document.getElementById("againButton").addEventListener("click", init);

// Tastatur-Eingabe (Enter Taste)
guessInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        result();
    }
});

// ===========================================
// Funktionen
// ===========================================
function result() {

    const guess = parseInt(guessInput.value);
    guessesCount++;
    const remainingGuesses = 10 - guessesCount;

    if (guess === randomNumber) {
        messageElement.textContent = "Gut gemacht!";
        guessInput.disabled = true;
        document.getElementById("guessButton").disabled = true;
        return;
    } else if (guess < randomNumber) {
        messageElement.textContent = `Die gesuchte Zahl ist größer. (Verbleibende Versuche: ${remainingGuesses})`;
    } else {
        messageElement.textContent = `Die gesuchte Zahl ist kleiner. (Verbleibende Versuche: ${remainingGuesses})`;
    }

    guessInput.value = "";
    guessInput.focus();

    if (guessesCount === 10 && guess !== randomNumber) {
        messageElement.textContent = `Schade! Du hast alle 10 Versuche aufgebraucht. Die Zahl war ${randomNumber}.`;
        guessInput.disabled = true;
        document.getElementById("guessButton").disabled = true;
    }
};

function init() {

    guessInput.value = "";
    guessInput.focus();
    messageElement.textContent = "Neue Runde";
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessesCount = 0;
    guessInput.disabled = false;
    document.getElementById("guessButton").disabled = false;

    setTimeout(() => {
        guessInput.focus();
    }, 10);
};

// ===========================================
// Hilfsfunktionen (Utilities)
// ===========================================

async function loadVersion() {
    const response = await fetch('version.json');
    const data = await response.json();
    document.getElementById('app-version').textContent = data.version;
};

// ===========================================
// Anwendungsstart (Initialisierung)
// ===========================================
init();
loadVersion();