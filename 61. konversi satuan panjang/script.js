const faktor = {
    cm: 0.01,
    m: 1,
    km: 1000,
    inch: 0.0254,
    ft: 0.3048,
    mi: 1609.34
    };

    function konversi() {
        const nilai = parseFloat(document.getElementById("nilai").value);
        const dari = document.getElementById("dari").value;
        const ke = document.getElementById("ke").value;

        if (isNaN(nilai)) {
            document.getElementById("hasil").innerText = "Masukkan angka yang valid!";
            return;
        }

        // Konversi ke meter sebagai satuan tengah
        const nilaiDalamMeter = nilai * faktor[dari];
        const hasilAkhir = nilaiDalamMeter / faktor[ke];

        document.getElementById("hasil").innerText = `${nilai} ${dari} = ${hasilAkhir.toFixed(4)} ${ke}`;
}