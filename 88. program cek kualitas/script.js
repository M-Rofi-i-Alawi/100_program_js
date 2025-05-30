function cek() {
      const harga = parseInt(document.getElementById('harga').value);
      const kualitas = document.getElementById('kualitas').value.toLowerCase();
      const hasil = document.getElementById('hasil');

    if (isNaN(harga) || harga <= 0) {
        hasil.style.color = 'red';
        hasil.textContent = "Mohon masukkan harga yang valid!";
        return;
    }

    if (!["oke", "bagus", "lumayan"].includes(kualitas)) {
        hasil.style.color = 'red';
        hasil.textContent = "Mohon pilih kualitas yang tersedia!";
        return;
    }

    if (kualitas === "oke" && harga > 1000000 && harga <= 2000000) {
        hasil.style.color = 'green';
        hasil.textContent = "Harga segitu bagus untuk dipakai.";
    } else if (kualitas === "bagus" && harga > 1000000 && harga <= 2000000) {
        hasil.style.color = 'orange';
        hasil.textContent = "Harga segitu masih bisa dipakai, tapi harga perlu dipertimbangkan kembali.";
    } else if (kualitas === "lumayan" && harga > 1000000 && harga <= 2000000) {
        hasil.style.color = 'orange';
        hasil.textContent = "Harga segitu masih layak untuk bisa dipakai.";
    } else if (harga > 2000000 && kualitas === "oke") {
        hasil.style.color = 'blue';
        hasil.textContent = "Harganya kemahalan, tapi spesifikasinya bagus, perlu dipertimbangkan.";
    } else if (harga > 2000000 && (kualitas === "lumayan" || kualitas === "bagus")) {
        hasil.style.color = 'red';
        hasil.textContent = "Harganya terlalu mahal, jadi tidak layak dipakai, jika dilihat kualitasnya.";
    } else if (harga < 1000000 && (kualitas === "bagus" || kualitas === "lumayan")) {
        hasil.style.color = 'green';
        hasil.textContent = "Harga murah, kualitasnya masih layak untuk dipakai.";
    } else if (harga < 1000000 && !["oke", "bagus", "lumayan"].includes(kualitas)) {
        hasil.style.color = 'red';
        hasil.textContent = "Harga murah, tapi kualitasnya tidak layak.";
    } else {
        hasil.style.color = 'red';
        hasil.textContent = "Gak layak dipakai.";
    }
}