// Nama: Muhammad Rofi'i Alawi
// Kelas: X PPLG 2
// Tanggal: Kamis 14 Mei 2025

function hitungLimas(){
    const sisi = parseFloat(document.getElementById("sisi").value)
    const tinggi_limas = parseFloat(document.getElementById("tinggi_limas").value)
    const tinggi_segitiga = parseFloat(document.getElementById("tinggi_segitiga").value)

    const luaspermukaan = (sisi**2)+(4*0.5*sisi*tinggi_segitiga);
    const volume = (1/3)*(sisi**2)*tinggi_limas;

    document.getElementById("luas_permukaan").innerText = "luas permukaan: " + luaspermukaan + " cm2";
    document.getElementById("volume").innerText = "volume: " + volume + " cm3";
}