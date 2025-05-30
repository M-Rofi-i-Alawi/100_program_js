function acak() {
    const input = document.getElementById("kata").value;
    const hasil = document.getElementById("hasil");

    if (!input || input.trim() === "") {
        hasil.textContent = "Masukkan kata terlebih dahulu!";
        return;
    }

    const huruf = input.split('');
    for (let i = huruf.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [huruf[i], huruf[j]] = [huruf[j], huruf[i]];
    }

    hasil.textContent = `Hasil acak: ${huruf.join('')}`;
}