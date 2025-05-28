const keMeter2 = {
    cm2: 0.0001,
    m2: 1,
    km2: 1_000_000,
    in2: 0.00064516,
    ft2: 0.092903,
    ha: 10000,
    ac: 4046.86
};

function konversiLuas() {
    const nilai = parseFloat(document.getElementById("nilai").value);
    const dari = document.getElementById("dari").value;
    const ke = document.getElementById("ke").value;

    if (isNaN(nilai)) {
        document.getElementById("hasil").innerText = "Masukkan angka yang valid.";
        return;
    }

    const nilaiDalamM2 = nilai * keMeter2[dari];
    const hasil = nilaiDalamM2 / keMeter2[ke];

    document.getElementById("hasil").innerText = `${nilai} ${dari} = ${hasil.toFixed(4)} ${ke}`;
}