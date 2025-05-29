function cek() {
    const input = document.getElementById("inputan").value;
    const hasil = document.getElementById("hasil");

    if (input.trim() === "") {
        hasil.textContent = "Input kosong";
        return;
    }

    // dari parsing ke number
    const number = Number(input);

    if (!isNaN(number)) {
        if (Number.isInteger(number)) {
          hasil.textContent = "Tipe: Integer";
        } else {
          hasil.textContent = "Tipe: Float";
        }
    } else if (input.toLowerCase() === "true" || input.toLowerCase() === "false") {
        hasil.textContent = "Tipe: Boolean";
    } else {
        hasil.textContent = "Tipe: String";
    }
}