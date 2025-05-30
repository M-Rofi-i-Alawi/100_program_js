function jadwalsholat(){
    const kota = document.getElementById("kota").value;

    if (!kota){
        alert("Masukkan nama kota");
        return;
    }

    const url = `https://api.aladhan.com/v1/timingsByCity?city=${kota}&country=Indonesia&method=2`;

    fetch(url)
        .then(Response => Response.json())
        .then(data =>{
            console.log(data);
            const times = data.data.timings;
            document.getElementById("judulkota").textContent = `Jadwal Sholat untuk ${kota}`;
            document.getElementById("Subuh").textContent = times.Fajr;
            document.getElementById("Dzuhur").textContent = times.Dhuhr;
            document.getElementById("Ashar").textContent = times.Asr;
            document.getElementById("Magrib").textContent = times.Maghrib;
            document.getElementById("Isya").textContent = times.Isha;
        })
        .catch(error =>{
            console.error("Gagal mencari lokasi:",error);
            alert("Terjadi kesalahan. Silahkan coba lagi.");
        
        })
}