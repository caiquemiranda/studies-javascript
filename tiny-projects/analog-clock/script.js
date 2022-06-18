let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

// function para atualizar o relogio
function updateClock() {
    let now = new Date();
    let hour = now.getHours();        // get hours
    let minute = now.getMinutes();    // get minutes
    let second = now.getSeconds();    // get seconds

    // format hours and minutes in html
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    // calcula o angulo do relogio
    let sDeg = ((360/60) * second) - 90;
    let mDeg = ((360/60) * minute) - 90;
    let hDeg = ((360/12) * hour) - 90;

    // atualiza o angulo do relogio
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}}deg)`;

}

// function para adicionar zero ao numero
function fixZero(time){
    // time menor que 10, adicionar zero a esquerda
    return time < 10 ? `0${time}` : time;
}

// intervalo para atualizar o relogio time = 1000ms = 1s
setInterval(updateClock, 1000);

// atualiza o relogio inicialmente
updateClock();