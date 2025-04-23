function hitung() {
  const p = parseFloat(document.getElementById("p").value);
  const l = parseFloat(document.getElementById("l").value);
  const t = parseFloat(document.getElementById("t").value);
  const luas = 2*(p*l)+(p*t)+(l*t);
  const volume = p*l*t;
  const keliling = 4*(p+l+t);

  document.getElementById("volume").innerText = "volume: " + volume + " cm3 ";
  document.getElementById("hasil keliling").innerText = "hasil keliling: " + keliling + " cm ";
  document.getElementById("hasil luas").innerText = "hasil luas: " + luas + " cm2";
}
