function cek() {
    const angka = parseInt(document.getElementById("angka").value);
    let hasil = "";

    if (isNaN(angka) || angka < 2) {
        hasil = "Masukkan bilangan bulat ≥ 2";
    } else {
        let prima = true;
        for (let i = 2; i <= Math.sqrt(angka); i++) {
            if (angka % i === 0) {
                prima = false;
                break;
            }
        }
        hasil = prima
            ? angka + " adalah bilangan prima."
            : angka + " bukan bilangan prima.";
    }

    document.getElementById("hasil").textContent = hasil;
}
