function hitung() {
    const gaji = parseFloat(document.getElementById('gaji').value);
    const hasil = document.getElementById('hasil');

    if (isNaN(gaji) || gaji <= 0) {
        hasil.innerHTML = "<p style='color:red'>Masukkan gaji yang valid.</p>";
        return;
    }

    let pajak, uangPajak;

    if (gaji >= 500000) {
        pajak = 15;
    } else {
        pajak = 5;
    }

    uangPajak = (pajak / 100) * gaji;
    const sisa = gaji - uangPajak;

    hasil.innerHTML = `
        <p>Anda mendapatkan pajak sebesar <strong>${pajak}%</strong></p>
        <p>Yang perlu Anda bayar pajak sebesar: <strong>Rp ${uangPajak.toLocaleString('id-ID')}</strong></p>
        <p>Sisa uang setelah bayar pajak: <strong>Rp ${sisa.toLocaleString('id-ID')}</strong></p>
      `;
}      