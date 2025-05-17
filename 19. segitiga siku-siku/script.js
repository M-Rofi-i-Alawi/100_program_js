function hitung(){
    const tinggi = parseFloat(document.getElementById('tinggi').value)
    const a = parseFloat(document.getElementById('a').value)
    const b = parseFloat(document.getElementById('b').value)
    const c = parseFloat(document.getElementById('c').value)

    const luas =  1/2 * a * tinggi;
    const keliling = a + b + c;

    document.getElementById("luas").innerText = "luas: " + luas + " cm2";
    document.getElementById("keliling").innerText = "keliing: " + keliling + " cm";
}