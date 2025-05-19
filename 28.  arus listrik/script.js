function hitung() {
    const Q = parseFloat(document.getElementById('Q').value);
    const t = parseFloat(document.getElementById('t').value);

    const I = Q/t;

    document.getElementById("I").innerText = "kuat arus listriknya = " + I + " ampere";
}