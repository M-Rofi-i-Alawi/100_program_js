function hitung() {
  const r = parseFloat(document.getElementById("r").value);
  const luas = 3.14*r*r;
  const keliling = 2*3.14*r;

  document.getElementById("hasil luas").innerText = "hasil luas: " + luas + " cm2";
  document.getElementById("hasil keliling").innerText = "hasil keliling: " + keliling + " cm ";
}
