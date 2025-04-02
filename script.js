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