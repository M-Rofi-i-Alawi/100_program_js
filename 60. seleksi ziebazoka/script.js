function prosesSeleksi() {
  const menu = document.getElementById("menu").value;
  const nama = document.getElementById("nama").value;
  const kelas = document.getElementById("kelas").value;
  const nilai = parseInt(document.getElementById("nilai").value);
  let status = "";

  if (!nama || !kelas || isNaN(nilai)) {
        document.getElementById("hasil").innerHTML = "<strong>Silakan isi semua data dengan benar.</strong>";
        return;
  }

  if (menu === "osis") {
        status = nilai >= 75 ? "Diterima di OSIS" : "Tidak diterima";
  } else if (menu === "mpk") {
        status = nilai >= 85 ? "Diterima di MPK" : "Tidak diterima";
  }

  document.getElementById("hasil").innerHTML = `
        <h3>Hasil Seleksi</h3>
        <hr>
        Nama Peserta: ${nama} <br>
        Kelas Peserta: ${kelas} <br>
        Status Peserta: <strong>${status}</strong>`;
}