// import { playMusic } from "./src/audio.js";
import { changeActiveColor } from "./src/changeColor.js";
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const myCounter = document.querySelector(".my-counter");
const paragr = document.querySelector(".paragraphTimer");
const shortBreakBtn = document.querySelector(".short-break-btn");
const pomodoroBtn = document.querySelector(".pomodoro-btn");
myCounter.appendChild(paragr);
const POMODORO_TIME = 5;
let counterSec = POMODORO_TIME;
let counterSecBreak = 6;
// let intervalId;
let intervalIdShort;
changeActiveColor(pomodoroBtn);
renderCurrentTime();

function startTimer() {
  counterSec = POMODORO_TIME;
  stopTimer();
  renderCurrentTime();
  scheduleTimeUpdate();
  // playMusic();
}
function updateCounterShort() {
  let startMinuteBreak = `${Math.floor(counterSecBreak / 60)}`;
  let startSecundeBreak = `${Math.floor(counterSecBreak % 60)}`;
  paragr.innerHTML = `${startMinuteBreak.padStart(2,"0")}:${startSecundeBreak.padStart(2, "0")}`;
  if (counterSecBreak === 0) {return;}
  intervalIdShort = setTimeout(updateCounterShort, 1000);
  document.body.style.backgroundColor = "#4C9195";
}
function renderCurrentTime() {
  let startMinute = `${Math.floor(counterSec / 60)}`;
  let startSecunde = `${Math.floor(counterSec % 60)}`;
  paragr.innerHTML = `${startMinute.padStart(2, "0")}:${startSecunde.padStart(
    2,"0")}`;
}
function scheduleTimeUpdate() {
  intervalId = setTimeout(updateCounter, 1000);
}
function updateCounter() {
  counterSec--;
  renderCurrentTime();
  if (counterSec === 0) {
    return;
  }
  scheduleTimeUpdate();
}
function stopTimer() {
  clearTimeout(intervalId);
  clearInterval(intervalIdShort);
}
function shortBreakBtnTest() {
  if (counterSecBreak === 0) {return;}
  updateCounterShort();
  changeActiveColor(shortBreakBtn);
}
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
shortBreakBtn.addEventListener("click", shortBreakBtnTest);
