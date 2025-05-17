function hitung() {
    const a = parseFloat(document.getElementById('a').value);
    const h = parseFloat(document.getElementById('h').value);

    const luas = (2 / 3) * a * h;

    document.getElementById("luas").innerText = "luas: " + luas + " cm2";
}