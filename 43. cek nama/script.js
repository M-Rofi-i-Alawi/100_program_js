function cek() {
    const nama = document.getElementById("nama").value.trim();
        let hasil = "";

    if (nama === "Muhammad Rofi'i Alawi") {
        hasil = "Hai Rofi san";
    } else if (nama === "Rofi'i Alawi") {
        hasil = "Kamu pasti Muhammad Rofi'i Alawi kan?<br>Hai Rofi san";
    } else if (nama === "Rofi") {
        hasil = "Kamu pasti Muhammad Rofi'i Alawi kan?<br>Hai Rofi san";
    } else {
        hasil = `Siapa kamu? ${nama}<br>Kamu bukan Rofi, kamu pasti hacker`;
    }
        document.getElementById("hasil").innerHTML = hasil;
}