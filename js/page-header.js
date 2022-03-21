let menuOpen = false;

const burgerMenu = document.querySelector("#nav-icon");
burgerMenu.addEventListener("click", (event) => {
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
});
