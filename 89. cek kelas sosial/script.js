function cek() {
    const penghasilanInput = document.getElementById('penghasilan').value;
    const penghasilan = parseInt(penghasilanInput);
    const hasil = document.getElementById('hasil');

    if (isNaN(penghasilan) || penghasilan < 0) {
        hasil.style.color = 'red';
        hasil.textContent = 'Mohon masukkan penghasilan yang valid (angka positif).';
        return;
    }

    if (penghasilan >= 6000000) {
        hasil.style.color = 'green';
        hasil.textContent = 'Anda kelas atas.';
    } else if (penghasilan >= 1000000 && penghasilan <= 5999999) {
        hasil.style.color = 'orange';
        hasil.textContent = 'Anda kelas menengah.';
    } else {
        hasil.style.color = 'red';
        hasil.textContent = 'Anda kelas miskin.';
    }
}