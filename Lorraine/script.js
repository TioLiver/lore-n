document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente ❤");
});
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}