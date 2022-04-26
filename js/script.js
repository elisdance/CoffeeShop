const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu__list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    menuList.classList.toggle("active");
}

const menuLink = document.querySelectorAll(".menu__link");

menuLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    menuList.classList.remove("active");
}