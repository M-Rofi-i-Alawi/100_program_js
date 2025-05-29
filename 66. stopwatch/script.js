let detik = 0;
let interval = null;
let berjalan = false;

function updatetampilan() {
    let jam = Math.floor(detik / 3600);
    let menit = Math.floor((detik % 3600) / 60);
    let dtk = detik % 60;

    document.getElementById("waktu").textContent =
        `${jam.toString().padStart(2, '0')}:${menit.toString().padStart(2, '0')}:${dtk.toString().padStart(2, '0')}`;
}

function mulai() {
    if (!berjalan) {
        berjalan = true;
        interval = setInterval(() => {
            detik++;
            updatetampilan();
        }, 1000);
    }
}

function berhenti() {
    clearInterval(interval);
    berjalan = false;
}

function ulang() {
    berhenti();
    detik = 0;
    updatetampilan();
}
