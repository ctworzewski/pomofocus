const startBtn = document.querySelector(".start-btn");
 const stopBtn = document.querySelector('.stop-btn');
const myCounter = document.querySelector(".my-counter");
const paragr = document.querySelector(".paragraphTimer");

myCounter.appendChild(paragr);

let counterSec = 5;
let intervalId;
function startTest() {
    stopTest();
    counterSec = 5;
  updateCounter();
}
function updateCounter() {
    counterSec--;

  paragr.innerHTML = `${Math.floor(counterSec / 60)}:${counterSec % 60}`;
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

