function hitung() {
    const beli = parseFloat(document.getElementById('hargaBeli').value);
    const jual = parseFloat(document.getElementById('hargaJual').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(beli) || isNaN(jual)) {
        resultDiv.textContent = 'Mohon masukkan harga beli dan harga jual yang valid!';
        resultDiv.style.color = 'red';
        return;
    }

    const selisih = jual - beli;

    if (selisih > 0) {
        resultDiv.style.color = 'green';
        resultDiv.textContent = `Untung sebesar Rp ${selisih.toLocaleString('id-ID')}`;
    } else if (selisih < 0) {
        resultDiv.style.color = 'red';
        resultDiv.textContent = `Rugi sebesar Rp ${Math.abs(selisih).toLocaleString('id-ID')}`;
    } else {
        resultDiv.style.color = 'black';
        resultDiv.textContent = 'Tidak untung dan tidak rugi (impas).';
    }
}