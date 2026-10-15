
document.addEventListener("DOMContentLoaded", function () {
    const burgerOpen = document.getElementById("burgericon");
    const burgerClose = document.getElementById("close");
    const menu = document.getElementById("menu");

    // åben menu
    burgerOpen.addEventListener("click", function (event) {
        menu.classList.add("active");
        event.stopPropagation(); // søre for at den ikke lukker den med det samme
    });

    // lukker menu når man trykker på lukknap
    burgerClose.addEventListener("click", function () {
        menu.classList.remove("active");
    });

    // lukker menu når du klikker udenfor menu
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !burgerOpen.contains(event.target)) {
            menu.classList.remove("active");
        }
    });

    // lukker menu når mus forlader den
    menu.addEventListener("mouseleave", function () {
        menu.classList.remove("active");
    });
});


