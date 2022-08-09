const $ = document.querySelector.bind(document);

// Time in milliseconds
const setup = {
  POMODORO: 5 * 1000, 
  SHORT_BREAK: 2 * 1000,
  LONG_BREAK: 4 * 1000,
}

let currentModeName;
let remainingTime;
let animationFrameId;
let lastUpdate;

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
  lastUpdate = Date.now();
  console.log(lastUpdate);
	scheduleTimeUpdate();
}

function stopTimer() {
  cancelTimeUpdate();
}

function timerIsRunning() {
  return animationFrameId !== undefined;
}

function renderRemainingTime() {
  timeNode.textContent = formatTime(remainingTime);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60000).toString();
  const rest = Math.floor(time % 60000);
  const seconds = Math.floor(rest / 1000).toString();
  const milliseconds = Math.floor(rest % 1000).toString();

  return `${minutes.padStart(2, "0")}:${seconds.padStart(2,"0")}:${milliseconds.padStart(3, "0")}`
}

function scheduleTimeUpdate() {
  animationFrameId = requestAnimationFrame(updateTimer);
  console.log('test', animationFrameId);
}

function cancelTimeUpdate() {
  cancelAnimationFrame(animationFrameId);
  animationFrameId = undefined;
}

function updateTimer() {
	decreaseRemainingTime();
  renderRemainingTime();
  scheduleTimeUpdate();
}

function decreaseRemainingTime() {
  const now = Date.now();
  const elapsedTime = now - lastUpdate;
  
  remainingTime = Math.max(0, remainingTime - elapsedTime);
  lastUpdate = now;
}

  
