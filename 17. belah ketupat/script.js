function hitung(){
    const sisi = parseFloat(document.getElementById('sisi').value)
    const d1 = parseFloat(document.getElementById('d1').value)
    const d2 = parseFloat(document.getElementById('d2').value)

    const luas = 1/2*d1*d2;
    const keliling = 4*sisi;

    document.getElementById("luas").innerText = "luas: " + luas + " cm2";
    document.getElementById("keliling").innerText = "keliing: " + keliling + " cm";
}