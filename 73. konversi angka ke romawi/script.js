function konversi() {
    const angka = parseInt(document.getElementById("angka").value);
    const output = document.getElementById("hasil");

    if (isNaN(angka) || angka < 1 || angka > 3999) {
        output.textContent = "Masukkan angka antara 1 sampai 3999.";
        return;
    }

    const romawi = [
        { nilai: 1000, simbol: "M" },
        { nilai: 900, simbol: "CM" },
        { nilai: 500, simbol: "D" },
        { nilai: 400, simbol: "CD" },
        { nilai: 100, simbol: "C" },
        { nilai: 90, simbol: "XC" },
        { nilai: 50, simbol: "L" },
        { nilai: 40, simbol: "XL" },
        { nilai: 10, simbol: "X" },
        { nilai: 9, simbol: "IX" },
        { nilai: 5, simbol: "V" },
        { nilai: 4, simbol: "IV" },
        { nilai: 1, simbol: "I" },
    ];

    let hasil = "";
    let sisa = angka;

    for (let i = 0; i < romawi.length; i++) {
        while (sisa >= romawi[i].nilai) {
          hasil += romawi[i].simbol;
          sisa -= romawi[i].nilai;
        }
    }

    output.textContent = `Angka Romawi dari ${angka} adalah ${hasil}`;
}