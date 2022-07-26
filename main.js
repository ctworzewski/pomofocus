console.log('Test');

const startBtn = document.querySelector('.start-btn');
const myCounter = document.querySelector('.my-counter');

function clickTest() {
    console.log('Test klikania');
    let num=25;
    for (let i = 0; i<=num; i++) {
         if (num === 25) {
            myCounter.innerHTML = i;
            console.log('my counter to: ', myCounter)
        }
        console.log('pokaż numer: ', i)
        myCounter.innerHTML = i;
    }   
    
}

startBtn.addEventListener('click', clickTest);




