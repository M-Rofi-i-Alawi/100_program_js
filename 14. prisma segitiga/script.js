// Nama: Muhammad Rofi'i Alawi
// Kelas: X PPLG 2
// Tanggal: Kamis 14 Mei 2025
function hitung() {
    const luas_alas = parseFloat(document.getElementById("luas_alas").value);
    const keliling_alas = parseFloat(document.getElementById("keliling_alas").value);
    const tinggi_prisma = parseFloat(document.getElementById("tinggi_prisma").value);

    const volume = luas_alas * tinggi_prisma;
    const luaspermukaan = (2 * luas_alas) + (keliling_alas * tinggi_prisma);

    document.getElementById("volume").innerText = "Volume: " + volume + " cm³";
    document.getElementById("luaspermukaan").innerText = "Luas Permukaan: " + luaspermukaan + " cm²";
}
