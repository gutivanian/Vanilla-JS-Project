const form = document.querySelector('form');
const passwordInput = document.getElementById('password');
const passToggleBtn = document.getElementById("pass-toggle-btn");

let showError = (field, errorText) =>{
    field.classList.add('error');
    let errorElement = document.createElement('small');
    errorElement.classList.add('error-text');
    errorElement.textContent = errorText;
    // menuju ke parent dan ditambahkan di parent itu
    field.closest(".form-group").appendChild(errorElement);
}

let handleFormData = (e) => {
    // Mencegah data langsung dikirim (mengecek jika ada kesalahan)
    e.preventDefault();

    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const genderInput = document.getElementById("gender");

    // Melakukan trimming(jika ada spasi di depan/belakang)
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const gender = genderInput.value;

    // Membuat validasi email yang valid
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Menghapus semua kelas error 
    document.querySelectorAll('.form-group .error').forEach(field => {
        field.classList.remove('error');
    });

    document.querySelectorAll('.error-text').forEach(errorText => errorText.remove())

    if (fullname === ""){
        // menambahkan error dibawah fullnameinput
        showError(fullnameInput, "Enter your fullname");
    }
    if (!emailPattern.test(email)){
        showError(emailInput, "Enter a valid email address");
    }
    if (password === ""){
        showError(passwordInput, "Enter your password");
    }
    if (date === "" ){
        showError(dateInput, "Enter a valid date");
    }
    if (gender ===""){
        showError(genderInput, "Enter your gender");
    }

    // cek jika ada error sebelum submisi
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // submit form
    form.submit();
}


// Jika mata di klik mengubah password bisa dibuka atau tidak
passToggleBtn.addEventListener("click", () =>{
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// jika form disubmit, maka jalankan handleformdata
form.addEventListener("submit", handleFormData);