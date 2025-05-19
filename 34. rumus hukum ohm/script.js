function hitung() {
    const i = parseFloat(document.getElementById('i').value);
    const r = parseFloat(document.getElementById('r').value);

    const v = i*r;

    document.getElementById("v").innerText = "tegangan listriknya adalah = " + v + "  v";
}