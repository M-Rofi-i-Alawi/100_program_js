function hitung() {
    const b1 = parseInt(document.getElementById('barang1').value) || 0;
    const b2 = parseInt(document.getElementById('barang2').value) || 0;
    const b3 = parseInt(document.getElementById('barang3').value) || 0;
    const b4 = parseInt(document.getElementById('barang4').value) || 0;
    const b5 = parseInt(document.getElementById('barang5').value) || 0;
    const diskon = parseFloat(document.getElementById('diskon').value) || 0;

    const jumlah = b1 + b2 + b3 + b4 + b5;
    const jumlahDiskon = (diskon / 100) * jumlah;
    const totalBayar = jumlah - jumlahDiskon;

    let hasil = "";

    if (jumlah > 500000) {
        hasil += `Anda mendapatkan diskon sebesar ${diskon}%<br>`;
        hasil += `Harga awal: Rp${jumlah.toLocaleString("id-ID", {minimumFractionDigits: 2})}<br>`;
        hasil += `Potongan harga: Rp${jumlahDiskon.toLocaleString("id-ID", {minimumFractionDigits: 2})}<br>`;
        hasil += `Total yang harus Anda bayar: Rp${totalBayar.toLocaleString("id-ID", {minimumFractionDigits: 2})}<br>`;
    } else {
        hasil += `Anda tidak mendapatkan diskon sebesar ${diskon.toFixed(2)}%<br>`;
        hasil += `Total yang harus Anda bayar: Rp${jumlah.toLocaleString("id-ID", {minimumFractionDigits: 2})}<br>`;
    }

        document.getElementById('hasil').innerHTML = hasil;
}