function ubahKeKapital() {
    const teks = document.getElementById("inputTeks").value;
    const hasilDiv = document.getElementById("hasil");

    if (!teks) {
        hasilDiv.innerHTML = "<p style='color:red;'>Silakan masukkan teks terlebih dahulu.</p>";
        return;
    }

    const hasil = teks.toUpperCase();

    hasilDiv.innerHTML = `
        <p>Normal: ${teks}</p>
        <p>Upper : ${hasil}</p>
      `;
}