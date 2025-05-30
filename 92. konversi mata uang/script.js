async function konversi() {
    const jumlah = parseFloat(document.getElementById("jumlah").value);
    const dari = document.getElementById("dari").value;
    const ke = document.getElementById("ke").value;
    const hasil = document.getElementById("hasil");

    if (isNaN(jumlah) || jumlah <= 0) {
        hasil.textContent = "Masukkan jumlah yang valid";
        return;
    }

    try {
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${jumlah}&from=${dari}&to=${ke}`);
        const data = await res.json();

        if (data.rates && data.rates[ke] !== undefined) {
            const converted = data.rates[ke];
            hasil.textContent = `${jumlah} ${dari} = ${converted.toFixed(2)} ${ke}`;
        } else {
            hasil.textContent = "Konversi gagal: mata uang tidak didukung.";
        }
    } catch (err) {
        hasil.textContent = "Gagal menghubungi API.";
        console.error(err);
    }
}
