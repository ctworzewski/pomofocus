console.log('Test');

const startBtn = document.querySelector('.start-btn');
const myCounter = document.querySelector('.my-counter');

function startApp() {
    let counter = 0;
    const paragraphTimer = document.createElement('div');
    // paragraphTimer.className('my-counter-paragraph');
    paragraphTimer.innerText = `Czas: ${counter+=1}`;
    // const div = document.querySelector('.my-counter')
    myCounter.appendChild(paragraphTimer);
    console.log('Test klikania');
    let num=25;
    for (let i = 0; i>num; i--) {
         if (num === 25) {
            myCounter.innerHTML = num;
            console.log('my counter to: ', myCounter)
        }
        console.log('pokaż numer: ', i)
        myCounter.innerHTML = num;
    }   
    
}

 setInterval(startApp, 1000);
startBtn.addEventListener('click', startApp);




