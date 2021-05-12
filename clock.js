const deg = 6;
const hour = document.querySelector('#hr');
const min = document.querySelector('#mn')
const sec = document.querySelector('#sc');
const buttonStart = document.getElementById('buttonStart')
const buttonStop = document.getElementById('buttonStop')

let timer;

function startClock(){
    let time = new Date();
    let hr = time.getHours() * 30;
    let mn = time.getMinutes() * deg;
    let sc = time.getSeconds() * deg;
    hour.style.transform = `rotateZ(${(hr) + (mn/12)}deg)`;
    min.style.transform = `rotateZ(${mn}deg)`;
    sec.style.transform = `rotateZ(${sc}deg)`;
}

function startTime(){
    timer = setInterval(startClock)
}

function stopTime(){
    clearTimeout(timer)
}
