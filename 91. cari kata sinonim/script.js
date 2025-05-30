async function cari(){
    const kata = document.getElementById("kata").value.trim();
    const sinonimlist = document.getElementById("sinonim");
    const antonimlist = document.getElementById("antonim");

    sinonimlist.innerHTML = '';
    antonimlist.innerHTML = '';

    if(!kata) return alert("Masukan sebuah kata!");
    
    try {
        const respon = await fetch(`https://api.datamuse.com/words?rel_syn=${kata}`);
        const data_sinonim = await respon.json();

        const respon2 = await fetch (`https://api.datamuse.com/words?rel_ant=${kata}`);
        const data_antonim = await respon2.json();

        if (data_sinonim.length === 0) sinonimlist.innerHTML =  "<li>Tidak ditemukan.</li>";
        else data_sinonim.slice(0,10).forEach(item => {
            sinonimlist.innerHTML += `<li>${item.word}</li>`;
        });

        if (data_antonim.length === 0) antonimlist.innerHTML =  "<li>Tidak ditemukan.</li>";
        else data_antonim.slice(0,10).forEach(item => {
            antonimlist.innerHTML += `<li>${item.word}</li>`;
        });
    } catch (err){
        alert("gagal mengambil data dari API");
        console.error(err);
    }
}