function hitung() {
    const m = parseFloat(document.getElementById('m').value);
    const a = parseFloat(document.getElementById('a').value);

    const f = m*a;

    document.getElementById("f").innerText = "gaya nya adalah = " + f + "  N atau kg.m/s2";
}