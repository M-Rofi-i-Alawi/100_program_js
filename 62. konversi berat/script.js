const konversiKeGram = {
    g: 1,
    kg: 1000,
    lb: 453.592,
    oz: 28.3495,
    ton: 1_000_000
};

function konversiBerat() {
    const nilai = parseFloat(document.getElementById("nilai").value);
    const dari = document.getElementById("dari").value;
    const ke = document.getElementById("ke").value;

    if (isNaN(nilai)) {
        document.getElementById("hasil").innerText = "Masukkan angka yang valid!";
        return;
    }

    const nilaiGram = nilai * konversiKeGram[dari];
    const hasil = nilaiGram / konversiKeGram[ke];

    document.getElementById("hasil").innerText =
        `${nilai} ${dari} = ${hasil.toFixed(4)} ${ke}`;
}