const $ = document.querySelector.bind(document);

const setup = {
  POMODORO: 25 * 60,
  SHORT_BREAK: 5 * 60,
  LONG_BREAK: 15 * 60,
}

let currentModeName;
let remainingTime;
let intervalId;

const appNode = $('[data-app="pomodoro"]');
const timeNode = $('[data-display="TIME"]');

appNode.addEventListener('click', handleClick);

switchMode("POMODORO");

function handleClick(event) {
  console.log(event.target.dataset);
  const action = event.target.dataset.action;
  
  switch(action) {
    case "START":
    	startTimer();
      break;
    case "STOP":
      stopTimer();
      break;
    case "POMODORO":
      switchMode("POMODORO");
      break;
    case "SHORT_BREAK":
      switchMode("SHORT_BREAK")
      break;
    case "LONG_BREAK":
      switchMode("LONG_BREAK");
      break;
    default:
      return;
  }
}

function switchMode(modeName) {
  stopTimer();
  if (currentModeName) {
    deactivateModeTab(currentModeName);
  }

  currentModeName = modeName;
  resetTime(currentModeName);
  activateModeTab(currentModeName);
}

function activateModeTab(modeName) {
  $(`[data-action="${modeName}"]`).classList.add('active');
}

function deactivateModeTab(modeName) {
  $(`[data-action="${modeName}"]`).classList.remove('active')
}

function resetTime(modeName) {
  remainingTime = setup[modeName];
  renderRemainingTime();
}

function startTimer() {
	scheduleTimeUpdate();
}

function stopTimer() {
  cancelTimeUpdate();
}

function renderRemainingTime() {
  timeNode.textContent = formatTime(remainingTime);
}

function formatTime(time) {
  const minutes = `${Math.floor(time / 60)}`;
  const seconds = `${Math.floor(time % 60)}`;
  
  return `${minutes.padStart(2, "0")}:${seconds.padStart(2,"0")}`
}


function scheduleTimeUpdate() {
  intervalId = setTimeout(updateTimer, 1000)
}

function cancelTimeUpdate() {
  clearTimeout(intervalId);
}


function updateTimer() {
	decreaseRemainingTimeByOneSecond();
  renderRemainingTime();
  scheduleTimeUpdate();
}

function decreaseRemainingTimeByOneSecond() {
  remainingTime--;
}

  
