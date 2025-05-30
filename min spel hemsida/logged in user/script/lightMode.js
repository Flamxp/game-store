function switchMode() {
    const body = document.body;
    const switch_icon = document.getElementById("switch-icon");

    if (body.classList.contains("switch-mode")) {
        body.classList.remove("switch-mode");
        switch_icon.classList.remove("fa-solid", "fa-moon");
        switch_icon.classList.add("fa-solid", "fa-sun");
    } else {
        body.classList.add("switch-mode");
        switch_icon.classList.remove("fa-solid", "fa-sun");
        switch_icon.classList.add("fa-solid", "fa-moon");
    }
}
