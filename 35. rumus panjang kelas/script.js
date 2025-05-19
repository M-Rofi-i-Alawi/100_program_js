function hitung() {
    const ba = parseFloat(document.getElementById('ba').value);
    const bb = parseFloat(document.getElementById('bb').value);

    const pk = ba-bb ;

    document.getElementById("pk").innerText = "panjang kelas = " + pk ;
}