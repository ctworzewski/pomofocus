const startBtn = document.querySelector('.start-btn');
// const stopBtn = document.querySelector('.stop-btn');
const myCounter = document.querySelector('.my-counter');
const paragr = document.querySelector('.paragraphTimer');

myCounter.appendChild(paragr);

let counterSec = 12;
let counterMin = 12;
function startTest() {
    updateCounter(counterSec--);
    // downCounterMinute(counterMin--);
}
function updateCounter() {
    if (counterSec >= 10){
        paragr.innerHTML = `12:${counterSec}`;
    } else if(counterSec <=10 && counterSec >= 0) {
        
        paragr.innerHTML = `12:0${counterSec}`;
    }
setTimeout(startTest, 1000);
// setTimeout(downCounterMinute, 1000);

}

// function downCounterMinute(countMin) {
//     if (counterMin <= 12) {
//     paragr.innerHTML = `${counterMin}:00`;
//     } else if (counterMin <= 12 && counterMin >=0) {
//         paragr.innerHTML = `00:00`;
//     }
// }

startBtn.addEventListener('click', startTest);




//////////////////////// od 04.08

import { playMusic } from "./src/audio.js";
// import { changeActiveColor } from "./src/changeColor.js";

const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const myCounter = document.querySelector(".my-counter");
const paragr = document.querySelector(".paragraphTimer");
const shortBreakBtn = document.querySelector(".short-break-btn");
const pomodoroBtn = document.querySelector(".pomodoro-btn");
const longBreakBtn = document.querySelector('.long-break-btn');

myCounter.appendChild(paragr);

const POMODORO_TIME = 5;
const POMODORO_TIME_SHORT = 10;
const POMODORO_TIME_LONG = 15;

let counterSec = POMODORO_TIME;
let counterSecBreak = POMODORO_TIME_SHORT;
let counterSecLong = POMODORO_TIME_LONG;

let intervalId;
let intervalIdshortBreakBtn;
let intervalIdLongBreakBtn;

let lastActiveButton;


changeActiveColor(pomodoroBtn);
renderCurrentTime();


function changeActiveColor(activeButton) {
  if (lastActiveButton !== undefined && lastActiveButton !== activeButton) {
    lastActiveButton.classList.remove("active");
  }
  activeButton.classList.add("active");
  lastActiveButton = activeButton;
}

function startTimer() {
  counterSec = POMODORO_TIME;
  counterSecBreak = POMODORO_TIME_SHORT;
  counterSecLong = POMODORO_TIME_LONG;
  stopTimer();
  renderCurrentTime();
  scheduleTimeUpdate();
  playMusic();
}

// function startShortBreak() {
//   counterSecBreak = 6;
//   stopTimer();
//   updateCounterShortBreakBtn();
// }

// function startLongBreak() {
//   counterSecLong = 15;
//   stopTimer();
//   updateCounterLongBreakBtn();
// }

function updateCounterLongBreakBtn() {
  let startMinuteLong= `${Math.floor(counterSecLong/60)}`; 
  let startSecundeLong= `${Math.floor(counterSecLong%60)}`;
  paragr.innerHTML =  `${startMinuteLong.padStart(2, '0')}:${startSecundeLong.padStart(2, '0')}`;
  if (counterSecLong === 0) {
    return;
  }
  intervalIdLongBreakBtn = setTimeout(updateCounterLongBreakBtn, 1000);
  document.body.style.backgroundColor = 'pink';

}
  
function updateCounterShortBreakBtn() {
  // counterSecBreak--;
  let startMinuteBreak = `${Math.floor(counterSecBreak / 60)}`;
  let startSecundeBreak = `${Math.floor(counterSecBreak % 60)}`;
  paragr.innerHTML = `${startMinuteBreak.padStart(
    2,
    "0"
  )}:${startSecundeBreak.padStart(2, "0")}`;

  if (counterSecBreak === 0) {
    return;
  }
  intervalIdshortBreakBtn = setTimeout(updateCounterShortBreakBtn, 1000);
  document.body.style.backgroundColor = "#4C9195";
}

function renderCurrentTime() {
  let startMinute = `${Math.floor(counterSec / 60)}`;
  let startSecunde = `${Math.floor(counterSec % 60)}`;
  paragr.innerHTML = `${startMinute.padStart(2, "0")}:${startSecunde.padStart(
    2,
    "0"
  )}`;
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
  clearInterval(intervalIdshortBreakBtn);
  clearInterval(intervalIdLongBreakBtn);
}

function shortBreakBtnTest() {
  if (counterSecBreak === 0) {
    return;
  }
  updateCounterShortBreakBtn();
  changeActiveColor(shortBreakBtn);
}

function longBreakBtnTest() {
  if (counterSecLong === 0) {
    return;
  }
  updateCounterLongBreakBtn();
  changeActiveColor(longBreakBtn);
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);

shortBreakBtn.addEventListener("click", shortBreakBtnTest);
longBreakBtn.addEventListener('click',  longBreakBtnTest);

