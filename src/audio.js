let audio;
export function playMusic() {
  audio = audio || new Audio("./sources/music.mp3");
  audio.currentTime = 0;
  audio.play();
}
