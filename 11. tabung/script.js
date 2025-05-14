// <!-- Nama: Muhammad Rofi'i Alawi -->
// <!-- Kelas: X PPLG 2 -->
// <!-- Tanggal: Rabum 13 Mei 2025 -->
function hitung() {
    const phi = 3.14;
    const t = parseFloat(document.getElementById("tinggi").value)
    const r = parseFloat(document.getElementById("jari").value)

    const volume = phi * r * r * t;
    const luaspermukaan = 2 * phi * r * (r+t);

    document.getElementById("volume").innerText = "volume: " + volume + " cm3";
    document.getElementById("luaspermukaan").innerText = "luas permukaan: " + luaspermukaan + " cm2";
}
