function hitung(){
    const a = parseInt(document.getElementById("awal").value);
    const d = parseInt(document.getElementById("beda").value);
    const n = parseInt(document.getElementById("jumlah").value);
    const hasil = document.getElementById("hasil");

    if(isNaN(a) || isNaN (d) || isNaN(n) || n <=0){
        hasil.textContent = "masukkan nilai yang valid";
        return;
    }

    let deret = []
    for (let i = 0; i < n; i++){
        deret.push(a+i*d);
    }

    const jumlahderet = (n/2)*(2*a+(n-1)*d);

    hasil.innerHTML = `
        Deret: ${deret.join(', ')}<br>
        jumlah semua suku: <strong>${jumlahderet}</strong>
    `;
}