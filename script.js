let startTime, updatedTime, difference, tInterval, running = false;
const display = document.getElementById('display');
const lapTimes = document.getElementById('lapTimes');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 1000);
        running = true;
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    display.innerHTML = 
        (hours < 10 ? "0" + hours : hours) + ":" + 
        (minutes < 10 ? "0" + minutes : minutes) + ":" + 
        (seconds < 10 ? "0" + seconds : seconds);
}

function pauseTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    display.innerHTML = "00:00:00";
    lapTimes.innerHTML = "";
}

function addLap() {
    const li = document.createElement("li");
    li.textContent = display.textContent;
    lapTimes.appendChild(li);
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
document.getElementById('display').addEventListener('dblclick', addLap);

