function cek() {
    const usia = parseInt(document.getElementById("usia").value);
    let kategori = "";

    if (isNaN(usia) || usia < 0) {
        kategori = "Usia tidak valid!";
    } else if (usia < 13) {
        kategori = "Anak-anak";
    } else if (usia < 18) {
        kategori = "Remaja";
    } else if (usia < 60) {
        kategori = "Dewasa";
    } else {
        kategori = "Lansia";
    }

    document.getElementById("hasil").textContent = `Kategori: ${kategori}`;
}