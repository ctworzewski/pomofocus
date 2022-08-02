const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const myCounter = document.querySelector(".my-counter");
const paragr = document.querySelector(".paragraphTimer");
const shortBreakBtn = document.querySelector(".short-break-btn");
const pomodoroBtn = document.querySelector(".pomodoro-btn");

myCounter.appendChild(paragr);

let counterSec = 11;
let counterSecBreak = 6;
let intervalId;
let intervalIdshortBreakBtn;

let lastActiveButton;
function changeActiveColor(activeButton) {
  if (lastActiveButton !== undefined && lastActiveButton !== activeButton) {
    lastActiveButton.classList.remove("active");
  }
  activeButton.classList.add("active");
  lastActiveButton = activeButton;
}
changeActiveColor(pomodoroBtn);

// pomodoroBtn.style.backgroundColor = "blue";
function startTest() {
  // document.body.classList.toggle('pomodoro-btn');
  console.log(pomodoroBtn);
  counterSec = 11;
  stopTest();
  updateCounter();
  // playMusic();
}

function startShortBreak() {
  counterSecBreak = 6;
  stopTest();
  updateCounterShortBreakBtn();
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

function updateCounter() {
  counterSec--;
  let startMinute = `${Math.floor(counterSec / 60)}`;
  let startSecunde = `${Math.floor(counterSec % 60)}`;
  paragr.innerHTML = `${startMinute.padStart(2, "0")}:${startSecunde.padStart(
    2,
    "0"
  )}`;
  if (counterSec === 0) {
    return;
  }
  intervalId = setTimeout(updateCounter, 1000);
}

function stopTest() {
  clearTimeout(intervalId);
  clearInterval(intervalIdshortBreakBtn);
}

function shortBreakBtnTest() {
  if (counterSecBreak === 0) {
    return;
  }
  updateCounterShortBreakBtn();
  changeActiveColor(shortBreakBtn);
}

// skorzystałem ze źródła https://techstacker.com/count-number-of-clicks-on-an-element-with-javascript/
// funkcja ma sprawdzać ilość kliknięć
let manyClick = 0;
const clicks = document.querySelector(".clicks");
clicks.addEventListener("click", function () {
  manyClick = manyClick + 1;
  console.log(manyClick);

  // na if'a sam wpadłem
  if (manyClick === 2) {
    shortBreakBtnTest();
  }
});

startBtn.addEventListener("click", startTest);
stopBtn.addEventListener("click", stopTest);

shortBreakBtn.addEventListener("click", shortBreakBtnTest);

// function playMusic() {
//   let audioTest = new Audio('./sources/music.mp3');
//   if (startBtn) {
//     audioTest.play();

//   }
//   else if (stopBtn) {
//     audioTest.pause();
//   }
// }
