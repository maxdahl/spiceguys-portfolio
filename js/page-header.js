let menuOpen = false;

const burgerMenu = document.querySelector("#nav-icon");
burgerMenu.addEventListener("click", (event) => {
  menuOpen = !menuOpen;
  burgerMenu.classList.toggle("menu-open");

  if (menuOpen) {
    document.querySelector("header").style.position = "relative";
    document.querySelector("nav").style.display = "block";
  } else {
    document.querySelector("header").style.position = "static";
    document.querySelector("nav").style.display = "none";
  }
});
