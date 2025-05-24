function cekSubstring() {
    const kalimat = document.getElementById("kalimat").value;
    const substring = document.getElementById("substring").value;
    const hasilDiv = document.getElementById("hasil");

    const statusAda = kalimat.includes(substring);
    const statusTidakAda = !statusAda;

    hasilDiv.innerHTML = `
        <p>Kalimat: "${kalimat}"</p>
        <p>Substring dicari: "${substring}"</p>
        <p>Hasil (pakai <code>in</code>): ${substring} ada di kalimat? <strong>${statusAda}</strong></p>
        <p>Hasil (pakai <code>not in</code>): ${substring} tidak ada di kalimat? <strong>${statusTidakAda}</strong></p>`;
}