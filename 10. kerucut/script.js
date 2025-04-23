function hitung() {
  const r = parseFloat(document.getElementById("r").value);
  const t = parseFloat(document.getElementById("t").value);
  const s = parseFloat(document.getElementById("s").value);
  const lp = (3.14*r**2)+(3.14*r*s);
  const volume = 1/3*3.14*r**2*t;

  document.getElementById("volume").innerText = "volume: " + volume + " cm3 ";
  document.getElementById("lp").innerText = "hasil luas permukaan: " + lp+ " cm2";
}
