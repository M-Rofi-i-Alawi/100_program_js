function Login() {
    const namaAkun = document.getElementById('namaAkun').value.trim();
    const sandi = document.getElementById('sandi').value.trim();
    const hasil = document.getElementById('hasil');

    if (namaAkun !== 'rofikun@gmail.com') {
        hasil.innerHTML = `Nama akun yang anda masukkan salah: ${namaAkun}`;
    } else if (sandi !== 'rofkuy') {
        hasil.innerHTML = `Sandi yang anda masukkan salah: ${sandi}`;
    } else {
        hasil.innerHTML = "Selamat datang";
    }
}