function hitung() {
    const m = parseFloat(document.getElementById('m').value);
    const v = parseFloat(document.getElementById('v').value);

    const p = m/v;

    document.getElementById("p").innerText = "massa jenisnya adalah = " + p + "  kg/m3";
}