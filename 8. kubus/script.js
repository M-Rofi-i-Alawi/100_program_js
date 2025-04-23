function hitung() {
  const s = parseFloat(document.getElementById("s").value);
  const luas = s*s;
  const volume = s**3;
  const lp = 6*(s*s);
  const keliling = 12*s;

  document.getElementById("volume").innerText = "volume: " + volume + " cm3 ";
  document.getElementById("hasil keliling").innerText = "hasil keliling: " + keliling + " cm ";
  document.getElementById("hasil luas").innerText = "hasil luas: " + luas + " cm2";
  document.getElementById("lp").innerText = "luas permukaan: " + lp+ " cm2";
}
