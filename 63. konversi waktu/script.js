// Nilai konversi ke detik
const keDetik = {
    detik: 1,
    menit: 60,
    jam: 3600,
    hari: 86400,
    minggu: 604800
};

function konversiWaktu() {
    const nilai = parseFloat(document.getElementById("nilai").value);
    const dari = document.getElementById("dari").value;
    const ke = document.getElementById("ke").value;

    if (isNaN(nilai)) {
        document.getElementById("hasil").innerText = "Masukkan angka yang valid!";
        return;
    }

    const dalamDetik = nilai * keDetik[dari];
    const hasil = dalamDetik / keDetik[ke];

    document.getElementById("hasil").innerText = 
        `${nilai} ${dari} = ${hasil.toFixed(4)} ${ke}`;
}