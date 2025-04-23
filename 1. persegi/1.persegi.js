// <!-- Nama: Muhammad Rofi'i Alawi -->
// <!-- Kelas: X PPLG 2 -->
// <!-- Tanggal: Rabum 23 April 2025 -->
function hitung() {
  const sisi = parseFloat(document.getElementById("sisi").value);
  const luas = sisi*sisi;
  const keliling = 4*sisi;

  document.getElementById("hasil luas").innerText = "hasil luas: " + luas + " cm2";
  document.getElementById("hasil keliling").innerText = "hasil keliling: " + keliling + " cm ";
}
