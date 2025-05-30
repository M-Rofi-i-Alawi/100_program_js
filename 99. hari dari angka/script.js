function cek(){
    const angka = parseInt(document.getElementById("angka-hari").value);
    let nama_hari;

    switch (angka){
        case 1:
            nama_hari = "senin";
            break;
        case 2:
            nama_hari ="selasa";
            break;
        
        case 3:
            nama_hari ="rabu";
            break;
        
        case 4:
            nama_hari ="kamis";
            break;
        
        case 5:
            nama_hari ="jumat";
            break;
        
        case 6:
            nama_hari ="sabtu";
            break;
        
        case 7:
            nama_hari ="minggu";
            break;
        default:
            nama_hari = "angka tidak valid";
    }
    document.getElementById("hasil").textContent = "Hari : " +nama_hari;
}