function cek(){
    const teks = document.getElementById("teks").value;
    const teks_bersih = teks.toLowerCase().replace(/[^a-z0-9]/g, '');
    const dibalik = teks_bersih.split('').reverse().join('');

    if (teks_bersih && teks_bersih === dibalik){
        document.getElementById("hasil").textContent = `${teks} " adalah palindrome "`;
        document.getElementById("hasil").style.color = "green";
    } else {
        document.getElementById("hasil").textContent = `${teks} " bukan palindrome "`;
        document.getElementById("hasil").style.color = "red";
    }
}