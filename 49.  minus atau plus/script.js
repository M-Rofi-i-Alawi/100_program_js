function cek() {
    const angka = parseInt(document.getElementById('angka').value);
    const hasil = document.getElementById('hasil');

    if (isNaN(angka)) {
        hasil.textContent = "Silakan masukkan angka yang valid.";
        return;
    }

    if (angka <= 0) {
        hasil.textContent = `Angka ${angka} adalah minus`;
    } else {
        hasil.textContent = `Angka ${angka} adalah plus`;
    }
}