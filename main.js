const startBtn = document.querySelector('.start-btn');
// const stopBtn = document.querySelector('.stop-btn');
const myCounter = document.querySelector('.my-counter');
const paragr = document.querySelector('.paragraphTimer');

myCounter.appendChild(paragr);

let counterSec = 12;
let counterMin = 12;
function startTest() {
    updateCounter(counterSec--);
    // downCounterMinute(counterMin--);
}
function updateCounter(countSec) {
    if (counterSec >= 10){
        paragr.innerHTML = `12:${counterSec}`;
    } else if(counterSec <=10 && counterSec >= 0) {
        
        paragr.innerHTML = `12:0${counterSec}`;
    }
setTimeout(startTest, 1000);
// setTimeout(downCounterMinute, 1000);

}

// function downCounterMinute(countMin) {
//     if (counterMin <= 12) {
//     paragr.innerHTML = `${counterMin}:00`;
//     } else if (counterMin <= 12 && counterMin >=0) {
//         paragr.innerHTML = `00:00`;
//     }
// }

startBtn.addEventListener('click', startTest);
