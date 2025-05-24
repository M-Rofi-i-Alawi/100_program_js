function cek(){
    const total_bayar = parseInt(document.getElementById("total_bayar").value);
    const hasil = document.getElementById("hasil");

    if (total_bayar){
        if (total_bayar >= 3000000){
            hasil.textContent = "Anda adalah seorang member alfamart";
        } else{
            hasil.textContent = "Anda bukanlah seorang member alfamart";
        }
    } else{
        hasil.textContent = "tidak valid";
    }
}