function hitung(){
    const input = document.getElementById("angka").value;
    const angka = parseInt(input);
    const hasil = document.getElementById("hasil");

    if (isNaN(angka) || angka <= 0){
        hasil.textContent = "Masukkan bilangan bulat > 0";
        return;
    }

    let faktorial = 1;
    for (let i = 1; i<= angka; i++){
        faktorial *= i;
    }
    hasil.textContent = `hasil dari ${angka} adalah ${faktorial}`
}