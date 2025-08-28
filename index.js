const Harmburger = document.getElementById("harmburger-menu");
const MobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

const MenuLink = document.querySelectorAll(".menu-link");

Harmburger.addEventListener("click" , () => {

  MobileMenu.classList.remove("translate-x-full");
  MobileMenu.classList.add("translate-x-0");

});

closeMenu.addEventListener("click" , () => {
  MobileMenu.classList.remove("translate-x-0");
  MobileMenu.classList.add("translate-x-full");
});

MenuLink.forEach( link => {
  link.addEventListener("click" , () => {
    MobileMenu.classList.remove("translate-x-0");
    MobileMenu.classList.add("translate-x-full");
  });
});