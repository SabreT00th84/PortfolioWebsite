function confirmClear(e) {
    e.preventDefault();

    const confirm = window.confirm("Are you sure you would like to clear this form?");
    const title = document.getElementById("title");
    const content = document.getElementById("content");

    if (confirm) {
        title.value = "";
        content.removeChild(content.lastChild);
    }
}

function validate(e) {
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    const error = document.getElementById("error")

    if (title.value.trim() === "" || content.value.trim() === "") {
        e.preventDefault();

        const p = document.createElement("p");
        p.appendChild(document.createTextNode("Please enter a title and content."))

        while (error.firstElementChild != null) error.removeChild(error.lastElementChild);
        error.appendChild(p);

        if (title.value.trim() === "") {
            title.parentElement.classList.add("highlighted");
        }

        if (content.value.trim() === "") {
            content.parentElement.classList.add("highlighted");
        }
    }
}

document.getElementById("add-entry-form").addEventListener("reset", confirmClear);
document.getElementById("add-entry-form").addEventListener("submit", validate);