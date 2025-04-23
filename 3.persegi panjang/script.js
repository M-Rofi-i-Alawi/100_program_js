function hitung() {
  const p = parseFloat(document.getElementById("p").value);
  const l = parseFloat(document.getElementById("l").value);
  const luas = p*l;
  const keliling = 2*(p+l);

  document.getElementById("hasil luas").innerText = "hasil luas: " + luas + " cm2";
  document.getElementById("hasil keliling").innerText = "hasil keliling: " + keliling + " cm ";
}
