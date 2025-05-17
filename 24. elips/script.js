function hitung() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);

    const luas = 3.14 * a * b;

    document.getElementById("luas").innerText = "luas: " + luas + " cm2";
}