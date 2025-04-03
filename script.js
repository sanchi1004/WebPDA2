const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript makes web development exciting.",
    "Practice typing to improve your speed and accuracy.",
    "A journey of a thousand miles begins with a single step.",
    "An apple a day keeps the doctor away."
];

const box = document.getElementById("sentence");
const input = document.getElementById("input");
const time = document.getElementById("timer");
const speed = document.getElementById("wpm");
const restart = document.getElementById("restart");

let start, timer, currentsentence;
let totalKeys=0,running=false;

function getRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}
function resetstats(){
    totalKeys=0;
    running=false;
    start=null;
    clearInterval(timer);
    time.innerText="Time: 0s";
    speed.innerText="WPM: 0";
}
function startTest() {
    currentsentence = getRandomSentence();
    box.innerText = currentsentence;
    input.value = "";
    input.disabled = false;
    input.focus();
    resetstats();
}
function updateTime() {
    let seconds = Math.floor((new Date() - startTime) / 1000);
    time.innerText = `Time: ${seconds}s`;
}
function calculateResults() {
    clearInterval(timer);
    let minutes = (new Date() - start) / 60000;
    let wpm = Math.round((totalKeys / 5) / minutes);
    speed.innerText = `WPM: ${isNaN(wpm) ? 0 : wpm}`;
}
inputField.addEventListener("input", () => {
    if (!running) {
        start = new Date();
        running = true;
        timer = setInterval(updateTime, 1000);
    }

    totalKeys++;
    if (input.value === currentsentence) {
        calculateResults();
        input.disabled = true;
    }
});

restart.addEventListener("click", startTest);

window.onload = startTest;