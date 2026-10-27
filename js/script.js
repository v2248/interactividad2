const TOOGLE_BUTTON = document.getElementById("toggle-theme-btn");

TOOGLE_BUTTON.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});
