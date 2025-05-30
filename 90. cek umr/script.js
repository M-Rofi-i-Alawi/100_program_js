function cek() {
    const umr = 2000000; // UMR bisa disesuaikan sesuai daerah
    const umur = parseInt(document.getElementById('umur').value);
    const gaji = parseInt(document.getElementById('gaji').value);
    const hasil = document.getElementById('hasil');

    if (isNaN(umur) || umur <= 0 || isNaN(gaji) || gaji < 0) {
        hasil.style.color = 'red';
        hasil.textContent = 'Masukkan umur dan gaji yang valid!';
        return;
    }

    if (gaji >= umr) {
        hasil.style.color = 'green';
        hasil.textContent = `Gaji Anda (Rp ${gaji.toLocaleString('id-ID')}) di atas atau setara UMR.`;
    } else {
        hasil.style.color = 'red';
        hasil.textContent = `Gaji Anda (Rp ${gaji.toLocaleString('id-ID')}) di bawah UMR.`;
    }
}