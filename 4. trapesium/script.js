function hitung() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const d = parseFloat(document.getElementById("d").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const luas = 1/2*(a+b)*tinggi;
  const keliling = a+b+c+d;

  document.getElementById("hasil luas").innerText = "hasil luas: " + luas + " cm2";
  document.getElementById("hasil keliling").innerText = "hasil keliling: " + keliling + " cm ";
}
