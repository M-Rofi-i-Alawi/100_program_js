function hitung() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    const operator = document.getElementById("operator").value;
    const hasilDiv = document.getElementById("hasil");

    if (isNaN(angka1) || isNaN(angka2)) {
        hasilDiv.textContent = "Masukkan dua angka yang valid.";
        return;
    }

    let hasil;
    switch (operator) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            if (angka2 === 0) {
                hasilDiv.textContent = "Tidak bisa dibagi dengan nol.";
                return;
            }
            hasil = angka1 / angka2;
            break;
    }
    hasilDiv.textContent = `Hasil: ${hasil}`;
}
