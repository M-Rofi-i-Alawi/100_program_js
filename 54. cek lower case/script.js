function cek() {
    const teks1 = document.getElementById('teks1').value;
    const teks2 = document.getElementById('teks2').value;
    const hasil = document.getElementById('hasil');

    // Fungsi untuk cek apakah seluruh karakter huruf adalah lowercase
    const isLowerCase = (str) => /^[a-z]+$/.test(str);
    const isUpperCase = (str) => /^[A-Z ?!]+$/.test(str); // Termasuk spasi dan tanda tanya

    let output = "";

    if (teks1) {
        output += `<p>${teks1} is lower = ${isLowerCase(teks1)}</p>`;
    }

    if (teks2) {
        output += `<p>${teks2} is upper = ${isUpperCase(teks2)}</p>`;
    }

    if (!output) {
        output = "<p style='color:red'>Silakan isi salah satu atau kedua input di atas.</p>";
    }

    hasil.innerHTML = output;
}