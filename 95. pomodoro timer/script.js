let workMinutes = 5;
let breakMinutes = 5;
let longBreakMinutes = 15;
let cycles = 4;
let currentCycle = 1;
let isWorking = true;
let timer;
let timeLeft;

function start() {
    if (!timeLeft) {
        timeLeft = workMinutes * 60;
        document.getElementById("status").innerText = `Sesi ${currentCycle}: Belajar`;
    }
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("waktu").innerText =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timer);
        if (isWorking) {
          isWorking = false;
            if (currentCycle < cycles) {
                timeLeft = breakMinutes * 60;
                document.getElementById("status").innerText = `Istirahat pendek 🛋️`;
            } else {
                timeLeft = longBreakMinutes * 60;
                document.getElementById("status").innerText = `Istirahat panjang 😌`;
                currentCycle = 0;
            }
        } else {
            isWorking = true;
            currentCycle++;
            timeLeft = workMinutes * 60;
            document.getElementById("status").innerText = `Sesi ${currentCycle}: Belajar`;
        }
        timer = setInterval(updateTimer, 1000);
    }
}
function start() {
    if (timer) return; // jika sudah jalan, jangan buat timer baru
    if (!timeLeft) {
        timeLeft = workMinutes * 60;
        document.getElementById("status").innerText = `Sesi ${currentCycle}: Belajar`;
    }
    timer = setInterval(updateTimer, 1000);
}


function reset() {
    clearInterval(timer);
    currentCycle = 1;
    isWorking = true;
    timeLeft = workMinutes * 60;
    document.getElementById("status").innerText = "Siap mulai!";
    document.getElementById("timer").innerText = "25:00";
}
