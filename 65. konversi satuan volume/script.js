const keLiter = {
    ml: 0.001,
    l: 1,
    cm3: 0.001,
    m3: 1000,
    in3: 0.0163871,
    ft3: 28.3168,
    gal: 3.78541 // Galon US
};

function konversi() {
    const nilai = parseFloat(document.getElementById("nilai").value);
    const dari = document.getElementById("dari").value;
    const ke = document.getElementById("ke").value;

    if (isNaN(nilai)) {
        document.getElementById("hasil").innerText = "Masukkan angka yang valid!";
        return;
    }

    const nilaiLiter = nilai * keLiter[dari];
    const hasil = nilaiLiter / keLiter[ke];

    document.getElementById("hasil").innerText = `${nilai} ${dari} = ${hasil.toFixed(4)} ${ke}`;
}