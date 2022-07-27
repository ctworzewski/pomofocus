const startBtn = document.querySelector('.start-btn');
// const stopBtn = document.querySelector('.stop-btn');
const myCounter = document.querySelector('.my-counter');
const paragr = document.querySelector('.paragraphTimer');

myCounter.appendChild(paragr);

let counter = 12;
function startTest() {
    updateCounter(counter--);
    // counter = 0;
}
function updateCounter(count) {
    if (counter >= 10){
        paragr.innerHTML = `25:${counter}`;
    } else if(counter<=10 && counter >= 0) {

        paragr.innerHTML = `25:0${counter}`;
        
    }
//  if(counter === 0) {
//         counter = 0;
//         paragr.innerHTML = `25:0${counter}`;
//         console.log('test');
//     } else {
//         return;
//     }
}


setInterval(startTest, 1000);
startBtn.addEventListener('click', startTest);
