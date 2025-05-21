function hitung(){
    const indonesia = parseInt(document.getElementById('indonesia').value)
    const ipas = parseInt(document.getElementById('ipas').value)
    const sunda = parseInt(document.getElementById('sunda').value)
    const mtk = parseInt(document.getElementById('mtk').value)
    const daspro = parseInt(document.getElementById('daspro').value)
    const informatika = parseInt(document.getElementById('informatika').value)
    const inggris = parseInt(document.getElementById('inggris').value)

    const jumlah = indonesia + ipas + sunda + mtk + daspro + informatika + inggris;
    const rata2 = jumlah / 7;

    let akreditasi;
    if (rata2 >= 90 && rata2 <= 100){
        akreditasi="A";
    }
    else if (rata2 >= 85 && rata2 <=89){
        akreditasi="B";
    }
    else if (rata2 >=   80 && rata2 <=    84){
        akreditasi="C";
    }
    else if (rata2 >=   75 && rata2 <=    79){
        akreditasi="D";
    } else {
        akreditasi="tidak masuk disalah satu akreditasi tersebut"
    }

    document.getElementById('hasil').innerHTML =`Total nilai = ${jumlah}
    rata-rata nilai = ${rata2.toFixed(2)}
    akreditasi = ${akreditasi}
    `;
}