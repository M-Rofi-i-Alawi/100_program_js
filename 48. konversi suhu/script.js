function konversi() {
    const suhu = parseFloat(document.getElementById('suhu').value);
    const pilihan = parseInt(document.getElementById('konversi').value);
    let hasil = "";

    if (isNaN(suhu)) {
        hasil = "Masukkan suhu yang valid.";
    } else {
        switch (pilihan) {
          case 1:
            hasil = `${suhu}°C = ${(9/5 * suhu + 32).toFixed(2)}°F`;
            break;
          case 2:
            hasil = `${suhu}°C = ${(suhu + 273.15).toFixed(2)}K`;
            break;
          case 3:
            hasil = `${suhu}°F = ${(5/9 * (suhu - 32)).toFixed(2)}°C`;
            break;
          case 4:
            hasil = `${suhu}K = ${(suhu - 273.15).toFixed(2)}°C`;
            break;
          case 5:
            hasil = `${suhu}°C = ${(4/5 * suhu).toFixed(2)}°Re`;
            break;
          case 6:
            hasil = `${suhu}°Re = ${(5/4 * suhu).toFixed(2)}°C`;
            break;
          default:
            hasil = "Pilihan tidak valid.";
        }
    }

    document.getElementById('hasil').innerText = hasil;
}