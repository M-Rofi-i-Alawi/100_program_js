function ukur() {
    const tinggi = parseInt(document.getElementById('tinggi').value);
    const berat = parseInt(document.getElementById('berat').value);
    const hasil = document.getElementById('hasil');

    if (isNaN(tinggi) || isNaN(berat)) {
        hasil.innerHTML = "<p style='color:red'>Silakan masukkan angka yang valid untuk tinggi dan berat.</p>";
        return;
    }

    // Cek tinggi badan
    let kategoriTinggi;
    if (tinggi < 120) {
        kategoriTinggi = `Tinggi badan = ${tinggi} cm → Pendek`;
    } else if (tinggi >= 121 && tinggi < 180) {
        kategoriTinggi = `Tinggi badan = ${tinggi} cm → Ideal`;
    } else {
        kategoriTinggi = `Tinggi badan = ${tinggi} cm → Setinggi tiang`;
    }

    // Cek berat badan
    let kategoriBerat;
    if (berat < 30) {
        kategoriBerat = `Berat badan = ${berat} kg → Kurus`;
    } else if (berat >= 31 && berat < 65) {
        kategoriBerat = `Berat badan = ${berat} kg → Ideal`;
    } else {
        kategoriBerat = `Berat badan = ${berat} kg → Gemuk`;
    }

    hasil.innerHTML = `
        <p>${kategoriTinggi}</p>
        <p>${kategoriBerat}</p>
      `;
}