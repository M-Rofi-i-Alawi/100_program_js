    let interval;

    function mulai() {
      clearInterval(interval); // Hentikan timer sebelumnya jika ada

      let detik = parseInt(document.getElementById("inputDetik").value);
      const tampilan = document.getElementById("waktu");

      if (isNaN(detik) || detik <= 0) {
        tampilan.textContent = "Masukkan angka yang valid!";
        return;
      }

      updateTampilan(detik); // Tampilkan waktu awal

      interval = setInterval(() => {
        detik--;

        if (detik <= 0) {
          clearInterval(interval);
          tampilan.textContent = "Waktu Habis!";
        } else {
          updateTampilan(detik);
        }
      }, 1000);
    }

    function updateTampilan(detik) {
      const menit = Math.floor(detik / 60);
      const sisaDetik = detik % 60;
      const format = `${String(menit).padStart(2, '0')}:${String(sisaDetik).padStart(2, '0')}`;
      document.getElementById("waktu").textContent = format;
    }