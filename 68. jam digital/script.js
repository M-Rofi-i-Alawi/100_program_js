function tampiljam(){
    const sekarang = new Date();
    let jam = sekarang.getHours().toString().padStart(2,'0');
    let menit = sekarang.getMinutes().toString().padStart(2,'0');
    let detik = sekarang.getSeconds().toString().padStart(2,'0');

    document.getElementById("jam").textContent = `${jam}:${menit}:${detik}`;
}

// panggil setiap 1 detik
setInterval(tampiljam,1000);

// tampilkan jam untuk pertama kali
tampiljam();