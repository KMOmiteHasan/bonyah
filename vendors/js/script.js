const hamburgerMenu = document.querySelector(".hamburger-menu")
const mainMenuBlock = document.querySelector(".main-menu-block")
const hamburgerClose = document.querySelector(".hamburger-close")

function toggleMenu() {
    mainMenuBlock.classList.toggle("show-menu");
}

hamburgerMenu.addEventListener('click', function (event) {
    event.stopPropagation();

    toggleMenu();

    document.addEventListener('click', function (event) {
        if (!mainMenuBlock.contains(event.target)) {
            mainMenuBlock.classList.remove("show-menu");
            document.removeEventListener('click', toggleMenu);
        }
    });
});

mainMenuBlock.addEventListener('click', function (event) {
    event.stopPropagation();
});

hamburgerClose.addEventListener('click', function () {
    mainMenuBlock.classList.remove("show-menu");
});