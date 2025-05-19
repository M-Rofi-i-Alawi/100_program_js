function hitung() {
    const v = parseFloat(document.getElementById('v').value);
    const t = parseFloat(document.getElementById('t').value);

    const s = v*t;

    document.getElementById("s").innerText = "jarak = " + s + " km";
}