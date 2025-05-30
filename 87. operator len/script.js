function hitung(){
    const teks = document.getElementById("inputteks").value;
    const panjang = teks.length;
    const output = document.getElementById("output");

    output.textContent = `panjang dari teks ${teks} = ${panjang}`;
}