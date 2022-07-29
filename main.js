const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const myCounter = document.querySelector(".my-counter");
const paragr = document.querySelector(".paragraphTimer");
const shortBreak = document.querySelector('.short-break-btn');
const pomodoroBox = document.querySelector('.pomodoro');

myCounter.appendChild(paragr);

let counterSec = 10;
let intervalId;
function startTest() {
//    counterSec = 5;
  stopTest();
  updateCounter();
}
function updateCounter() {
    counterSec--;
    let startMinute = `${Math.floor(counterSec / 60)}`;
    let startSecunde = `${Math.floor(counterSec % 60)}`;
  //   let test11 = `${Math.floor(counterSec / 60)}:${counterSec % 60}`;
    paragr.innerHTML = `${startMinute.padStart(2, '0')}:${startSecunde.padStart(2, '0')}`;
    if (counterSec === 0) {
      return;
    }
    intervalId = setTimeout(updateCounter, 1000);

    if (stopBtn == 2) {
        shortBreakTest();
    }
    else {
        return;
    }
  }

function stopTest() {
    // counterSec = 10;
  clearTimeout(intervalId);
}

let counterSecBreak = 5;
function shortBreakTest() {
    document.body.style.backgroundColor = '#4C9195';
    // document.body.pomodoroBox.style.backgroundColor = '#5E9CA0';
    counterSecBreak--;
    // startTest();
    console.log('test');
    shortBreak.style.backgroundColor = 'blue';
    let startMinute = `${Math.floor(counterSecBreak / 60)}`;
    let startSecunde = `${Math.floor(counterSecBreak % 60)}`;
    // paragr.innerHTML = `${Math.floor(counterSecBreak / 60)}:${counterSecBreak % 60}`;
    paragr.innerHTML = `${startMinute.padStart(2, '0')}:${startSecunde.padStart(2, '0')}`;

}
startBtn.addEventListener("click", startTest);
stopBtn.addEventListener("click", stopTest);

shortBreak.addEventListener('click', shortBreakTest);