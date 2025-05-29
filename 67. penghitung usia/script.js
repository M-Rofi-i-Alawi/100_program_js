function hitungusia() {
    const input = document.getElementById("tanggal").value;
    if (!input) {
        document.getElementById("hasil").textContent = "Masukkan tanggal lahir:";
        return;
    }

    const tanggallahir = new Date(input);
    const hariini = new Date();

    let tahun = hariini.getFullYear() - tanggallahir.getFullYear();
    let bulan = hariini.getMonth() - tanggallahir.getMonth();
    let hari = hariini.getDate() - tanggallahir.getDate();

    if (hari < 0) {
        bulan -= 1;
        hari += new Date(hariini.getFullYear(), hariini.getMonth(), 0).getDate();
    }

    if (bulan < 0) {
        tahun -= 1;
        bulan += 12;
    }

    document.getElementById("hasil").textContent =
        `Usia kamu adalah ${tahun} tahun, ${bulan} bulan, ${hari} hari.`;
}
