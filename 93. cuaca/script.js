async function cekCuaca() {
    const kota = document.getElementById("kota").value.trim();
    const hasil = document.getElementById("hasil");

    if (!kota) {
        hasil.textContent = "Masukkan nama kota terlebih dahulu.";
        return;
    }

    try {
        const res = await fetch(`https://wttr.in/${kota}?format=j1`);
        const data = await res.json();

        if (data && data.current_condition && data.current_condition.length > 0) {
            const cuaca = data.current_condition[0];
            hasil.innerHTML = `
                Cuaca di <b>${kota}</b>:<br>
                🌡️ Suhu: ${cuaca.temp_C} °C<br>
                🌥️ Kondisi: ${cuaca.weatherDesc[0].value}<br>
                💧 Kelembaban: ${cuaca.humidity}%
            `;
        } else {
            hasil.textContent = "Data cuaca tidak ditemukan.";
        }
    } catch (err) {
        hasil.textContent = "Gagal mengambil data cuaca.";
        console.error(err);
    }
}
