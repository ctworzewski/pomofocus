console.log('Test');

const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const myCounter = document.querySelector('.my-counter');

function startApp() {
    let counter = 0;
    const paragraphTimer = document.createElement('div');
    // paragraphTimer.className('my-counter-paragraph');
    for (let i = 0; i <= 59; i++) {

        paragraphTimer.innerText = `Czas: ${i++}`;
    }
    // const div = document.querySelector('.my-counter')
    myCounter.appendChild(paragraphTimer);
    console.log('Test klikania');

    // for (let i = 0; i>num; i--) {
    //      if (num === 25) {
    //         myCounter.innerHTML = num;
    //         console.log('my counter to: ', myCounter)
    //     }
    //     console.log('pokaż numer: ', i)
    //     myCounter.innerHTML = num;
    // }   
    
}

function stopApp() {
    clearInterval(startApp);
}

//  setInterval(startApp, 1000);
startBtn.addEventListener('click', startApp);
stopBtn.addEventListener('click', stopApp);



// function timeDown() {
//     let  allSec = 59;
//     for (let i = 0; i< allSec; i++) {
//         // allSec = allSec + 1;
//         console.log(allSec)
//     }
// }
// setInterval(timeDown, 1000);