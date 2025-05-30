const inputs = document.querySelectorAll(".inputBox input");
const box = document.querySelector(".box");
const form = document.querySelector("form");

// Animasi fokus input
inputs.forEach(input => {
    input.addEventListener("focus", () => {
        box.classList.add("active");
    });

    input.addEventListener("blur", () => {
        const isAnyFocused = [...inputs].some(i => i === document.activeElement);
        if (!isAnyFocused) {
            box.classList.remove("active");
        }
    });
});

// Validasi form
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.querySelector("input[type='email']").value.trim();
    const password = document.querySelector("input[type='password']").value.trim();

    if (!username || !password) {
        box.classList.add("shake");

        setTimeout(() => {
            box.classList.remove("shake");
        }, 500);

        alert("Username dan Password wajib diisi!");
    } else {
        alert("Login berhasil!");
    }
});

// Toggle password show/hide
const togglePasswordBtn = document.querySelector('.togglePassword');
const passwordInput = document.getElementById('password');

togglePasswordBtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordBtn.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        togglePasswordBtn.textContent = 'Show';
    }
});
