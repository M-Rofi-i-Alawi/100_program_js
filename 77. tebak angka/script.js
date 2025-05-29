const angkaRahasia = Math.floor(Math.random() * 100) + 1;
let percobaan = 0;

function cek() {
    const input = parseInt(document.getElementById("tebakan").value);
    const hasil = document.getElementById("hasil");

    if (isNaN(input) || input < 1 || input > 100) {
        hasil.textContent = "Masukkan angka antara 1 sampai 100!";
        return;
    }

    percobaan++;

    if (input === angkaRahasia) {
        hasil.textContent = `Selamat! Kamu menebak dengan benar dalam ${percobaan} percobaan!`;
        hasil.style.color = "green";
    } else if (input < angkaRahasia) {
        hasil.textContent = "Terlalu kecil! Coba lagi.";
        hasil.style.color = "red";
    } else {
        hasil.textContent = "Terlalu besar! Coba lagi.";
        hasil.style.color = "red";
    }
}