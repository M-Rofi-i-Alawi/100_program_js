function hitung(){
    const teks = document.getElementById("teks").value.toLowerCase();
    const vokal = ['a','i','u','e','o'];
    let jumlah = 0;

    for (let huruf of teks) {
        if (vokal.includes(huruf)){
            jumlah++;
        }
    }

    document.getElementById("hasil").textContent = `jumlah huruf vokal di teks/kalimat tersebut adalah : ${jumlah}`;
}