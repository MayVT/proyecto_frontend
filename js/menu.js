// Funcionalidad menu mobile

// Variables
const navDOM = document.querySelector("#nav");
const logoDesktopDOM = document.querySelector("#logo-desktop");
const buttonOpen = document.querySelector("#open");
const buttonClose = document.querySelector("#close");



// Funciones
function openMenu() {
    navDOM.classList.add("nav--show");
    logoDesktopDOM.classList.add("header__hide");
    buttonOpen.classList.add("header__hide");
}
function closeMenu() {
    navDOM.classList.remove("nav--show");
    logoDesktopDOM.classList.remove("header__hide");
    buttonOpen.classList.remove("header__hide");
}

// Eventos
buttonOpen.addEventListener("click", openMenu);
buttonClose.addEventListener("click", closeMenu);




