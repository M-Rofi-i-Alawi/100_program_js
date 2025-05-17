function hitung(){
    const sisi = parseFloat(document.getElementById('sisi').value)

    const luas = (3*Math.sqrt(3)*Math.sqrt(2))*sisi**2;
    const keliling = 6*sisi;

    document.getElementById("luas").innerText = "luas: " + luas + " cm2";
    document.getElementById("keliling").innerText = "keliing: " + keliling + " cm";
}