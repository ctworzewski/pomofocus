console.log('Test');

// function startApp() {
//     console.log('Działa przycisk')
// }
const startBtn = document.querySelector('.start-btn');

function clickTest() {
    console.log('Test klikania');
}
startBtn.addEventListener('click', clickTest);
