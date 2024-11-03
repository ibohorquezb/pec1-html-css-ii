/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import "@fortawesome/fontawesome-free/css/all.css";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Write any other JavaScript below
 */

+(function () {
  toggleMenu();

  window.addEventListener("resize", function () {
    toggleMenu();
  });

  //Muestra/esconde el menú
  document.getElementById("menu").addEventListener("click", function () {
    const navList = document.querySelector(".header__nav ul");
    navList.style.display =
      navList.style.display === "block" ? "none" : "block";
  });

  const headerHeight = document.querySelector("header").offsetHeight;

  //Cambia el tamaño de la cabecera y título de la misma según la posición del scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY >= headerHeight) {
      document.querySelector("header").classList.add("header--reduce");
      document
        .querySelector(".header__title")
        .classList.add("header__title--reduce");
    } else {
      document.querySelector("header").classList.remove("header--reduce");
      document
        .querySelector(".header__title")
        .classList.remove("header__title--reduce");
    }
  });

  //Ajusta la posición de la sección a mostrar
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute("href"));

      // Ajuste del scroll sumando 10rem al top de la sección
      const offset =
        10 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Convierte 10rem a píxeles
      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      if (isMobile()) {
        document.querySelector(".header__nav ul").style.display = "none";
      }
    });
  });

  AOS.init();
})();

function isMobile() {
  return document.documentElement.clientWidth <= 428;
}

//Cambia la disposición del menú según el dispositivo
function toggleMenu() {
  let lista = document.querySelector(".header__nav ul");
  let menu = document.getElementById("menu");
  if (lista) {
    if (isMobile()) {
      lista.classList.add("nav__list");
      lista.classList.remove("nav__list--inline");
      lista
        .querySelectorAll("li")
        .forEach((li) => (li.style.marginBottom = "0.5rem"));
      lista.style.display = "none";
      menu.style.display = "block";
    } else {
      lista.style.display = "";
      lista.classList.add("nav__list--inline");
      lista.classList.remove("nav__list");
      menu.style.display = "none";
    }
  }
}
