const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const myCounter = document.querySelector(".my-counter");
const paragr = document.querySelector(".paragraphTimer");
const shortBreakBtn = document.querySelector(".short-break-btn");
const pomodoroBtn = document.querySelector(".pomodoro");

myCounter.appendChild(paragr);

let counterSec = 10;
let counterSecBreak = 5;
let intervalId;
let intervalIdshortBreakBtn;
function startTest() {
  //    counterSec = 10;
  stopTest();
  updateCounter();
}

function updateCounterShortBreakBtnBtn() {
  counterSecBreak--;
  let startMinuteBreak = `${Math.floor(counterSecBreak / 60)}`;
  let startSecundeBreak = `${Math.floor(counterSecBreak % 60)}`;
  paragr.innerHTML = `${startMinuteBreak.padStart(2, "0")}:${startSecundeBreak.padStart(2, "0")}`;

  if (counterSecBreak <= 0) {
    return;
  }
  intervalIdshortBreakBtn = setTimeout(updateCounterShortBreakBtnBtn, 1000);
  document.body.style.backgroundColor = "#4C9195";
  console.log("test");
  shortBreakBtn.style.backgroundColor = "blue";
}

function updateCounter() {
  counterSec--;
  let startMinute = `${Math.floor(counterSec / 60)}`;
  let startSecunde = `${Math.floor(counterSec % 60)}`;
  paragr.innerHTML = `${startMinute.padStart(2, "0")}:${startSecunde.padStar
    (2, "0")}`;
  if (counterSec === 0) {
    return;
  }
  intervalId = setTimeout(updateCounter, 1000);
}

function stopTest() {
  // counterSec = 10;
  clearTimeout(intervalId);
  clearInterval(intervalIdshortBreakBtn);
}

function shortBreakBtnTest() {
  updateCounterShortBreakBtnBtn();
}
startBtn.addEventListener("click", startTest);
stopBtn.addEventListener("click", stopTest);

shortBreakBtn.addEventListener("click", shortBreakBtnTest);
