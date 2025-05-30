const proses = document.querySelector('.proses-bar');

setTimeout(() =>{
    proses.style.opacity = 1;
    proses.style.width = proses.getAttribute('data-bar')+'%';
},500)