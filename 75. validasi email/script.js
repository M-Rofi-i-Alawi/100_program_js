function cek(){
    const email = document.getElementById("email").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasil = document.getElementById("hasil");

    if (regex.test(email)){
        hasil.textContent = "email valid";
        hasil.style.color = "green";
    } else{
        hasil.textContent ="email tidak valid";
        hasil.style.color = "red";
    }
}