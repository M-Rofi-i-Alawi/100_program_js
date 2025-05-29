function cek(){
    const tahun = parseInt(document.getElementById("tahun").value);
    let hasil = "";

    if (isNaN(tahun)){
        hasil = "Masukan angka yang valid!!";
    }else if ((tahun % 4 == 0 && tahun % 100 !=0) || (tahun % 400 == 0)){
        hasil = tahun + " tahun ini adalah tahun kabisat";
    }else {
        hasil = tahun + " tahun ini bukan tahun kabisat";
    }

    document.getElementById("hasil").textContent = hasil;
}