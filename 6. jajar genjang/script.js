function hitung() {
  const sisi = parseFloat(document.getElementById("sisi").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const alas = parseFloat(document.getElementById("alas").value);
  const luas = alas*tinggi;
  const keliling = 2*(alas+sisi);

  document.getElementById("hasil luas").innerText = "hasil luas: " + luas + " cm2";
  document.getElementById("hasil keliling").innerText = "hasil keliling: " + keliling + " cm ";
}
