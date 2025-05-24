function cek() {
    const input = document.getElementById('kalimat').value;
      const hasil = document.getElementById('hasil');

    if (!input) {
        hasil.textContent = "Masukkan kalimat terlebih dahulu!!";
        return;
    }

    // Menghapus spasi (opsional)
    const teks = input.replace(/\s/g, '');

    const hurufTerkecil = teks.split('').reduce((a, b) => a < b ? a : b);
    const hurufTerbesar = teks.split('').reduce((a, b) => a > b ? a : b);

    hasil.innerHTML = `
        <strong>Huruf terkecil:</strong> ${hurufTerkecil} <br>
        <strong>Huruf terbesar:</strong> ${hurufTerbesar}
      `;
}