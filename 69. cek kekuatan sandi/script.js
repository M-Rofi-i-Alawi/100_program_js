function periksasandi() {
    const sandi = document.getElementById("sandi").value;
    const hasil = document.getElementById("hasil");

    let kekuatan = 0;

    if (sandi.length >= 8) kekuatan++;
    if (/[A-Z]/.test(sandi)) kekuatan++;
    if (/[0-9]/.test(sandi)) kekuatan++;
    if (/[^A-Za-z0-9]/.test(sandi)) kekuatan++;

    if (sandi.length === 0) {
        hasil.textContent = "";
    } else if (kekuatan <= 1) {
        hasil.textContent = "Kekuatan: Lemah";
        hasil.style.color = "red";
    } else if (kekuatan === 2 || kekuatan === 3) {
        hasil.textContent = "Kekuatan: Sedang";
        hasil.style.color = "orange";
    } else {
        hasil.textContent = "Kekuatan: Kuat";
        hasil.style.color = "green";
    }
}
function toggleSandi() {
    const input = document.getElementById("sandi");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}