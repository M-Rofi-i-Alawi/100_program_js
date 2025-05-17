function hitung(){
    const luas_alas = parseFloat(document.getElementById('luas_alas').value)
    const tinggi_segitiga = parseFloat(document.getElementById('tinggi_segitiga').value)
    const tinggi_limas = parseFloat(document.getElementById('tinggi_limas').value)
    const sisi_tegak = parseFloat(document.getElementById('sisi_tegak').value)

    const luas_permukaan = luas_alas+sisi_tegak;
    const volume = (1/3)*(luas_alas*tinggi_segitiga)*tinggi_limas;

    document.getElementById("volume").innerText = "Volume: " + volume + " cm³";
    document.getElementById("luas_permukaan").innerText = "Luas Permukaan: " + luas_permukaan + " cm²";
}