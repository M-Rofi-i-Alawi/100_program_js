function hitung() {
    const p = parseFloat(document.getElementById('p').value);
    const v = parseFloat(document.getElementById('v').value);

    const fa = p*10*v ;

    document.getElementById("fa").innerText = "gaya apung nya adalah = " + fa ;
}