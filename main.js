console.log('Test');

const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const myCounter = document.querySelector('.my-counter');
const paragr = document.querySelector('.paragraphTimer');

myCounter.appendChild(paragr);

let counter = 11;
function startTest() {
    updateCounter(counter--);
}

function updateCounter(count) {
    if (counter < 10){
        paragr.innerHTML = `25:0${counter}`;
    } else {

        paragr.innerHTML = `25:${counter}`;
    }
    if (counter === 0) {

        clearInterval();
    }
}

function stopTest() {
    if (counter === 0)
    counter = 0;
    return counter;
}

setInterval(updateCounter, 1000);
startBtn.addEventListener('click', startTest);

stopBtn.addEventListener('click', stopTest);