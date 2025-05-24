function konversiCasefold() {
    const input = document.getElementById("inputTeks").value;

    // Emulator casefold: ubah ke lowercase, dan ganti ß jadi ss
    let hasil = input.toLowerCase().replace(/ß/g, "ss");

    document.getElementById("hasil").innerText = hasil;
}