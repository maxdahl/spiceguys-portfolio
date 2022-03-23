let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  burgerMenu.classList.toggle("menu-open");

  if (menuOpen) {
    document.querySelector("header").style.position = "relative";
    document.querySelector("nav").style.display = "flex";
    document.querySelector("main").style.display = "none";
  } else {
    document.querySelector("header").style.position = "fixed";
    document.querySelector("nav").style.display = "none";
    document.querySelector("main").style.display = "block";
  }
}

const burgerMenu = document.querySelector("#nav-icon");
burgerMenu.addEventListener("click", toggleMenu);

// slideup/slidedown
const submenus = document.querySelectorAll(".submenu span");
submenus.forEach((el) => {
  el.onclick = function (e) {
    submenu = el.parentElement.querySelector("ul");
    console.log(el);
    submenu.classList.toggle("collapsed");
    submenu.classList.toggle("expanded");
  };
});

document.querySelector("nav").onclick = function (e) {
  if (e.path[0].tagName === "NAV") {
    toggleMenu();
  }
};
