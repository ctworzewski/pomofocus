const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const myCounter = document.querySelector(".my-counter");
const paragr = document.querySelector(".paragraphTimer");
const shortBreakBtn = document.querySelector(".short-break-btn");
const pomodoroBtn = document.querySelector(".pomodoro");

myCounter.appendChild(paragr);

let counterSec = 11;
let counterSecBreak = 6;
let intervalId;
let intervalIdshortBreakBtn;
function startTest() {
  counterSec = 11;
  stopTest();
  updateCounter();
  playMusic();
}

function startShortBreak() {
  counterSecBreak = 6;
  stopTest();
  updateCounterShortBreakBtn();

}

function updateCounterShortBreakBtn() {
  counterSecBreak--;
  let startMinuteBreak = `${Math.floor(counterSecBreak / 60)}`;
  let startSecundeBreak = `${Math.floor(counterSecBreak % 60)}`;
  paragr.innerHTML = `${startMinuteBreak.padStart(2, "0")}:${startSecundeBreak.padStart(2, "0")}`;

  if (counterSecBreak === 0) {
    return;
  }
  intervalIdshortBreakBtn = setTimeout(updateCounterShortBreakBtn, 1000);
  document.body.style.backgroundColor = "#4C9195";
  console.log("test");
  shortBreakBtn.style.backgroundColor = "blue";
}

function updateCounter() {
  counterSec--;
  let startMinute = `${Math.floor(counterSec / 60)}`;
  let startSecunde = `${Math.floor(counterSec % 60)}`;
  paragr.innerHTML = `${startMinute.padStart(2, "0")}:${startSecunde.padStart(2, "0")}`;
  if (counterSec === 0) {
    return;
  }
  intervalId = setTimeout(updateCounter, 1000);


}

function playMusic() {
  let audioTest = new Audio('./sources/music.mp3');
  audioTest.play();
}

function stopTest() {
  // counterSec = 10;
  clearTimeout(intervalId);
  clearInterval(intervalIdshortBreakBtn);
}

function shortBreakBtnTest() {
  updateCounterShortBreakBtn();
}

// skorzystałem ze źródła https://techstacker.com/count-number-of-clicks-on-an-element-with-javascript/
// funkcja ma sprawdzać ilość kliknięć
let manyClick = 0;
const clicks = document.querySelector('.clicks');
clicks.addEventListener('click', function() {
  manyClick = manyClick + 1;
  console.log(manyClick);

  // na if'a sam wpadłem
  if (manyClick === 2) {
    shortBreakBtnTest();
  }
});

// function howManyClickBtn() {
//   console.log('ile kliknięć? : ', manyClick.values);
  
// }
startBtn.addEventListener("click", startTest);
stopBtn.addEventListener("click", stopTest);

shortBreakBtn.addEventListener("click", shortBreakBtnTest);
