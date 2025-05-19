function hitung() {
    const f = parseFloat(document.getElementById('f').value);
    const a = parseFloat(document.getElementById('a').value);

    const pa = f/a ;

    document.getElementById("pa").innerText = "nilai tekanannya adalah = " + pa ;
}