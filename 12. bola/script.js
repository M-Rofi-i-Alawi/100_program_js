// <!-- Nama: Muhammad Rofi'i Alawi -->
// <!-- Kelas: X PPLG 2 -->
// <!-- Tanggal: Kamis 14 Mei 2025 -->
function hitung() {
    const phi = 3.14;
    const r = parseFloat(document.getElementById("jari").value)

    const volume = 4/3*phi*r**3;
    const luaspermukaan = 4*phi*r**2;

    document.getElementById("volume").innerText = "volume: " + volume + " cm3";
    document.getElementById("luaspermukaan").innerText = "luas permukaan: " + luaspermukaan + " cm2";
}
