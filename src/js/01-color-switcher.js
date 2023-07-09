const body = document.querySelector("body");
const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
let timerId = null;

stopButton.disabled = true;
startButton.addEventListener("click", onClickStart);

function onClickStart() {
    timerId = setInterval(()=>{
        const randomColor = getRandomHexColor();
        body.style.backgroundColor = randomColor;
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}
stopButton.addEventListener("click", onClickStop);
function onClickStop() {
    clearInterval(timerId);
    startButton.disabled = false;
    stopButton.disabled = true;
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
