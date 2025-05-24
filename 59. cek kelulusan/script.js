function cekKelulusan() {
    const nilai = parseInt(document.getElementById("nilai").value);
    const hasil = document.getElementById("hasil");

    if (isNaN(nilai)) {
        hasil.style.color = "red";
        hasil.textContent = "Masukkan angka yang valid!";
        return;
    }

    if (nilai >= 650) {
        hasil.style.color = "green";
        hasil.textContent = "Lulus";
    } else {
        hasil.style.color = "red";
        hasil.textContent = "Tidak Lulus";
      }
}