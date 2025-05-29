function hitung() {
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value) / 100;

    if (!berat || !tinggi) {
        document.getElementById("hasil").textContent = "Masukkan berat dan tinggi yang valid.";
        return;
    }

    const bmi = berat / (tinggi * tinggi);
    let kategori = "";

    if (bmi < 18.5) {
        kategori = "Kurus";
    } else if (bmi < 25) {
        kategori = "Normal";
    } else if (bmi < 30) {
        kategori = "Gemuk";
    } else {
        kategori = "Obesitas";
    }

    document.getElementById("hasil").textContent = `Indeks massa tubuh Anda: ${bmi.toFixed(2)} (${kategori})`;
}