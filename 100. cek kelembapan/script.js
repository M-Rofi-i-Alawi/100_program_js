function cek(){
  const nilai = parseFloat(document.getElementById("kelembapan").value);
  const hasil = document.getElementById("hasil");

  if(isNaN(nilai)){
    hasil.textContent = "Masukan angka valid";
  } else if (nilai >= 0 && nilai <=30){
    hasil.textContent = "kondisi : kering";
  } else if (nilai <=60){
    hasil.textContent = "kondisi : normal ";
  } else if (nilai <=100){
    hasil.textContent = "kondisi : lembap"
  } else{
    hasil.textContent = "Nilai kelembapan tidak valid";
  }

}