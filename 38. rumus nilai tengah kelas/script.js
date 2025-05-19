function hitung() {
    const ba = parseFloat(document.getElementById('ba').value);
    const bb = parseFloat(document.getElementById('bb').value);

    const ntk = bb+ba/2 ;

    document.getElementById("ntk").innerText = "nilai tengah kelas adalah = " + ntk ;
}