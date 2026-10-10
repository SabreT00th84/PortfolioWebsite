function toggleMenu(e) {
    const button = document.querySelector("#menu>img");
    const menu = document.getElementById("navLinks")

    if (menu.style.display === "none") {
        menu.style.display = "flex";
        button.src = "Images/xmark-icon.svg";
    } else {
        menu.style.display = "none";
        button.src = "Images/menu-icon.svg";
    }
}

document.getElementById("menu").addEventListener("click", toggleMenu);