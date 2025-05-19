function hitung() {
    const m = parseFloat(document.getElementById('m').value);
    const h = parseFloat(document.getElementById('h').value);

    const ep = m*10*h;

    document.getElementById("ep").innerText = "energi potensialnya adalah = " + ep + "  joule";
}