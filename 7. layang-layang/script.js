function hitung() {
  const d1 = parseFloat(document.getElementById("d1").value);
  const d2 = parseFloat(document.getElementById("d2").value);
  const sp = parseFloat(document.getElementById("sp").value);
  const luas = 2/d1+d2;
  const keliling = 4*sp;

  document.getElementById("hasil luas").innerText = "hasil luas: " + luas + " cm2";
  document.getElementById("hasil keliling").innerText = "hasil keliling: " + keliling + " cm ";
}
