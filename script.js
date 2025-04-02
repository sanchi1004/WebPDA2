const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript makes web development exciting.",
    "Practice typing to improve your speed and accuracy.",
    "A journey of a thousand miles begins with a single step."
];

const sentenceDisplay = document.getElementById("sentence");
const inputField = document.getElementById("input");
const timerDisplay = document.getElementById("timer");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart");

let startTime, interval, currentSentence, totalTyped = 0, correctTyped = 0, isRunning = false;

function getRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}

function startTest() {
    currentSentence = getRandomSentence();
    sentenceDisplay.innerText = currentSentence;
    inputField.value = "";
    inputField.disabled = false;
    inputField.focus();
    totalTyped = 0;
    correctTyped = 0;
    isRunning = false;
    startTime = null;
    clearInterval(interval);
    timerDisplay.innerText = "Time: 0s";
    wpmDisplay.innerText = "WPM: 0";
    accuracyDisplay.innerText = "Accuracy: 0%";
}
function updateTimer() {
    let elapsed = Math.floor((new Date() - startTime) / 1000);
    timerDisplay.innerText = `Time: ${elapsed}s`;
}
function calculateResults() {
    clearInterval(interval);
    let elapsedMinutes = (new Date() - startTime) / 60000;
    let wpm = Math.round((correctTyped / 5) / elapsedMinutes);
    let accuracy = ((correctTyped / totalTyped) * 100).toFixed(2);
    wpmDisplay.innerText = `WPM: ${isNaN(wpm) ? 0 : wpm}`;
    accuracyDisplay.innerText = `Accuracy: ${isNaN(accuracy) ? 0 : accuracy}%`;
}