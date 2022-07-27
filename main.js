console.log('Test');

const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const myCounter = document.querySelector('.my-counter');
// const paragraphTimer = document.createElement('.paragraphTimer');
const paragr = document.querySelector('.paragraphTimer');

// const div = document.querySelector('.my-counter')
myCounter.appendChild(paragr);


let counter = 60;
function startTest() {
    updateCounter(counter--);
}

function updateCounter(count) {
    paragr.innerHTML = `25:${counter}`;
    clearInterval(stopTest);
}

function stopTest() {
    counter = 0;
    return counter;
}

// function stopApp() {
//     if (stopBtn) {
//         clearInterval(startTest);
//     }
// }

//  setInterval(startApp, 1000);
 setInterval(startTest, 1000);
// startBtn.addEventListener('click', startApp);
startBtn.addEventListener('click', startTest);

stopBtn.addEventListener('click', stopTest);