const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const myCounter = document.querySelector(".my-counter");
const paragr = document.querySelector(".paragraphTimer");
const shortBreak = document.querySelector('.short-break-btn');
const pomodoroBox = document.querySelector('.pomodoro');

myCounter.appendChild(paragr);

let counterSec = 10;
let counterSecBreak = 5;
let intervalId;
let intervalIdShortBreak;
function startTest() {
//    counterSec = 5;
  stopTest();
  updateCounter();
}

function updateCounterShortBreak() {
    counterSecBreak--;
    document.body.style.backgroundColor = '#4C9195';
    console.log('test');
    shortBreak.style.backgroundColor = 'blue';
    let startMinuteBreak = `${Math.floor(counterSecBreak / 60)}`;
    let startSecundeBreak = `${Math.floor(counterSecBreak % 60)}`;
    paragr.innerHTML = `${startMinuteBreak.padStart(2, '0')}:${startSecundeBreak.padStart(2, '0')}`;
    intervalIdShortBreak = setTimeout(updateCounterShortBreak, 1000);

    if (counterSecBreak <= 0) {
        return;
    }

}

function updateCounter() {
    counterSec--;
    let startMinute = `${Math.floor(counterSec / 60)}`;
    let startSecunde = `${Math.floor(counterSec % 60)}`;
    paragr.innerHTML = `${startMinute.padStart(2, '0')}:${startSecunde.padStart(2, '0')}`;
    if (counterSec === 0) {
      return;
    }
    intervalId = setTimeout(updateCounter, 1000);

    
  }

function stopTest() {
    // counterSec = 10;
  clearTimeout(intervalId);
  clearInterval(intervalIdShortBreak);

}

function shortBreakTest() {
    updateCounterShortBreak();

}
startBtn.addEventListener("click", startTest);
stopBtn.addEventListener("click", stopTest);

shortBreak.addEventListener('click', shortBreakTest);