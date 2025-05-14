// <!-- Nama: Muhammad Rofi'i Alawi -->
// <!-- Kelas: X PPLG 2 -->
// <!-- Tanggal: Kamis 14 Mei 2025 -->
function hitung() {
    const t = parseFloat(document.getElementById("tinggi").value)
    const luas_alas = parseFloat(document.getElementById("luas_alas").value)
    const luas_sisi_tegak = parseFloat(document.getElementById("luas_sisi_tegak").value)

    const volume = 1/3*luas_alas*t;
    const luaspermukaan = luas_alas+luas_sisi_tegak;

    document.getElementById("volume").innerText = "volume: " + volume + " cm3";
    document.getElementById("luaspermukaan").innerText = "luas permukaan: " + luaspermukaan + " cm2";
}
