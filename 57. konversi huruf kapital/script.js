function ubahKeKecil() {
    const teks = document.getElementById("inputTeks").value;
    const hasilDiv = document.getElementById("hasil");

    if (!teks) {
        hasilDiv.innerHTML = "<p style='color:red;'>Silakan masukkan teks terlebih dahulu.</p>";
        return;
    }

    const hasil = teks.toLowerCase();

    hasilDiv.innerHTML = `
        <p>Kapital: ${teks}</p>
        <p>Lower  : ${hasil}</p>
      `;
}