const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const myCounter = document.querySelector(".my-counter");
const paragr = document.querySelector(".paragraphTimer");

myCounter.appendChild(paragr);

let counterSec = 65;
let intervalId;
function startTest() {
  stopTest();
  counterSec = 65;
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
}

function stopTest() {
  clearTimeout(intervalId);
}
startBtn.addEventListener("click", startTest);
stopBtn.addEventListener("click", stopTest);