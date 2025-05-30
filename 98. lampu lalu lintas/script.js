let status = 0;

function ganti() {
    // Reset semua lampu
    document.getElementById("red").classList.remove("on");
    document.getElementById("yellow").classList.remove("on");
    document.getElementById("green").classList.remove("on");

    const keterangan = document.getElementById("keterangan");

    // Ganti berdasarkan status
    if (status === 0) {
        document.getElementById("red").classList.add("on");
        keterangan.textContent = "🔴 Berhenti";
    } else if (status === 1) {
        document.getElementById("yellow").classList.add("on");
        keterangan.textContent = "🟡 Hati-hati";
    } else {
        document.getElementById("green").classList.add("on");
        keterangan.textContent = "🟢 Jalan";
    }

    // Update status
    status = (status + 1) % 3;
}