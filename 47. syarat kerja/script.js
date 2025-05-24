function biodata(){
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const pendidikan = document.getElementById('pendidikan').value;
    const pengalaman = parseInt(document.getElementById('pengalaman').value);

    let hasil ="";

    if (umur >= 20 && umur <= 35) {
        if (["SMK", "S1", "S2", "S3"].includes(pendidikan)) {
          if (pengalaman >= 2) {
            hasil = `Selamat, ${nama}! Anda diterima di perusahaan kami.`;
          } else {
            hasil = `Maaf ${nama}, pengalaman kerja Anda belum mencukupi.`;
          }
        } else {
          hasil = `Maaf ${nama}, pendidikan Anda belum memenuhi syarat.`;
        }
      } else {
        hasil = `Maaf ${nama}, usia Anda belum memenuhi syarat. Silakan coba lagi tahun depan.`;
      }
      document.getElementById('hasil').innerText = hasil;
}