function hitung() {
    const q = parseFloat(document.getElementById('q').value);
    const v1 = parseFloat(document.getElementById('v1').value);
    const v2 = parseFloat(document.getElementById('v2').value);

    const w = q*(v2-v1);

    document.getElementById("w").innerText = "jadi energi listriknya = " + w + "joule";
}