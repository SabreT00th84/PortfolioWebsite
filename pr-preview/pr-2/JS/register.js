function validate(e) {
    const password = document.getElementById("password")
    const confirm = document.getElementById("confirm");
    const error = document.getElementById("error")

    if (password.value !== confirm.value) {
        e.preventDefault();

        const p = document.createElement("p");
        p.appendChild(document.createTextNode("Your password and confirmation do not match"));

        while (error.firstElementChild != null) error.removeChild(error.lastElementChild);
        error.appendChild(p);
    }
}

document.getElementById("register-form").addEventListener("submit", validate);