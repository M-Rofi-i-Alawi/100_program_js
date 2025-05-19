function hitung() {
    const c = parseFloat(document.getElementById('c').value);
    const f = parseFloat(document.getElementById('f').value);

    const λ = c/f;

    document.getElementById("λ").innerText = "panjang gelombang nya adalah = " + λ + "  λ";
}