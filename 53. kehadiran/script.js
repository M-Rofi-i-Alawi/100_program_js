function cek() {
    const nama = document.getElementById("nama").value;
    const kelas = document.getElementById("kelas").value;
    const kehadiran = document.getElementById("kehadiran").value;
    const hasil = document.getElementById("hasil");

    if (!nama || !kelas || !kehadiran) {
        hasil.innerHTML = "<p style='color:red;'>Silakan lengkapi semua data terlebih dahulu.</p>";
        return;
    }

    let pesan = "";

    switch (kehadiran) {
     case "hadir":
            pesan = "mengikuti pembelajaran di kelas";
            break;
        case "izin":
            pesan = "tidak mengikuti pembelajaran di kelas dikarenakan sedang izin";
            break;
        case "sakit":
            pesan = "tidak mengikuti pembelajaran di kelas dikarenakan sedang sakit";
            break;
        case "alpha":
            pesan = "tidak mengikuti pembelajaran di kelas dikarenakan bolos sekolah";
            break;
        default:
            pesan = "status kehadiran tidak valid";
    }

    hasil.innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Kelas:</strong> ${kelas}</p>
        <p><strong>Keterangan:</strong> ${pesan}</p>
      `;
}