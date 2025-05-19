function hitung() {
    const m = parseFloat(document.getElementById('m').value);
    const v = parseFloat(document.getElementById('v').value);

    const ek = 1/2*m*v;

    document.getElementById("ek").innerText = "energi kinetiknya adalah = " + ek + "  joule";
}