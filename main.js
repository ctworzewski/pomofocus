const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const myCounter = document.querySelector('.my-counter');
const paragr = document.querySelector('.paragraphTimer');
let counter = 11;

myCounter.appendChild(paragr);

function startTest() {
    updateCounter(counter--);
}
function updateCounter(count) {
    setInterval(startTest, 1000);
    if (counter < 10){
        paragr.innerHTML = `25:0${counter}`;
    }
    if (counter <= 0) {
        counter = 0;
        paragr.innerHTML = `25:0${counter}`;
    }
}


startBtn.addEventListener('click', startTest);
