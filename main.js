console.log('Test');

const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const myCounter = document.querySelector('.my-counter');
const paragraphTimer = document.createElement('div');

const div = document.querySelector('.my-counter')
myCounter.appendChild(paragraphTimer);


let counter = 60;
function startTest() {
    updateCounter(counter--);
}

function updateCounter(count) {
    paragraphTimer.innerHTML = counter;
}

function stopApp() {
    if (stopBtn) {
        clearInterval(startTest);
    }
}

//  setInterval(startApp, 1000);
 setInterval(startTest, 1000);
// startBtn.addEventListener('click', startApp);
startBtn.addEventListener('click', startTest);

stopBtn.addEventListener('click', stopApp);



// function timeDown() {
//     let  allSec = 59;
//     for (let i = 0; i< allSec; i++) {
//         // allSec = allSec + 1;
//         console.log(allSec)
//     }
// }
// setInterval(timeDown, 1000);