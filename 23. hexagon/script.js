function hitung() {
    const sisi = parseFloat(document.getElementById('sisi').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    const luasAlas = (3 * Math.sqrt(3) / 2) * sisi ** 2;
    const kelilingAlas = 6 * sisi;
    const luasPermukaan = 2 * luasAlas + kelilingAlas * tinggi;
    const volume = luasAlas * tinggi;

    document.getElementById("luas_permukaan").innerText = "luas_permukaan: " + luasPermukaan + " cm2";
    document.getElementById("volume").innerText = "Volume: " + volume + " cm3";  
}