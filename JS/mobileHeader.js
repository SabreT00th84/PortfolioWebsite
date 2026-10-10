function toggleMenu(e) {
    const button = document.querySelector("#menu>img");
    const menu = document.getElementById("navLinks")

    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.classList.add("displayed")
        button.src = "Images/xmark-icon.svg";
    } else {
        menu.classList.remove("displayed");
        menu.classList.add("hidden");
        button.src = "Images/menu-icon.svg";
    }
}

document.getElementById("menu").addEventListener("click", toggleMenu);