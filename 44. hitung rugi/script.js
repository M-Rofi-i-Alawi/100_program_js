function hitung() {
    const hargaBeli = parseFloat(document.getElementById('hargaBeli').value)
    const hargaJual = parseFloat(document.getElementById('hargaJual').value)

    const totalRugi = hargaBeli - hargaJual;

    let hasil = "";
    if (totalRugi > 0) {
        const rugiPersen = (totalRugi / hargaBeli) * 100;
        hasil += `Total kerugian = Rp${totalRugi.toLocaleString("id-ID")}`;
        hasil += `Total kerugian dalam bentuk persen = ${rugiPersen.toFixed(2)}%`;
    } else {
        hasil += "Tidak ada kerugian.";
    }

    document.getElementById('hasil').innerHTML = hasil;
}