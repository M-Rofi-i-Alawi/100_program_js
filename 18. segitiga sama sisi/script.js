function hitung(){
    const sisi = parseFloat(document.getElementById('sisi').value)

    const luas = 1/4* Math.sqrt(3) * sisi**2;
    const keliling = 3*sisi;

    document.getElementById("luas").innerText = "luas: " + luas + " cm2";
    document.getElementById("keliling").innerText = "keliing: " + keliling + " cm";
}