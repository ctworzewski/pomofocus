let lastActiveButton;

 changeActiveColor(pomodoroBtn);
export function changeActiveColor(activeButton) {
  if (lastActiveButton !== undefined && lastActiveButton !== activeButton) {
    lastActiveButton.classList.remove("active");
  }
  activeButton.classList.add("ac tive");
  lastActiveButton = activeButton;
}