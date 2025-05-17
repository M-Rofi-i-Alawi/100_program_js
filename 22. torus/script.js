function hitung() {
    const R = parseFloat(document.getElementById('R').value);
    const r = parseFloat(document.getElementById('r').value);

    const volume = 2 * 3.14 ** 2 * R * r ** 2;
    const luas_permukaan = 4 * 3.14 ** 2 * R * r;

    document.getElementById("volume").innerText = "volume: " + volume + " cm2";
    document.getElementById("luas_permukaan").innerText = "luas_permukaan: " + luas_permukaan + " cm3";
}