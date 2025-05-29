function cek() {
    const angka = parseInt(document.getElementById("angka").value);
    const hasil = document.getElementById("hasil");

    if (isNaN(angka)) {
        hasil.textContent = "masukkan angka yang valid!";
        return;
    }

    if (angka % 3 === 0 && angka % 5 === 0) {
        hasil.textContent = "FizzBuzz";
    } else if (angka % 3 === 0) {
        hasil.textContent = "Fizz";
    } else if (angka % 5 === 0) {
        hasil.textContent = "Buzz";
    } else {
        hasil.textContent = angka;
    }
}